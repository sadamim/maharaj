"use client";


import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';
import { EnquiryModal } from '../components/EnquiryModal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['customercare@msiplgroup.com', 'customercare@msiplgroup.com'],
      action: 'mailto:customercare@msiplgroup.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8192262826', 'Mon-Fri, 9AM-6PM EST'],
      action: 'tel:+918192262826',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['#2051/A, Lokikere Main Road,', 'Near Industrial Area, Davangere - 577005'],
      action: 'https://maps.app.goo.gl/3iMv9fRjGwWjuHWz8',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
      action: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    // { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
     

       <section className="relative py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/contact_us.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
             <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-6">
              <span className="text-sm text-white tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-white mb-6">
              We'd Love to
              <br />
              Hear From You
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about our products or services? Our team is here to help. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-cream">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-gold to-earth rounded-xl flex items-center justify-center mb-4 shadow-md"
                >
                  <info.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="mb-3 group-hover:text-gold transition-colors">{info.title}</h4>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-sm text-gold hover:text-gold-dark transition-colors"
                  >
                    Contact →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4">Send Us a Message</h2>

              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                   
                  </div>

                 

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-gold to-earth text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span className="tracking-wide">Send Message</span>
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl text-charcoal mb-3">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
              <EnquiryModal open={showEnquiry} onClose={() => setShowEnquiry(false)} />
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3864.063950497897!2d75.930972!3d14.423477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba2533c6e96893%3A0x959d11254ad198b0!2sMaharaj%20Soaps%20Industry%20Private%20Limited.!5e0!3m2!1sen!2sin!4v1767094072547!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                />
              </div>

              {/* FAQ */}
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm mb-2">How long does shipping take?</h4>
                    <p className="text-sm text-gray-600">
                      Standard shipping takes 5-7 business days. Express options available.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2">Do you offer wholesale pricing?</h4>
                    <p className="text-sm text-gray-600">
                      Yes! Contact us for bulk order pricing and custom solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm mb-2">Can I customize a soap?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely! We offer custom creation services for orders of 50+ bars.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gold to-earth rounded-2xl p-8 text-white">
                <h3 className="text-white mb-4">Follow Our Journey</h3>
                <p className="text-white/90 mb-6">
                  Join our community on social media for exclusive content, tips, and special offers.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white/20 backdrop-blur-sm ${social.color} rounded-xl flex items-center justify-center transition-colors group`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mx-auto text-center"
          >
            <h2 className="mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for skincare tips, exclusive offers, and new product launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:border-gold focus:outline-none transition-colors"
              />
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors shadow-lg"
              >
                Subscribe
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
