"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
   const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Factory", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Enquiry", href: "/enquiry" },
        { name: "Contact", href: "/contact" },

  ];

  const handleNavClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : currentPage === 'home' ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg'
        }`}
    >
      <div className="container-padding mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="relative z-10 flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <div className="logo-wrapper flex-shrink-0">
  <ImageWithFallback
    src="/images/Maharaja_logo.webp"
    alt="Maharaja Logo"
    className={
      isScrolled
        ? "logo-image"
        : currentPage === 'home'
        ? "logo-image white-logo"
        : "logo-image"
    }
  />
</div>

            <div className="hidden sm:block">
              <h1 className={`text-lg lg:text-2xl font-bold transition-colors duration-300 ${isScrolled || currentPage !== 'home' ? 'text-charcoal' : 'text-white'
                }`}>
                MAHARAJA
              </h1>
              <div className="text-xs tracking-[0.2em] text-gold uppercase font-semibold">
                Soap Factory
              </div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative uppercase text-sm transition-colors   ${
                  pathname === link.href
                    ? !isScrolled ?`text-white` : `text-gold` 
                    :isScrolled ?`text-gold`  :  "text-white hover:text-white" 
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 lg:gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`hidden md:block transition-colors ${isScrolled || currentPage !== 'home' ? 'text-charcoal hover:text-gold' : 'text-white hover:text-gold-light'
                }`}
            >
              <Search className="w-5 h-5" />
            </motion.button>




            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${isScrolled || currentPage !== 'home' ? 'text-charcoal' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg ${
                    pathname === link.href ? "text-gold" : "text-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
