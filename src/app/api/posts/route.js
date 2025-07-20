import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';

// JSON file path
const DATA_FILE = path.join(process.cwd(), 'data', 'blogPosts.json');

// Ensure data directory and JSON file exist
const ensureDataFile = async () => {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    await fs.ensureDir(dataDir);
  }
  if (!fs.existsSync(DATA_FILE)) {
    await fs.writeFile(DATA_FILE, '[]');
  }
};

// GET all blog posts
export async function GET() {
  try {
    await ensureDataFile();
    const posts = await fs.readJson(DATA_FILE);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error reading posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST create a new blog post
export async function POST(request) {
  try {
    await ensureDataFile();
    const formData = await request.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const password = formData.get('password');
    const images = formData.getAll('images');

    // Simple password check
    if (password !== 'Admin@2025') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const posts = await fs.readJson(DATA_FILE);

    // Handle multiple image uploads
    const imageUrls = [];
    if (images && images.length > 0) {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.ensureDir(uploadsDir);
      
      for (const image of images) {
        if (image && image.size > 0) {
          const filename = `${Date.now()}_${Math.random().toString(36).substring(7)}_${image.name}`;
          const filepath = path.join(uploadsDir, filename);
          
          const buffer = await image.arrayBuffer();
          await fs.writeFile(filepath, new Uint8Array(buffer));
          
          imageUrls.push(`/uploads/${filename}`);
        }
      }
    }

    const newPost = {
      id: Date.now(),
      title,
      description,
      images: imageUrls,
      createdAt: new Date().toISOString(),
      author: 'Katly Designs Team',
      readTime: Math.ceil(description.split(' ').length / 200) + ' min read'
    };

    posts.push(newPost);
    await fs.writeJson(DATA_FILE, posts, { spaces: 2 });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
