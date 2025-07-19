import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';

// JSON file path
const DATA_FILE = path.join(process.cwd(), 'data', 'blogPosts.json');

// DELETE a specific blog post
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // Ensure JSON file exists
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ error: 'No posts found' }, { status: 404 });
    }
    
    const posts = await fs.readJson(DATA_FILE);
    const updatedPosts = posts.filter((post) => post.id != id);
    
    await fs.writeJson(DATA_FILE, updatedPosts, { spaces: 2 });
    
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
