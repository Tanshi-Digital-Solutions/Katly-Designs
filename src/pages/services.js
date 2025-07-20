'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, 
  Palette, 
  Crown, 
  Heart, 
  Star, 
  Sparkles,
  ArrowRight,
  Check,
  Clock,
  Award,
  Users,
  Phone,
  Calendar,
  Zap,
  Gift,
  Camera,
  Shirt,
  Gem
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';

const mainServices = [
  {
    name: 'African-Inspired Designs',
    description: 'Celebrate your heritage with our stunning collection of African-inspired garments that blend tradition with contemporary style.',
    icon: Palette,
    features: ['Traditional prints & patterns', 'Modern silhouettes', 'Cultural authenticity', 'Custom color schemes'],
    price: 'From K800',
    duration: '2-3 weeks',
    image: '/pic2.jpg',
    category: 'Heritage'
  },
  {
    name: 'Wedding Dresses',
    description: 'Make your special day unforgettable with our bespoke wedding dresses designed to make you feel like royalty.',
    icon: Crown,
    features: ['Custom bridal gowns', 'Bridal accessories', 'Fitting sessions included', 'Preservation care guide'],
    price: 'From K2,500',
    duration: '6-8 weeks',
    image: '/cover2.jpg',
    category: 'Bridal'
  },
  {
    name: 'Custom Tailoring',
    description: 'From concept to creation, our skilled artisans craft personalized pieces that reflect your unique style.',
    icon: Scissors,
    features: ['Personal consultation', 'Precise measurements', 'Quality fabric selection', 'Multiple fittings'],
    price: 'From K500',
    duration: '1-2 weeks',
    image: '/shirt1.jpg',
    category: 'Custom'
  },
  {
    name: 'Traditional Wear',
    description: 'Honor your cultural roots with authentic traditional garments crafted with precision and care.',
    icon: Star,
    features: ['Authentic designs', 'Traditional techniques', 'Cultural consultation', 'Heritage preservation'],
    price: 'From K600',
    duration: '2-3 weeks',
    image: '/pic5.jpg',
    category: 'Traditional'
  },
  {
    name: 'Bridal Accessories',
    description: 'Complete your bridal look with our exquisite collection of handcrafted accessories and jewelry.',
    icon: Heart,
    features: ['Handcrafted jewelry', 'Hair accessories', 'Bridal shoes coordination', 'Matching sets'],
    price: 'From K200',
    duration: '1 week',
    image: '/pic6wide.jpg',
    category: 'Accessories'
  },
  {
    name: 'Fashion Consultation',
    description: 'Let our experienced stylists help you discover your perfect look and personal style.',
    icon: Sparkles,
    features: ['Style assessment', 'Wardrobe planning', 'Color analysis', 'Personal shopping'],
    price: 'From K150',
    duration: '2-3 hours',
    image: '/pic7.jpg',
    category: 'Consultation'
  },
];

const specialtyServices = [
  {
    name: 'Express Alterations',
    icon: Zap,
    description: 'Quick alterations and repairs for urgent needs',
    price: 'From K50',
    duration: '24-48 hours'
  },
  {
    name: 'Group Bookings',
    icon: Users,
    description: 'Special rates for wedding parties and events',
    price: 'Custom Quote',
    duration: 'Varies'
  },
  {
    name: 'Seasonal Collections',
    icon: Gift,
    description: 'Limited edition seasonal and holiday designs',
    price: 'From K400',
    duration: '2-4 weeks'
  },
  {
    name: 'Photo Shoot Styling',
    icon: Camera,
    description: 'Complete styling services for photography sessions',
    price: 'From K300',
    duration: '1 day'
  }
];

const serviceProcess = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your vision, style preferences, and requirements in detail.'
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team creates designs and selects materials based on your consultation.'
  },
  {
    step: '03',
    title: 'Measurements',
    description: 'Precise measurements are taken to ensure a perfect fit.'
  },
  {
    step: '04',
    title: 'Creation',
    description: 'Our skilled artisans begin crafting your custom piece with attention to detail.'
  },
  {
    step: '05',
    title: 'Fittings',
    description: 'Multiple fitting sessions ensure the perfect fit and finish.'
  },
  {
    step: '06',
    title: 'Final Delivery',
    description: 'Your completed garment is delivered with care instructions and styling tips.'
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Heritage', 'Bridal', 'Custom', 'Traditional', 'Accessories', 'Consultation'];

  const filteredServices = selectedCategory === 'All' 
    ? mainServices 
    : mainServices.filter(service => service.category === selectedCategory);

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

      {/* Hero Section */}
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
                <circle cx="60" cy="60" r="2" fill="rgba(255,165,0,0.4)" />
                <circle cx="30" cy="30" r="1.5" fill="rgba(138,43,226,0.3)" />
                <circle cx="90" cy="90" r="1.5" fill="rgba(138,43,226,0.3)" />
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

        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Our{' '}
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              From bespoke wedding gowns to authentic African-inspired designs, we offer comprehensive fashion services 
              <span className="text-orange-300 font-medium"> tailored to celebrate your unique style and cultural heritage.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white rounded-2xl font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{service.price}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Specialty <span className="text-orange-400">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Additional services designed to meet your specific needs and timelines.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="text-orange-400 font-semibold">{service.price}</div>
                  <div className="text-gray-400 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-purple-600">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From initial consultation to final delivery, we ensure every step exceeds your expectations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                {index < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="guaranteePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#guaranteePattern)" />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Quality Guarantee</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                We stand behind every piece we create. If you're not completely satisfied with your garment, 
                we'll work with you until it's perfect or provide a full refund.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80">Satisfaction Guaranteed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">30-Day</div>
                  <div className="text-white/80">Return Policy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-white/80">Minor Alterations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Sparkle effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`cta-sparkle-${i}`}
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Create Something <span className="text-orange-400">Beautiful?</span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's bring your fashion vision to life. Book a consultation today and discover the Katly Designs difference.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white rounded-2xl font-bold text-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +260 972 439 233
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}