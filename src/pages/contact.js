'use client';
import Header from '@/components/Header';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Mail, 
  Send, 
  CheckCircle, 
  Scissors, 
  Palette, 
  Crown, 
  Star, 
  Heart,
  User,
  MessageSquare,
  Clock,
  AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    'African-Inspired Designs',
    'Wedding Dresses',
    'Custom Tailoring',
    'Traditional Wear',
    'Contemporary Fashion',
    'Bridal Accessories',
    'Fashion Consultation',
    'Alterations & Repairs'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // SMTP Email sending functionality
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'katlydesigns021@gmail.com', // This will be your main email
          subject: `New Contact Form Submission - ${formData.service || 'General Inquiry'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #059669 100%); padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">New Contact from Katly Designs</h1>
              </div>
              <div style="padding: 20px; background: #f9fafb;">
                <h2 style="color: #374151;">Contact Details</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
                <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
                <h2 style="color: #374151;">Message</h2>
                <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div style="padding: 20px; text-align: center; background: #1f2937; color: white;">
                <p>Sent from Katly Designs Contact Form</p>
                <p style="font-size: 12px; opacity: 0.8;">Reply directly to: ${formData.email}</p>
                <p style="font-size: 12px; opacity: 0.7; margin-top: 16px;">
                  If you no longer wish to receive emails from us,
                  <a href="mailto:katlydesigns021@gmail.com?subject=Unsubscribe" style="color: #f59e0b; text-decoration: underline;">unsubscribe here</a>.
                </p>
              </div>
            </div>
          `
        }),
      });

      await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: formData.email,
        subject: 'Thank you for contacting Katly Designs!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #059669 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You for Reaching Out!</h1>
            </div>
            <div style="padding: 20px; background: #f9fafb;">
              <p>Hi ${formData.name || ''},</p>
              <p>Thank you for contacting <strong>Katly Designs</strong>. We have received your message and will get back to you as soon as possible.</p>
              <p>If your inquiry is urgent, please call us at <strong>+260 972 439 233</strong>.</p>
              <p>Best regards,<br/>Katly Designs Team</p>
            </div>
            <div style="padding: 20px; text-align: center; background: #1f2937; color: white;">
          <p style="font-size: 12px; opacity: 0.7;">You are receiving this email because you contacted Katly Designs.</p>
          <p style="font-size: 12px; opacity: 0.7; margin-top: 16px;">
            If you no longer wish to receive emails from us,
            <a href="https://katlydesigns.com/unsubscribe?email=${encodeURIComponent(formData.email)}" style="color: #f59e0b; text-decoration: underline;">unsubscribe here</a>.
          </p>
        </div>
            <div style="padding: 20px; text-align: center; background: #1f2937; color: white;">
              <p style="font-size: 12px; opacity: 0.7;">You are receiving this email because you contacted Katly Designs.</p>
            </div>
          </div>
        `
      }),
    });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredContact: 'email'
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Header/>
      {/* Hero Section with matching design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background with Diamond Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900">
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* SVG Diamond Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contactDiamondPattern"
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
                <line x1="0" y1="0" x2="120" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="120" y1="0" x2="0" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="2" fill="rgba(255,165,0,0.4)" />
                <circle cx="30" cy="30" r="1.5" fill="rgba(138,43,226,0.3)" />
                <circle cx="90" cy="90" r="1.5" fill="rgba(138,43,226,0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactDiamondPattern)" />
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

          {/* Sparkle effects */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
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

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Let's Create{' '}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto mb-12"
            >
              Ready to bring your fashion dreams to life? Get in touch with us and let's design something extraordinary that celebrates your unique style and heritage.
            </motion.p>

            {/* Floating service badges */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-10 left-1/4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Custom Design</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute top-10 right-1/4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Bridal Couture</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-purple-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help bring your fashion vision to life. Reach out through any of these channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                subtitle: 'Speak directly with our team',
                info: '+260 972 439 233',
                secondary: 'Available Mon-Sat',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Mail,
                title: 'Email Us',
                subtitle: 'Send us a detailed message',
                info: 'hello@katlydesigns.com',
                secondary: 'We reply within 24 hours',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: MapPin,
                title: 'Visit Our Studio',
                subtitle: 'See our work in person',
                info: 'Lusaka, Zambia',
                secondary: 'By appointment only',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Calendar,
                title: 'Business Hours',
                subtitle: 'When we are available',
                info: 'Mon-Fri: 9:00-18:00',
                secondary: 'Sat: 10:00-16:00',
                color: 'from-green-500 to-green-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.subtitle}</p>
                <p className="font-semibold text-gray-900 mb-1">{item.info}</p>
                <p className="text-sm text-gray-500">{item.secondary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Send Us a <span className="text-orange-600">Message</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-green-800 font-semibold">Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
              >
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <p className="text-red-800 font-semibold">Failed to send message</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Scissors className="w-4 h-4" />
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Contact Method
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Phone</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                  placeholder="Tell us about your project, timeline, budget, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Typical response time: 2-4 hours</span>
              </div>
              <p className="text-sm text-gray-500">
                For urgent inquiries, please call us directly at +260 972 439 233
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With <span className="text-purple-600">Katly Designs</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "7+ Years Experience",
                description: "Proven expertise in African-inspired fashion and bridal couture.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Heart,
                title: "Personalized Service",
                description: "One-on-one consultations to bring your unique vision to life.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: Crown,
                title: "Cultural Excellence",
                description: "Authentic designs that celebrate heritage with modern sophistication.",
                color: "from-blue-500 to-blue-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;