'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Clock, Target, Eye, Gem } from 'lucide-react';
import Header from '../components/Header';

const teamMembers = [
  {
    name: 'Katly Mwanza',
    role: 'Founder & Creative Director',
    image: '/team1.jpg',
    description: 'With over 15 years of experience in fashion design, Katly brings her passion for African heritage to every creation.'
  },
  {
    name: 'Grace Phiri',
    role: 'Senior Designer',
    image: '/team2.jpg',
    description: 'Specializing in bridal wear, Grace ensures every bride feels like royalty on their special day.'
  },
  {
    name: 'Joseph Banda',
    role: 'Master Tailor',
    image: '/team3.jpg',
    description: 'A craftsman with meticulous attention to detail, Joseph brings designs to life with precision.'
  },
  {
    name: 'Sarah Tembo',
    role: 'Fashion Consultant',
    image: '/team4.jpg',
    description: 'Sarah helps clients discover their personal style and find the perfect pieces for any occasion.'
  }
];

const milestones = [
  { year: '2008', event: 'Katly Designs founded in Lusaka', icon: Sparkles },
  { year: '2012', event: 'First international fashion show participation', icon: Award },
  { year: '2015', event: 'Opened flagship studio in Lusaka', icon: Heart },
  { year: '2018', event: 'Launched sustainable fashion initiative', icon: Gem },
  { year: '2020', event: 'Digital transformation and online consultations', icon: Target },
  { year: '2023', event: 'Celebrating 15 years of fashion excellence', icon: Clock }
];

const About = () => {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-orange-400">Story</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto px-6">
            Weaving tradition into contemporary fashion since 2008
          </p>
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
                  src="/about1.jpg" 
                  alt="Fashion Design Process" 
                  className="rounded-2xl shadow-lg h-64 w-full object-cover"
                />
                <img 
                  src="/about2.jpg" 
                  alt="Fabric Selection" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
                />
                <img 
                  src="/about3.jpg" 
                  alt="Final Creation" 
                  className="rounded-2xl shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="/about4.jpg" 
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
