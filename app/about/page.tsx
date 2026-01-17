"use client";

import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users, Globe, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function AboutPage() {
  const milestones = [
    { year: '1998', title: 'The Beginning', description: 'Started as a small-scale unit with a vision to uplift daily cleaning with better-quality products' },
    { year: '2008', title: 'Breakthrough in Formulation', description: 'Developed advanced stain-removal and fabric-care formulas that set new standards in performance' },
    { year: '2016', title: 'Production Upgrade', description: 'Enhanced manufacturing capabilities with improved processes for consistency, purity, and efficiency' },
    { year: '2023', title: 'Trusted by Millions', description: 'Proudly serving families across the country, becoming a household name in dependable cleaning' },
  ];

  const team = [
    {
      name: 'Mr. Raviraja M.E',
      role: 'Chairman, MSIPL',
      image: '/images/raviraja.jpg',
    },
   
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality You Can Trust',
      description: 'Every product is crafted with carefully selected ingredients to ensure consistent cleaning performance, fabric safety, and long-lasting freshness.',
    },
    {
      icon: Heart,
      title: 'Safe for Your Home',
      description: 'Formulated to be gentle on fabrics and surfaces while staying tough on stains, ensuring peace of mind for every family.',
    },
    {
      icon: Leaf,
      title: 'Responsible Sourcing',
      description: 'We work with reliable suppliers who follow ethical practices, ensuring every ingredient meets our strict quality and safety standards.',
    },
    {
      icon: Globe,
      title: 'Clean Manufacturing Practices',
      description: 'Our production processes focus on hygiene, precision, and efficiency — ensuring each pack delivers the performance we promise.',
    },
    {
      icon: Sparkles,
      title: 'Innovation with Purpose',
      description: 'We continuously refine our formulations to deliver better stain removal, improved fragrance, and enhanced user experience.',
    },
    {
      icon: Users,
      title: 'Made for Every Indian Home',
      description: 'Affordable, dependable, and designed for real everyday needs — from busy households to large families.',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/Aboutus.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-gold tracking-wider uppercase">Our Story</span>
            </div>
            <h1 className="text-white mb-6">
              Crafting a Cleaner 
              <br />
              Tomorrow
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Maharaja Soap Factory blends time-tested expertise with modern cleaning science to create products that uplift your daily routines with purity and comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">Our Journey</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                 Maharaja Soap Factory began decades ago in a modest production space, where our founders dedicated themselves to creating cleaning solutions that were both effective and gentle for everyday use. What started as a small initiative to make dependable, family-friendly detergents soon grew into a mission to uplift the daily lives of households with products they could trust.
                </p>
                <p>
                 In the early years, our approach was simple — combine thoughtful formulation with honest craftsmanship. Over time, this philosophy shaped every stage of our process, from the selection of raw materials to the final finishing of each product. We work with reliable suppliers and quality-driven partners to ensure every ingredient meets our stringent standards for safety, consistency, and performance.
                </p>
                <p>
                 Today, Maharaja Soap Factory has evolved into a brand embraced by thousands of homes. Yet, our foundation remains unchanged: purity, care, and a commitment to delivering a superior cleaning experience. Whether it’s laundry essentials or household cleaners, each product carries forward our promise of quality and our dedication to making every wash a little brighter, fresher, and more comforting.
                </p>
                <p>
                  Every pack tells a story of trust — built over years, crafted with responsibility, and made for families who deserve the best.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1607006555278-8d2de55615e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHNvYXAlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1NTIyMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Handmade soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758614029926-ce31d385b9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NjU1MjIwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Natural ingredients"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1588546071922-7c599cdf651b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwc29hcCUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NTIyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Artisan soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1763485955921-d3842bd90eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2FwJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjU1MjIwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury soap"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mx-auto mb-20 flex flex-col items-center"
          >
            <h2 className="mb-6">Our Milestones</h2>
            <p className="text-gray-600">
              A journey of dedication, growth, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold to-earth rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white">{milestone.year}</span>
                    </div>
                    <h4 className="mb-2">{milestone.title}</h4>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-[2px] bg-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-20 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-sm text-gold tracking-wider uppercase">Our Values</span>
            </div>
            <h2 className="mb-6">What We Stand For</h2>
            <p className="text-gray-600 mb-10">
              Our principles guide every decision we make and every product we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mb-6 bg-gradient-to-br from-gold to-earth rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3 group-hover:text-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
       <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto mb-24"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
        <ImageWithFallback
          src="/images/raviraja.jpg"   // 👈 replace with actual image path
          alt="Dr. Raviraja M.E. - Chairman Maharaj Soaps"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

    {/* Content Section */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl lg:text-3xl mb-2">
        Dr. Raviraja M.E.
      </h3>
      <p className="text-sm text-gold mb-6">
        Chairman & Managing Director <br />
        Maharaj Soaps Industry (P) Ltd.
      </p>

      {/* Quality */}
      <div className="mb-6">
        <h4 className="text-lg mb-2">Our Quality</h4>
        <p className="text-gray-600 leading-relaxed">
          To be the leader in domestic as well as global markets through sincere
          and dedicated efforts of staff, management, and employees. Maharaj
          Soaps and Detergents is a customer-focused firm committed to
          consistently offering better quality products and services that
          maximise value to the customer.
        </p>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h4 className="text-lg mb-2">Our Vision</h4>
        <p className="text-gray-600 leading-relaxed">
          Quality has always been the foremost concern for us. We have adopted
          several international quality control standards to ensure superior
          quality. Our quality inspectors monitor every stage of the production
          process—from raw materials to final dispatch.
        </p>
      </div>

      {/* Mission */}
      <div>
        <h4 className="text-lg mb-2">Our Mission</h4>
        <p className="text-gray-600 leading-relaxed">
          To excel in soaps and detergents by delivering high-quality products
          at attractive prices, achieving sustainable profitability, making
          India’s presence felt globally, and setting benchmarks for future
          companies.
        </p>
      </div>
    </motion.div>

  </div>
</motion.div>
</div>
      </section>



      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gold via-earth to-gold-dark">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto"
          >
            <h2 className="text-white mb-6">Join Our Journey</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Interested in partnering with a trusted personal care brand
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-charcoal rounded-full hover:bg-cream transition-colors duration-300 shadow-xl"
            >
              <span className="tracking-wide">Join the MSIPL family</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
