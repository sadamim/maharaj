"use client";

import { motion } from 'framer-motion';
import { Facebook, Instagram, X, Mail, Phone, MapPin, Twitter, Youtube, TicketX, Linkedin } from 'lucide-react';
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
    }, 30000); // 5 seconds

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
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Products', href: '/products' },

      { name: 'Contact Us', href: '/contact' },
    ],
    support: [

    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/msiplgroup/|', label: 'Facebook' },
    // { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/msipl/', label: 'Instagram' },
    // { icon: Twitter, href: '#', label: 'X' }, 
    // { icon: Youtube, href: '#', label: 'X' },

  ];
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <footer className="bg-charcoal text-white pt-20 pb-8">
      <div className="container-padding mx-4 md:mx-[5%] lg:mx-[10%] ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start">

          <div className="">
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
                <span className="text-sm">Plot no #2051/A Lokikere Main Road Near <br /> Industrial Area Davangere 577005</span>
              </motion.div>
            </div>
            <div className="flex items-center gap-4 mt-5">
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
          </div>



          <div>
            <h4 className="text-white mb-6 font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-white hover:text-gold transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md ml-auto ">
            <h4 className="text-white mb-4 text-base font-semibold enquity-from-h4">
              Quick Enquiry
            </h4>

            <form className="space-y-3">
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Your Name" />
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Phone Number" />
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Email Address" />
              <textarea rows={3} className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm resize-none" placeholder="Your Message" />
              <button className="w-full bg-gold py-2 rounded text-sm font-semibold">
                Submit Enquiry
              </button>
            </form>
          </div>




        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

            {/* Copyright */}
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Shashi Soap. All rights reserved.
            </p>

            {/* Social Links */}


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

      </div>
      <EnquiryModal open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </footer>
  );
}
