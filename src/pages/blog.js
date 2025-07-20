'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Header from '../components/Header';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Calendar, Clock, User, Heart, Share2, Sparkles } from 'lucide-react';

export default function PublicBlog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      const sortedPosts = response.data.sort((a, b) => b.id - a.id);
      setPosts(sortedPosts);
      // Initialize image indices
      const indices = {};
      sortedPosts.forEach(post => {
        indices[post.id] = 0;
      });
      setCurrentImageIndex(indices);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const nextImage = (postId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [postId]: (prev[postId] + 1) % totalImages
    }));
  };

  const prevImage = (postId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [postId]: prev[postId] === 0 ? totalImages - 1 : prev[postId] - 1
    }));
  };

  const openImageModal = (image) => {
    setModalImage(image);
    setIsImageModalOpen(true);
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <Header />

      {/* Hero Section with enhanced styling */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background with Diamond Pattern */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* SVG Diamond Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="blogDiamondPattern"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M60 20 L80 60 L60 100 L40 60 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <circle cx="60" cy="60" r="2" fill="rgba(255,165,0,0.4)" />
                <circle cx="30" cy="30" r="1.5" fill="rgba(138,43,226,0.3)" />
                <circle cx="90" cy="90" r="1.5" fill="rgba(138,43,226,0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blogDiamondPattern)" />
          </svg>

          {/* Animated geometric shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 80, 0],
                y: [0, 50, -30, 0],
                scale: [1, 0.8, 1.3, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Sparkle effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 6,
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl px-6 py-24 text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Fashion{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, behind-the-scenes insights, and 
            <span className="text-orange-300 font-medium"> inspiring fashion journeys</span>
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            <AnimatePresence>
              {posts.map((post, index) => {
                const images = post.images || (post.image ? [post.image] : []);
                const currentIndex = currentImageIndex[post.id] || 0;
                
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Image Slideshow Section */}
                    {images.length > 0 && (
                      <div className="relative h-96 md:h-[500px] overflow-hidden group">
                        {/* Main Image */}
                        <motion.div
                          key={currentIndex}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <img
                            src={images[currentIndex]}
                            alt={`${post.title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => openImageModal(images[currentIndex])}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </motion.div>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(post.id, images.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={() => nextImage(post.id, images.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentImageIndex(prev => ({ ...prev, [post.id]: idx }))}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex
                                      ? 'bg-white w-8'
                                      : 'bg-white/50 hover:bg-white/70'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}

                        {/* Image count badge */}
                        {images.length > 1 && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                            {currentIndex + 1} / {images.length}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="p-8 md:p-12">
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        )}
                        {post.readTime && (
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap mb-8">
                        {post.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                        >
                          <Heart className="w-5 h-5" />
                          <span>Love this</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-purple-300 hover:text-purple-600 transition-all"
                        >
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>

          {posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              No posts available yet.
            </motion.div>
          )}
          </div>
        </div>
      </section>

      {/* Image Preview Dialog */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            {modalImage && (
              <img
                src={modalImage}
                alt="Preview"
                className="w-full h-full object-contain max-h-[90vh]"
              />
            )}
            <button
              onClick={() => {
                setIsImageModalOpen(false);
                setModalImage(null);
              }}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}