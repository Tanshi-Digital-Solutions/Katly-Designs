# Blog System Guide

## Overview
The blog system is fully serverless using Next.js API routes. No external database or server is required - everything runs within Next.js.

## How It Works

### Data Storage
- Blog posts are stored in `data/blogPosts.json`
- Images are uploaded to `public/uploads/`
- Everything is file-based, making it perfect for small to medium blogs

### API Endpoints
1. **GET /api/posts** - Fetches all blog posts
2. **POST /api/posts** - Creates a new blog post (with image upload)
3. **DELETE /api/posts/[id]** - Deletes a specific post

### Admin Access
1. Navigate to `/admin-blog`
2. Click "New Post"
3. Enter the password: `Admin@2025`
4. Create your post with:
   - Title
   - Description (supports multi-line text)
   - Optional image upload

### Public Blog
- Visit `/blog` to see all published posts
- Posts are displayed with images and descriptions
- Click on images to view them in full size

## Troubleshooting

### If you get a 403 error:
- Make sure you're using the correct password: `Admin@2025`
- Check that the password is exactly as shown (case-sensitive)

### If images don't upload:
- Ensure `public/uploads/` directory exists
- Check file permissions on the uploads directory
- Try smaller image files (under 5MB recommended)

### For production deployment:
1. **Vercel**: Works out of the box
2. **Other platforms**: Ensure they support Next.js API routes and file system access

## Customization

### Change Admin Password
Edit `src/app/api/posts/route.js` line 42:
```javascript
if (password !== 'YourNewPassword') {
```

### Modify Blog Layout
- Edit `src/pages/blog.js` for public blog appearance
- Edit `src/pages/admin-blog.js` for admin interface

### Add Categories/Tags
You can extend the blog system by:
1. Adding fields to the post object in the API
2. Updating the admin form to include new fields
3. Modifying the display components

## Security Notes
- The password is checked server-side for security
- Consider adding environment variables for sensitive data in production
- For larger applications, consider using a proper database

## Backup
Remember to backup `data/blogPosts.json` regularly as it contains all your blog posts!
