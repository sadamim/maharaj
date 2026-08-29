"use client";

import { motion } from 'framer-motion';
import { Facebook, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnquiryModal } from './EnquiryModal';

export function Footer() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEnquiry(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  const footerLinks = {
    shop: [
      { name: 'Brand & Products', href: '/brands' },
      { name: 'Quality Assurance', href: '/quality-assurance' },
      { name: 'Distributors', href: '/distributors' },
      { name: 'Blogs', href: '/news' },
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: "Chairman's Message", href: '/about#chairman' },
      { name: 'Our Values', href: '/about#values' },
      { name: 'Career', href: '/career' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/msiplgroup/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/msipl/', label: 'LinkedIn' },
  ];

  return (
    <footer className="site-footer bg-charcoal text-white pt-20 pb-8">
      <div className="container-padding footer-inner mx-auto">
        {/* Main Footer Content */}
        <div className="footer-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Logo + contact */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 w-48 h-auto"
            >
              <img
                src="/images/Maharaja_logo_red.png"
                alt="Maharaja Logo"
                className="w-full h-auto object-contain white-logo"
              />
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="mailto:customercare@msiplgroup.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-base">customercare@msiplgroup.com</span>
              </motion.a>
              <motion.a
                href="tel:+917353011355"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-base">+91 7353011355</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-white text-left"
              >
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-base">Plot no #2051/A Lokikere Main Road Near Industrial Area Davangere 577005</span>
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
            <h4 className="footer-heading">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-white hover:text-gold transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Business</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base text-white hover:text-gold transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="footer-heading">Quick Enquiry</h4>
            <form className="space-y-3">
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Your Name" />
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Phone Number" />
              <input className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm" placeholder="Email Address" />
              <textarea rows={3} className="w-full px-3 py-2 rounded bg-white/10 text-white text-sm resize-none" placeholder="Your Message" />
              <button className="site-nav-cta w-full flex items-center justify-center">
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

            <p className="text-sm text-white">
              © {new Date().getFullYear()} Maharaj Soaps Pvt. Ltd. All rights reserved.
              <span className="text-white/60"> &middot; Digital Partner - IM Solutions</span>
            </p>

            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-sm text-white hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm text-white hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
      <EnquiryModal open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </footer>
  );
}
