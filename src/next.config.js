/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: false, // Disable the new App Router (Only needed if using the Pages Router)
    },
    pageExtensions: ["js", "jsx", "ts", "tsx"], // Ensure these extensions are recognized
  }
  
  module.exports = nextConfig;
  