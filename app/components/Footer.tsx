"use client";

import { motion } from 'framer-motion';
import { Facebook, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { EnquiryModal } from './EnquiryModal';

export function Footer() {
  // Initialise to a fixed value so the server and client render the same markup.
  // The real width is picked up in the effect below, after hydration.
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // set initial width
    handleResize();

    window.addEventListener('resize', handleResize);

    const timeoutId = setTimeout(() => {
      setShowEnquiry(true);
    }, 30000); // 30 seconds

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);


  const [showEnquiry, setShowEnquiry] = useState(false);
  const footerLinks = {
    shop: [
      { name: 'Brand & Products', href: '/brands' },
      { name: 'Shop Online', href: '/products' },
      { name: 'Quality Assurance', href: '/quality-assurance' },
      { name: 'Distributors', href: '/distributors' },
      { name: 'News & Blogs', href: '/news' },
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
    <footer className="footer-half-gradient text-white pt-20 pb-8 py-20 bg-deep-maroon">
      <div className="container-padding mx-4 md:mx-[5%] lg:mx-[10%] ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start text-center">

          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex justify-center"
            >
              <div style={{
                width: windowWidth < 768 ? '180px' : '150px',
                height: windowWidth < 768 ? '140px' : '122px'
              }} className="flex-shrink-0">
                <img
                  src="/images/Maharaja_logo_red.png"
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
                className="flex items-center justify-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">customercare@msiplgroup.com</span>
              </motion.a>
              <motion.a
                href="tel:+917353011355"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center gap-3 text-white hover:text-gold transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7353011355</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start justify-center gap-3 text-white text-left"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Plot no #2051/A Lokikere Main Road Near <br /> Industrial Area Davangere 577005</span>
              </motion.div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-5">
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



          <div className='margin-top-mov'>
            <h4 className="text-white mb-6 font-semibold ">Company</h4>
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

          <div className='margin-top-mov'>
            <h4 className="text-white mb-6 font-semibold ">Business</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
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

          <div className="w-full max-w-md mx-auto ">
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
              © {new Date().getFullYear()} Maharaj Soaps Pvt. Ltd. All rights reserved.
            </p>

            {/* Legal Links + Enquiry Button */}
            <div className="flex items-center gap-4">

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

      </div>
      <EnquiryModal open={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </footer>
  );
}
