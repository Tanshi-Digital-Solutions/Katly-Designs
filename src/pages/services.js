// pages/services.js
'use client';
import { motion } from 'framer-motion';
import { Globe, Ticket, Truck, Phone, MapPin, Calendar, User } from 'lucide-react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const services = {
  core: [
    {
      name: 'Global Flight Bookings',
      highlights: [
        'Real-time fare monitoring',
        '24/7 booking support',
        'Premium airline partnerships',
        'Multi-city itineraries'
      ],
      icon: Globe,
      fullDescription: 'Leverage our team\'s decades of combined experience for exclusive rates and optimal routing'
    },
    {
      name: 'Visa Assistance',
      highlights: [
        'Dubai visa specialists',
        'Document verification',
        'Express processing',
        'Corporate visa solutions'
      ],
      icon: MapPin,
      fullDescription: 'Specialized UAE visa services with priority processing'
    },
    {
      name: 'Vehicle Solutions',
      highlights: [
        'Airport transfers worldwide',
        'Luxury car rentals',
        'Dubai rental specialists',
        '24/7 roadside support'
      ],
      icon: Truck,
      fullDescription: 'Premium mobility solutions with regional experts in key destinations'
    }
  ],
  support: [
    {
      name: 'Hotel & Resorts',
      highlights: [
        'Best price guarantee',
        'VIP hotel benefits',
        'Last-minute reservations',
        'Family-friendly options'
      ],
      icon: Ticket
    },
    {
      name: 'Travel Protection',
      highlights: [
        'Comprehensive coverage',
        'Trip cancellation protection',
        'Medical emergency support',
        'Instant policy issuance'
      ],
      icon: Calendar
    }
  ],
  corporate: [
    {
      name: 'Business Travel',
      highlights: [
        'Dedicated account managers',
        'Expense reporting',
        'Meeting space booking',
        'VIP airport services'
      ],
      icon: User
    }
  ]
};

export default function Services() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section - Updated Messaging */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90">
          <ul className="circles">
            {[...Array(10)].map((_, i) => <li key={i} />)}
          </ul>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-6 py-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-600 mb-6">
            Next-Generation Business Solutions
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Fresh energy meets decades of experience - delivering seamless business solutions across industries
          </p>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16 text-gray-900"
          >
            Our Core Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.core.map((service, index) => (
              <ServiceCard 
                key={index}
                name={service.name}
                highlights={service.highlights}
                icon={service.icon}
                fullDescription={service.fullDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* USP Section - Updated Points */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      className="py-24 bg-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Proven Expertise – New company, seasoned team',
              'Round-the-Clock Support – Never timezone locked',
              'Custom Travel Design – Your needs, our blueprint',
              'Price Promise – Best rates guaranteed'
            ].map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg"
              >
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Support Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16 text-gray-900"
          >
            Travel Enhancements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.support.map((service, index) => (
              <ServiceCard 
                key={index}
                name={service.name}
                highlights={service.highlights}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Neutral Numbers */}
      <section className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '24/7', label: 'Support Availability' },
              { number: '100+', label: 'Trusted Partners' },
              { number: '50+', label: 'Destinations Covered' },
              { number: '1k+', label: 'Travelers Assisted' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-900">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Neutral Destination */}
      <section className="bg-gray-900 py-16">
        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready for Stress-Free Travel?
          </h3>
          <p className="text-gray-300 mb-8">
            Our team combines fresh energy with deep industry knowledge to craft your perfect journey
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            Start Planning Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}