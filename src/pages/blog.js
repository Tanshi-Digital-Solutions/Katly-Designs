import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Header from '../components/Header';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from 'lucide-react';

export default function PublicBlog() {
  const [posts, setPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
const response = await axios.get("/api/posts");
      setPosts(response.data.sort((a, b) => b.id - a.id)); // Sort by newest first
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90">
          <ul className="circles">
            {[...Array(10)].map((_, i) => <li key={i} />)}
          </ul>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-4xl px-6 py-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
            Our Journey & Stories
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Explore our latest updates, insights, and business innovations
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence>
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    delay: 0.1 
                  }
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 last:mb-0"
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ 
                    scale: 1,
                    transition: { 
                      duration: 0.4,
                      delay: 0.2 
                    }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  {post.image && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: 1,
                        transition: { 
                          duration: 0.5,
                          delay: 0.3 
                        }
                      }}
                      viewport={{ once: true }}
                      className="relative aspect-[2/1] cursor-pointer overflow-hidden"
                      onClick={() => setSelectedImage(post.image)}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
                    </motion.div>
                  )}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      transition: { 
                        duration: 0.4,
                        delay: 0.4 
                      }
                    }}
                    viewport={{ once: true }}
                    className="p-8"
                  >
                    <h2 className="text-3xl font-bold text-blue-600 mb-6">{post.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                      {post.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
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
      </section>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative"
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
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