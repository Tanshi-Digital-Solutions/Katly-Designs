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

// POST create a new blog post with base64 image
export async function POST(request) {
  try {
    await ensureDataFile();
    const body = await request.json();
    const { title, description, password, imageBase64 } = body;

    // Simple password check
    if (password !== 'Admin@2025') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const posts = await fs.readJson(DATA_FILE);

    const newPost = {
      id: Date.now(),
      title,
      description,
      image: imageBase64, // Store as base64
      createdAt: new Date().toISOString(),
    };

    posts.push(newPost);
    await fs.writeJson(DATA_FILE, posts, { spaces: 2 });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
