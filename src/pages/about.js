// pages/about.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Clock, ShieldCheck, Handshake, Rocket } from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section - Updated */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90">
          <ul className="circles">
            {[...Array(10)].map((_, i) => <li key={i} />)}
          </ul>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-7xl px-6 py-24 text-center"
        >
          h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6"
            Innovative Business Solutions
          /h1
          p className="text-xl text-gray-800 max-w-2xl mx-auto"
            Forward-thinking services to empower your enterprise and drive success.
          /p
        </motion.div>
      </section>

      {/* Mission & Vision Section - Updated */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="mb-12">
                Rocket className="w-12 h-12 text-green-500 mb-4" /
                h2 className="text-3xl font-bold text-gray-900 mb-4"Our Mission/h2
                p className="text-lg text-gray-600"
                  To empower businesses through tailored technology solutions and strategic insights.
                  Enhancing operational efficiency across diverse industries.
                /p
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most responsive business partner, combining cutting-edge technology 
                  with human expertise to redefine business solutions
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="h-64 bg-gray-100 rounded-xl" />
              <div className="h-80 bg-green-500/10 rounded-xl mt-8" />
              <div className="h-72 bg-gray-100 rounded-xl col-span-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Updated */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16 text-gray-900"
          >
            Our Founding Principles
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Reliability",
                description: "Consistent service quality backed by ironclad guarantees"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock support for urgent business needs"
              },
              {
                icon: Handshake,
                title: "Personalization",
                description: "Tailored solutions for every client's unique requirements"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Worldwide connections with local expertise"
              },
              {
                icon: Users,
                title: "Client First",
                description: "Your satisfaction drives every decision we make"
              },
              {
                icon: Rocket,
                title: "Innovation",
                description: "Pioneering digital solutions for modern businesses"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Updated */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16 text-gray-900"
          >
            Our Collective Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-gray-200 h-full" />
            {[
              { year: "2020", title: "Team Foundation", text: "Core team gains experience at major business firms across industries" },
              { year: "2022", title: "Vision Conception", text: "Identified gap in responsive, tech-driven business services" },
              { year: "2023", title: "Platform Development", text: "Built proprietary service platform with 24/7 support features" },
              { year: "2024", title: "Official Launch", text: "Established digital-first operations with global reach" },
              { year: "2025", title: "Regional Expansion", text: "Secured partnerships with industry specialists and global service networks" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="w-5/12 px-4">
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-green-600 mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.text}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full" />
                </div>
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="bg-gray-900 py-16">
        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready for Smarter Business Solutions?
          </h3>
          <p className="text-gray-300 mb-8">
            Combine our team's decades of experience with cutting-edge digital convenience
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold mx-auto"
          >
            Start Planning Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}