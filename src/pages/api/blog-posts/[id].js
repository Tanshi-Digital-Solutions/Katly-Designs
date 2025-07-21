import fs from 'fs';
import path from 'path';

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

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    // Delete post
    const posts = readPosts();
    const filteredPosts = posts.filter(post => post.id !== parseInt(id));
    
    if (posts.length === filteredPosts.length) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    writePosts(filteredPosts);
    return res.status(200).json({ message: 'Post deleted successfully' });
  }

  res.setHeader('Allow', ['DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
