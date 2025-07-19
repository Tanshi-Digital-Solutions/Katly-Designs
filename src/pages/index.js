'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Crown, Heart, Star, Phone, MapPin, Calendar, CheckCircle, Sparkles, Camera, Users, Award, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { useState, useEffect } from 'react'

const services = [ 
  'African-Inspired Designs',
  'Wedding Dresses',
  'Custom Tailoring',
  'Traditional Wear',
  'Contemporary Fashion',
  'Bridal Accessories',
  'Fashion Consultation',
  'Alterations & Repairs',
];

const cards = [
  {
    name: 'African-Inspired Designs',
    description: 'Celebrate your heritage with our stunning collection of African-inspired garments that blend tradition with contemporary style.',
    icon: Palette,
  },
  {
    name: 'Wedding Dresses',
    description: 'Make your special day unforgettable with our bespoke wedding dresses designed to make you feel like royalty.',
    icon: Crown,
  },
  {
    name: 'Custom Tailoring',
    description: 'From concept to creation, our skilled artisans craft personalized pieces that reflect your unique style.',
    icon: Scissors,
  },
  {
    name: 'Traditional Wear',
    description: 'Honor your cultural roots with authentic traditional garments crafted with precision and care.',
    icon: Star,
  },
  {
    name: 'Bridal Accessories',
    description: 'Complete your bridal look with our exquisite collection of handcrafted accessories and jewelry.',
    icon: Heart,
  },
  {
    name: 'Fashion Consultation',
    description: 'Let our experienced stylists help you discover your perfect look and personal style.',
    icon: Sparkles,
  },
];

// Featured gallery images for homepage
const featuredImages = [
  { src: '/pic1.jpg', category: 'Wedding Collection', title: 'Elegant Bridal Gown' },
  { src: '/pic2.jpg', category: 'African Heritage', title: 'Traditional Inspired' },
  { src: '/pic3.jpg', category: 'Contemporary', title: 'Modern Chic' },
  { src: '/shirt1.jpg', category: 'Custom Tailoring', title: 'Bespoke Creation' },
];

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden glass-effect" id="hero">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Floating fashion elements animation */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
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
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Katly <span className="text-orange-400">Designs</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
              >
                Where tradition meets haute couture. Experience the elegance of African-inspired fashion crafted with love, precision, and cultural pride.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#gallery" 
                   className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition duration-300 text-center">
                  View Our Creations
                </a>
                <a href="#contact" 
                   className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-900 transform hover:scale-105 transition duration-300 text-center">
                  Book Consultation
                </a>
              </motion.div>
            </div>

            {/* Hero Image with enhanced effects */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Fashion frame decoration */}
                <div className="absolute -inset-4 border-2 border-white/30 rounded-3xl glass-effect" />
                
                {/* Main image with parallax effect */}
                <motion.img 
                  src="/hero.png" 
                  alt="Katly Designs Fashion Model" 
                  className="relative w-[475px] h-[525px] object-contain rounded-3xl transform transition duration-700 hover:scale-105"
                  style={{
                    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                  }}
                />
                
                {/* Floating fashion icons */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-orange-500 p-3 rounded-full shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Crown className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-purple-500 p-3 rounded-full shadow-xl"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <motion.h2 
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                className="text-5xl font-bold text-gray-900 mb-8"
              >
                Our <span className="text-purple-600">Story</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Katly Designs is a Zambian fashion house dedicated to celebrating the rich tapestry of African culture through contemporary fashion. Our journey began with a simple vision: to create garments that honor our heritage while embracing modern elegance.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  From breathtaking wedding gowns to everyday African-inspired wear, we craft each piece with meticulous attention to detail, using premium fabrics and time-honored techniques passed down through generations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-600">
                      <Crown className="text-purple-600" /> Our Mission
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {['Celebrate African heritage', 'Empower through fashion', 'Quality craftsmanship', 'Personalized service'].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-500 text-lg">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-600">
                      <Star className="text-orange-600" /> Our Vision
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {['Global fashion recognition', 'Cultural bridge building', 'Sustainable practices', 'Innovation in design'].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-purple-500 text-lg">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/pic1.jpg" alt="Fashion Design 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  <img src="/pic3.jpg" alt="Fashion Design 3" className="w-full h-32 object-cover rounded-lg shadow-md" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src="/pic2.jpg" alt="Fashion Design 2" className="w-full h-32 object-cover rounded-lg shadow-md" />
                  <img src="/pic4.jpg" alt="Fashion Design 4" className="w-full h-48 object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 glass-effect" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Our <span className="text-orange-400">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              From custom designs to traditional wear, we offer comprehensive fashion services tailored to your unique style and cultural preferences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{card.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialty Services Highlight */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-8">
                Specialty Wedding Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-200">
                {['Bridal gown design', 'Bridesmaids dresses', 'Groom accessories', 'Complete wedding styling'].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="gallery">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 15px)`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Featured <span className="text-purple-600">Collections</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              A curated selection of our finest creations. Each piece tells a story of elegance, culture, and craftsmanship.
            </motion.p>
          </div>

          {/* Featured gallery grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {featuredImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-orange-400 text-sm font-semibold mb-2">{item.category}</p>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <motion.div 
                      className="flex items-center gap-2 text-white/80 text-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50 rounded-tr-xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action for full gallery */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <a 
              href="/gallery" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Katly Designs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that passion, expertise, and cultural pride make in every stitch.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                title: "Cultural Authenticity",
                content: "Genuine African-inspired designs that honor tradition while embracing modernity.",
                icon: Award,
                color: "purple"
              },
              {
                title: "Expert Craftsmanship",
                content: "Skilled artisans with years of experience in fashion design and tailoring.",
                icon: Users,
                color: "orange"
              },
              {
                title: "Personalized Service",
                content: "One-on-one consultations to create pieces that perfectly match your vision.",
                icon: Heart,
                color: "blue"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${
                  item.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  item.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  'from-blue-500 to-blue-600'
                } flex items-center justify-center`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Get In <span className="text-orange-400">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Ready to create something beautiful? Let's bring your fashion dreams to life with our expert design and tailoring services.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Phone, 
                title: 'Call Us', 
                lines: ['+260 XXX XXX XXX', 'Available Mon-Sat'] 
              },
              { 
                icon: MapPin, 
                title: 'Visit Our Studio', 
                lines: ['Lusaka, Zambia', 'By appointment only'] 
              },
              { 
                icon: Calendar, 
                title: 'Business Hours', 
                lines: ['Mon-Fri: 9:00-18:00', 'Sat: 10:00-16:00'] 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-200 mb-1">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Fashion Journey?</h3>
              <p className="text-gray-200 mb-6">Book a consultation today and let us create something extraordinary for you.</p>
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition duration-300"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
