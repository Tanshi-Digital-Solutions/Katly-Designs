# Modern Business Template

A modern, responsive business website template built with Next.js 15, featuring a bright color scheme, serverless functionality, and a built-in blog system.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Bright, modern color scheme** with blue accents
- 💼 **Generic business template** - easily customizable for any business
- 📱 **Fully responsive** design
- 🔥 **Serverless blog system** using Next.js API routes
- 🌟 **Smooth animations** with Framer Motion
- 🎨 **Tailwind CSS** for styling
- 📧 **Contact form** integration ready
- 🔧 **Admin panel** for blog management
- 🌈 **Animated background** elements

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-business-template.git
cd modern-business-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Brand & Colors

1. **Company Name**: Update in `src/components/Header.js` (line 24)
2. **Logo**: Replace the text logo with your image in `src/components/Header.js`
3. **Colors**: Modify the color scheme in `src/app/globals.css` (CSS variables) and `tailwind.config.mjs`

### Content

1. **Homepage**: Edit `src/pages/index.js` to customize:
   - Hero section text
   - Services offered
   - About section
   - Contact information

2. **Services**: Update the services array in `src/pages/index.js` and create detailed pages in `src/pages/services.js`

3. **About Page**: Customize `src/pages/about.js` with your company information

4. **Contact Page**: Update `src/pages/contact.js` with your contact details

### Blog System

The blog system is built with Next.js API routes and works serverlessly:

- **Admin Access**: Visit `/admin-blog` to manage posts
- **Default Password**: `Admin@2025` (change in `src/app/api/posts/route.js`)
- **Public Blog**: Available at `/blog`
- **Data Storage**: Blog posts are stored in `data/blogPosts.json`
- **Image Uploads**: Images are stored in `public/uploads/`

### API Routes

- `GET /api/posts` - Fetch all blog posts
- `POST /api/posts` - Create new blog post (requires password)
- `DELETE /api/posts/[id]` - Delete blog post

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── posts/          # Blog API routes
│   ├── globals.css         # Global styles and color scheme
│   └── layout.js           # Root layout
├── components/
│   ├── Header.js           # Navigation header
│   ├── ServiceCard.js      # Service card component
│   └── ui/                 # UI components
├── pages/
│   ├── index.js            # Homepage
│   ├── about.js            # About page
│   ├── services.js         # Services page
│   ├── contact.js          # Contact page
│   ├── blog.js             # Public blog
│   └── admin-blog.js       # Admin blog management
└── lib/
    └── utils.js            # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

This template works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Headless UI** - UI components
- **Heroicons** - Icons
- **fs-extra** - File system utilities
- **Axios** - HTTP client

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please create an issue in the GitHub repository.

---

**Note**: This template is designed to be easily customizable. Replace all placeholder content with your actual business information before going live.
