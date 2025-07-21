'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Header from '../components/Header';
import { Plus, X, Upload, Loader, ImageIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "Admin@2025") {
      setIsPasswordValid(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    
    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewImages(previews);
    setImageUploaded(files.length > 0);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewImages(newPreviews);
    setImageUploaded(newImages.length > 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("password", password);
    
    // Append all images
    images.forEach(image => {
      formData.append("images", image);
    });

    try {
      await axios.post("/api/posts", formData);
      await fetchPosts();
      setTitle("");
      setDescription("");
      setImages([]);
      setPreviewImages([]);
      setImageUploaded(false);
      setIsLoading(false);
      setIsPasswordValid(false);
      setPassword("");
    } catch (error) {
      console.error("Error adding post:", error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);
      await fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
  <Header />
  <section>
    <main className="max-w-7xl mx-auto px-6 py-12 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900">Blog Management</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5" />
              New Post
            </button>
          </DialogTrigger>
          
          {!isPasswordValid ? (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Enter Admin Password</DialogTitle>
              </DialogHeader>
              <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold">
                  Continue
                </button>
              </form>
            </DialogContent>
          ) : (
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border rounded-lg text-red-600 font-semibold text-lg"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border rounded-lg min-h-[150px]"
                  required
                />
                <div className={`border-2 border-dashed rounded-lg p-4 ${imageUploaded ? 'border-green-400 bg-green-50' : 'border-gray-300'}`}>
                  <label className="flex flex-col items-center gap-2 cursor-pointer">
                    <Upload className={`w-6 h-6 ${imageUploaded ? 'text-green-600' : 'text-gray-400'}`} />
                    {imageUploaded ? (
                      <div className="text-center">
                        <span className="text-sm text-green-600 font-medium">✓ {images.length} image{images.length > 1 ? 's' : ''} selected</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">Upload Images (Optional)</span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  
                  {/* Preview Images */}
                  {previewImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {previewImages.map((preview, idx) => (
                        <div key={idx} className="relative group">
                          <img 
                            src={preview} 
                            alt={`Preview ${idx + 1}`} 
                            className="w-full h-24 object-cover rounded-lg" 
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    'Publish Post'
                  )}
                </button>
              </form>
            </DialogContent>
          )}
        </Dialog>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Display images */}
              {(post.images?.length > 0 || post.image) && (
                <div className="grid grid-cols-2 gap-2 p-2">
                  {(post.images || [post.image]).filter(img => img).map((image, idx) => (
                    <div 
                      key={idx} 
                      className="relative aspect-video cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${post.title} - Image ${idx + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {post.images?.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          {idx + 1}/{post.images.length}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-6">{post.description}</p>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Delete Post
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this blog post.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(post.id)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  </section>
</div>
  );
}