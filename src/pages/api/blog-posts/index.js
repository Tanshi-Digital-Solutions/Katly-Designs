import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary (you'll need to set these environment variables)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const postsFilePath = path.join(process.cwd(), 'posts.json');

// Helper function to read posts
const readPosts = () => {
  try {
    if (fs.existsSync(postsFilePath)) {
      const data = fs.readFileSync(postsFilePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
};

// Helper function to write posts
const writePosts = (posts) => {
  try {
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error('Error writing posts:', error);
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Get all posts
    const posts = readPosts();
    return res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    // Create new post
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing form data' });
      }

      const { title, description, password } = fields;

      // Verify password
      if (password !== 'Admin@2025') {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      try {
        // Handle multiple images
        const uploadedImages = [];
        const imageFiles = Array.isArray(files.images) ? files.images : [files.images].filter(Boolean);

        for (const imageFile of imageFiles) {
          if (imageFile) {
            // Upload to Cloudinary
            const result = await cloudinary.uploader.upload(imageFile.filepath, {
              folder: 'katly-designs-blog',
              resource_type: 'auto',
            });
            uploadedImages.push(result.secure_url);
          }
        }

        // Create new post
        const posts = readPosts();
        const newPost = {
          id: Date.now(),
          title: Array.isArray(title) ? title[0] : title,
          description: Array.isArray(description) ? description[0] : description,
          images: uploadedImages,
          createdAt: new Date().toISOString(),
          author: 'Katly Designs',
          readTime: `${Math.ceil(description.length / 200)} min read`,
        };

        posts.push(newPost);
        writePosts(posts);

        return res.status(201).json(newPost);
      } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ error: 'Error creating post' });
      }
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
