'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Clock, Target, Eye, Gem } from 'lucide-react';
import Header from '../components/Header';

const teamMembers = [
  {
    name: 'Katly Mwanza',
    role: 'Founder & Creative Director',
    image: '/ceopic2.jpg',
    description: 'With over 15 years of experience in fashion design, Katly brings her passion for African heritage to every creation.'
  },
  {
    name: 'Grace Phiri',
    role: 'Senior Designer',
    image: '/pic1.jpg',
    description: 'Specializing in bridal wear, Grace ensures every bride feels like royalty on their special day.'
  },
  {
    name: 'Joseph Banda',
    role: 'Master Tailor',
    image: '/pic3.jpg',
    description: 'A craftsman with meticulous attention to detail, Joseph brings designs to life with precision.'
  },
  {
    name: 'Sarah Tembo',
    role: 'Fashion Consultant',
    image: '/pic8.jpg',
    description: 'Sarah helps clients discover their personal style and find the perfect pieces for any occasion.'
  }
];

const milestones = [
  { year: '2018', event: 'Katly Designs founded in Lusaka', icon: Sparkles },
  { year: '2021', event: 'First international fashion show participation', icon: Award },
  { year: '2022', event: 'Opened flagship studio in Lusaka', icon: Heart },
  { year: '2023', event: 'Launched sustainable fashion initiative', icon: Gem },
  { year: '2024', event: 'Digital transformation and online consultations', icon: Target },
  { year: '2025', event: 'Celebrating 7 years of fashion excellence', icon: Clock }
];

const About = () => {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden glass-effect">
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
                id="aboutDiamondPattern"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                {/* Diamond shapes */}
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
                {/* Diagonal lines */}
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
                {/* Small accent diamonds */}
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
            <rect width="100%" height="100%" fill="url(#aboutDiamondPattern)" />
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
            <motion.div
              className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 0.7, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Sparkle constellation effect */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`about-sparkle-${i}`}
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

          {/* Fashion-themed floating elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              >
                <div className="w-2 h-2 bg-white/40 rotate-45" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Story
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto px-6 leading-relaxed font-light">
            Weaving tradition into contemporary fashion since{' '}
            <span className="text-orange-300 font-medium">2018</span>
          </p>
          
          {/* Fashion credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center items-center gap-8 pt-8"
          >
            {[
              { icon: Award, label: "15+ Years Experience" },
              { icon: Heart, label: "Crafted with Love" },
              { icon: Sparkles, label: "Cultural Heritage" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-white/80"
                whileHover={{ scale: 1.1, color: '#FFA500' }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Fashion That Tells <span className="text-purple-600">Your Story</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Katly Designs, we believe that fashion is more than just clothing—it's an expression 
                of identity, heritage, and dreams. Founded in the heart of Lusaka, our journey began with 
                a simple vision: to create garments that celebrate African culture while embracing global 
                fashion trends.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece we create is a labor of love, meticulously crafted to reflect the unique 
                personality and style of our clients. From stunning wedding gowns that make dreams come 
                true to everyday wear that radiates confidence, we're here to make you look and feel 
                extraordinary.
              </p>
              <div className="flex gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-100 p-4 rounded-full"
                >
                  <Heart className="w-8 h-8 text-purple-600" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-100 p-4 rounded-full"
                >
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-100 p-4 rounded-full"
                >
                  <Award className="w-8 h-8 text-blue-600" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/pic1.jpg" 
                  alt="Fashion Design Process" 
                  className="rounded-2xl shadow-lg h-64 w-full object-cover"
                />
                <img 
                  src="/pic2.jpg" 
                  alt="Fabric Selection" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
                />
                <img 
                  src="/pic3.jpg" 
                  alt="Final Creation" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="/pic4.jpg" 
                  alt="Happy Client" 
                  className="rounded-2xl shadow-lg h-64 w-full object-cover -mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Our Core <span className="text-orange-400">Values</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide every stitch, every design, and every interaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: 'Vision',
                description: 'We see fashion as art that empowers and transforms lives'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Every creation is infused with love and dedication to excellence'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'Building relationships that go beyond client and designer'
              },
              {
                icon: Gem,
                title: 'Quality',
                description: 'Premium materials and meticulous craftsmanship in every piece'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that have shaped our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-orange-600" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</h3>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-orange-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who bring your fashion dreams to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-purple-200 to-orange-200">
                    <div className="w-full h-80 bg-gray-200 rounded-2xl" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's work together to bring your fashion vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
