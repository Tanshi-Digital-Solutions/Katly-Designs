'use client';
import Header from '@/components/Header';
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Crown, Heart, Star, Filter, Search, ArrowRight, Eye, Calendar, MapPin, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

// Collection categories
const categories = [
  'All Collections',
  'Wedding Collection',
  'African Heritage',
  'Contemporary',
  'Custom Tailoring',
  'Traditional Wear',
  'Bridal Accessories'
];

// Gallery items - using the images from your homepage
const galleryItems = [
  {
    id: 1,
    src: '/cover2.jpg',
    title: 'Elegant Bridal Gown',
    category: 'Wedding Collection',
    description: 'A stunning handcrafted bridal gown featuring intricate beadwork and flowing silhouette.',
    year: '2024',
    occasion: 'Wedding',
    featured: true
  },
  {
    id: 2,
    src: '/pic2.jpg',
    title: 'Traditional Inspired',
    category: 'African Heritage',
    description: 'Contemporary interpretation of traditional African patterns with modern tailoring.',
    year: '2024',
    occasion: 'Cultural Events',
    featured: true
  },
  {
    id: 3,
    src: '/pic5.jpg',
    title: 'Modern Chic',
    category: 'Contemporary',
    description: 'Sleek contemporary design perfect for sophisticated occasions.',
    year: '2024',
    occasion: 'Formal Events',
    featured: false
  },
  {
    id: 4,
    src: '/shirt1.jpg',
    title: 'Bespoke Creation',
    category: 'Custom Tailoring',
    description: 'Custom-tailored piece showcasing precision craftsmanship and attention to detail.',
    year: '2024',
    occasion: 'Business & Formal',
    featured: false
  },
  {
    id: 5,
    src: '/pic7.jpg',
    title: 'Heritage Elegance',
    category: 'African Heritage',
    description: 'Celebrating African heritage through contemporary fashion design.',
    year: '2024',
    occasion: 'Special Events',
    featured: true
  },
  {
    id: 6,
    src: '/pic3.jpg',
    title: 'Artisan Craft',
    category: 'Traditional Wear',
    description: 'Handcrafted traditional wear with modern silhouette and premium fabrics.',
    year: '2024',
    occasion: 'Cultural Celebrations',
    featured: false
  },
  {
    id: 7,
    src: '/pic6wide.jpg',
    title: 'Contemporary Grace',
    category: 'Contemporary',
    description: 'Modern design philosophy meets African aesthetics in this graceful piece.',
    year: '2024',
    occasion: 'Cocktail Events',
    featured: false
  },
  {
    id: 8,
    src: '/ceopic2.jpg',
    title: 'Signature Style',
    category: 'Wedding Collection',
    description: 'Signature bridal design featuring our distinctive blend of tradition and modernity.',
    year: '2024',
    occasion: 'Wedding',
    featured: true
  },
  {
    id: 9,
    src: '/hero.png',
    title: 'Fashion Statement',
    category: 'Contemporary',
    description: 'Bold contemporary design that makes a powerful fashion statement.',
    year: '2024',
    occasion: 'Fashion Shows',
    featured: true
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = galleryItems;
    
    if (selectedCategory !== 'All Collections') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <Header/>
      
      {/* Header Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background with Diamond Pattern */}
        <div className="absolute inset-0">
          {/* Primary gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* SVG Diamond Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diamondPattern"
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
                <path
                  d="M0 60 L20 100 L0 140 L-20 100 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <path
                  d="M120 60 L140 100 L120 140 L100 100 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="0"
                  x2="120"
                  y2="120"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                <line
                  x1="120"
                  y1="0"
                  x2="0"
                  y2="120"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="2"
                  fill="rgba(255,165,0,0.4)"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="1.5"
                  fill="rgba(138,43,226,0.3)"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="1.5"
                  fill="rgba(138,43,226,0.3)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamondPattern)" />
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

          {/* Sparkle constellation effect */}
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

        {/* Header Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            >
              Our <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Collections
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Discover our exquisite range of fashion creations, where African heritage meets contemporary elegance. 
              Each piece tells a story of <span className="text-orange-300 font-medium">craftsmanship, culture, and creativity.</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{filteredItems.length}+</div>
                <div className="text-sm text-gray-300">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-gray-300">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-300">Handcrafted</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search collections, styles, or occasions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-purple-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results count */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600">
              Showing <span className="font-semibold text-purple-600">{filteredItems.length}</span> pieces
              {selectedCategory !== 'All Collections' && (
                <span> in <span className="font-semibold text-orange-600">{selectedCategory}</span></span>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}

                {/* Image container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedItem(item)}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">{item.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.occasion}</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedItem(item)}
                      className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-purple-200 opacity-30 group-hover:opacity-60 group-hover:border-purple-400 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No pieces found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Collections');
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Collections Highlight */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Featured <span className="text-orange-400">Collections</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Our most celebrated pieces showcasing the pinnacle of African-inspired fashion design.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Wedding Excellence', 'Heritage Pride', 'Contemporary Elegance', 'Artisan Craftsmanship'].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  index === 1 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                  index === 2 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'
                }`}>
                  {index === 0 ? <Crown className="w-8 h-8 text-white" /> :
                   index === 1 ? <Palette className="w-8 h-8 text-white" /> :
                   index === 2 ? <Star className="w-8 h-8 text-white" /> :
                   <Award className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-300">
                  {index === 0 ? 'Breathtaking bridal gowns for your special day' :
                   index === 1 ? 'Celebrating African culture through fashion' :
                   index === 2 ? 'Modern designs with timeless appeal' :
                   'Handcrafted pieces with meticulous attention'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Your <span className="text-purple-600">Signature Look</span>?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's bring your fashion vision to life with our bespoke design services. 
              Book a consultation today and begin your journey to extraordinary style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for item details */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 md:h-full">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                {selectedItem.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </div>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedItem.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Perfect for: <strong>{selectedItem.occasion}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Year Created: <strong>{selectedItem.year}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Scissors className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Handcrafted with premium materials</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Commission Similar
                  </button>
                  <button className="px-6 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}