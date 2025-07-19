'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Ticket, Truck, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our Projects', href: '#' },
  { name: 'About Us', href: '#' },
]

const services = [ 
  'International Air Tickets',
  'Domestic Flights',
  'Car Rental Services',
  'Travel Insurance',
  'Visa Assistance',
  'Hotel Bookings',
  'Airport Transfers',
  'Holiday Packages',
];

const cards = [
  {
    name: 'International Air Tickets',
    description: 'Book flights to any destination worldwide with our competitive rates and excellent service.',
    icon: Globe,
  },
  {
    name: 'Domestic Flights',
    description: 'Convenient domestic travel options with the best local carriers.',
    icon: Ticket,
  },
  {
    name: 'Car Rental Services',
    description: 'Wide range of vehicles available for hire, from economy to luxury.',
    icon: Truck,
  },
  {
    name: 'Travel Insurance',
    description: 'Comprehensive travel insurance for your peace of mind.',
    icon: Calendar,
  },
  {
    name: 'Dubai Visa',
    description: 'Expert guidance through visa application processes for various destinations.',
    icon: MapPin,
  },
  {
    name: 'Hotel Bookings',
    description: 'Access to a global network of hotels at competitive prices.',
    icon: Phone,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white text-gray-800">
      <Header/>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" id="hero">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8 lg:py-56"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Modern Business Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8">
            Innovative solutions for your business needs. Experience excellence with our comprehensive services.
          </p>
          <div className="flex gap-4">
            <a href="#services" 
               className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300">
              Explore Services
            </a>
            <a href="#contact" 
               className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
              Contact Us
            </a>
            <ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
            
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <motion.h2 
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                className="text-4xl font-bold text-gray-900"
              >
                About Our Company
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-600">
                  For over a decade, we've been transforming business experiences through innovative solutions 
                  and personalized service. Our commitment to excellence has made us a trusted name in 
                  modern business solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="text-blue-600" /> Our Mission
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      {['Prompt service delivery', 'Regular staff training', 'Competitive pricing', 'Employee motivation programs'].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="text-blue-600" /> Our Vision
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      {['Leading business solutions provider', 'Cutting-edge technology', 'Customer satisfaction focus', 'Innovative marketing strategies'].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-600">▹</span>
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
              className="relative h-96 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
            >
              {/* Image placeholder - Replace with actual image */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent" />
              <img src="/travel-agent.jpeg" alt="Red Apple Logo"  />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Business Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-300"
            >
              End-to-end services tailored for both individual and corporate needs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => ( // ✅ Use cards array
        <motion.div
          key={card.name} // ✅ Unique key
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-4">
            <card.icon className="w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">{card.name}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

          {/* Corporate Services Highlight */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 bg-blue-600/10 p-8 rounded-xl border border-blue-600/30"
          >
            <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Enterprise Solutions
          </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            {['Custom implementations', 'Scalable solutions', '24/7 support', 'Volume discounts'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Industry Expertise",
                content: "New company, seasoned team",
                icon: Globe
              },
              {
                title: "Best Value",
                content: "Price match guarantee",
                icon: Ticket
              },
              {
                title: "Support",
                content: "24/7 customer service",
                icon: Phone
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                className="bg-white p-8 rounded-xl text-center shadow-sm"
              >
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to start your journey? Get in touch with us today!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', lines: ['+260 978807128', '+260978807128'] },
              { icon: MapPin, title: 'Location', lines: ['Cairo Road', 'Lusaka, Zambia'] },
              { icon: Calendar, title: 'Hours', lines: ['Mon-Fri: 8:00-17:00', 'Sat: 9:00-13:00'] }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}