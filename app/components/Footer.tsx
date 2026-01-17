"use client";

import { motion } from 'framer-motion';
import { Facebook, Instagram, X, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnquiryModal } from './EnquiryModal';

export function Footer() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // set initial width
  handleResize();

  window.addEventListener('resize', handleResize);

  const timeoutId = setTimeout(() => {
    setShowEnquiry(true);
  }, 5000); // 5 seconds

  return () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(timeoutId);
  };
}, []);

 
  const footerLinks = {
    shop: [
      { name: 'All Products', href: '#' },
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Maharaj Detergents', href: '#' },
      { name: 'Maharaj Soaps', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  // { icon: Twitter, href: '#', label: 'X' }, // X is the replacement for XIcon
  ];
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="container-padding mx-4 md:mx-[5%] lg:mx-[10%] ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div style={{ 
                width: windowWidth < 768 ? '180px' : '150px', 
                height: windowWidth < 768 ? '140px' : '122px' 
              }} className="flex-shrink-0">
                <img
                  src="/images/Maharaja_logo.webp"
                  alt="Maharaja Logo"
                  className="w-full h-full object-contain white-logo"
                />
              </div>
            </motion.div>
            
            <p className="text-white mb-6 leading-relaxed">
              Handcrafted luxury soaps made with the finest natural ingredients. 
              Elevating your daily ritual since 2012.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="mailto:customercare@msiplgroup.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">customercare@msiplgroup.com</span>
              </motion.a>
              <motion.a
                href="tel:+918192262826"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 81922 62826</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-white"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Plot no #2051/A Lokikere Main Road Near Industrial Area Davangere 577005</span>
              </motion.div>
            </div>
          </div>

          {/* Shop Links */}
          <div className='d-desktop'>
            <h4 className="text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-gold transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className='d-desktop'>
            <h4 className="text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-gold transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className='d-desktop'>
            <h4 className="text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-white hover:text-gold transition-colors text-sm block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

  {/* Shop Links */}
  <div className="d-mobile">
    <h4 className="text-white mb-4 text-base font-semibold">Shop</h4>
    <ul className="space-y-3">
      {footerLinks.shop.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <a
            href={link.href}
            className="text-white text-sm block transition-all duration-300 hover:text-gold hover:translate-x-1"
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>

  {/* Company Links */}
  <div className="d-mobile">
    <h4 className="text-white mb-4 text-base font-semibold">Company</h4>
    <ul className="space-y-3">
      {footerLinks.company.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <a
            href={link.href}
            className="text-white text-sm block transition-all duration-300 hover:text-gold hover:translate-x-1"
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>

  {/* Support Links */}
  <div className="col-span-2 md:col-span-1 d-mobile">
    <h4 className="text-white mb-4 text-base font-semibold">Support</h4>
    <ul className="space-y-3">
      {footerLinks.support.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <a
            href={link.href}
            className="text-white text-sm block transition-all duration-300 hover:text-gold hover:translate-x-1"
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </div>

</div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Shashi Soap. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/5 hover:bg-gold rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links + Enquiry Button */}
            <div className="flex items-center gap-4">
            
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-white hover:text-gold transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-white hover:text-gold transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white text-xs tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>Cruelty Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span>Handcrafted</span>
            </div>
          </div>
        </motion.div>
      </div>
      <EnquiryModal open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </footer>
  );
}
