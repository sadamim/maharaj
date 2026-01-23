"use client";

import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users, Globe, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Image from 'next/image';

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
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/aboutbanner.webp')`,
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
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-white tracking-wider uppercase">Our Story</span>
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
              <h2 className="mb-6">Who We Are</h2>
             <div className="space-y-6 text-gray-700">
  <p className="text-justify-better">
    At Maharaj Soaps Industries, we believe that clean living begins at home. Since
    the year 2000, we have been dedicated to crafting dependable and high-quality
    home care solutions that families can trust every day. From detergent soaps
    and washing powders to liquid detergents, dish wash bars, and phenyls, each
    product is thoughtfully developed to deliver effective cleanliness with care.
  </p>

  <p className="text-justify-better">
    Our products are manufactured under trusted brands such as <strong>Shashi</strong> and
    <strong> Savaal</strong>, reflecting our commitment to quality, consistency, and
    performance. What began as a focused manufacturing effort has grown into a
    purpose-driven organization serving thousands of households with reliable
    hygiene solutions.
  </p>

  <p className="text-justify-better">
    <strong>Our Mission</strong> is to deliver world-class cleaning products that are safe,
    effective, and accessible — helping families live healthier, happier lives
    through better hygiene and care.
  </p>

  <p className="text-justify-better">
    <strong>Our Vision</strong> is to become a household name trusted in every home,
    recognized for consistent quality, continuous innovation, and integrity in
    hygiene care.
  </p>

  <p className="text-justify-better">
    Our values guide everything we do — a quality-first mindset with strict checks
    at every stage, a customer-centric approach that puts household needs first,
    eco-friendly practices that respect health and the environment, and affordable
    goodness that delivers premium quality without premium price tags.
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
                {/* LEFT COLUMN */}
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about1.webp"
                      alt="Handmade soap"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about2.webp"
                      alt="Natural ingredients"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about3.webp"
                      alt="Artisan soap"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/about4.webp"
                      alt="Luxury soap"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
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
            className="max-w-9xl mx-auto mb-24"
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
               <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
  <Image
    src="/images/raviraja.jpg"
    alt="Dr. Raviraja M.E. - Chairman Maharaj Soaps"
    fill
    className="object-cover"
  />
</div>

              </motion.div>

              {/* Content Section */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 py-16"
              >
                {/* Heading */}
                <h1 className="text-3xl font-semibold mb-8">
                  Chairman’s Message
                </h1>

                {/* Message Content */}
                <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                  <p>
                    At Maharaj Soaps Industries Pvt. Ltd., our journey began with a simple belief —
                    cleanliness is not a luxury, it is a necessity. From the very first day, our focus
                    has been clear: to create high-quality home care products that families can trust,
                    use every day, and feel confident about.
                  </p>

                  <p>
                    Over the years, we have grown from a small manufacturing unit into a respected name
                    in the home care segment. This growth has not come from shortcuts, but from discipline,
                    consistency, and an uncompromising commitment to quality. Every soap bar, every
                    detergent, and every cleaning solution we produce carries the same promise — effective
                    performance, safe formulation, and honest value.
                  </p>

                  <p>
                    What truly drives us forward is our responsibility toward households that rely on our
                    products. We continuously invest in better processes, modern manufacturing practices,
                    and product innovation, while ensuring that our offerings remain affordable and
                    accessible. At the same time, we remain deeply conscious of our duty toward the
                    environment and the communities we serve.
                  </p>

                  <p>
                    As we move into the future, our vision is strong and focused — to build a brand that
                    stands for trust across generations, to expand our reach while staying rooted in our
                    values, and to keep improving the everyday lives of our customers through better,
                    smarter cleaning solutions.
                  </p>

                  <p>
                    I extend my sincere gratitude to our employees, partners, distributors, and customers
                    who have been an integral part of this journey. Your trust inspires us to raise our
                    standards every single day.
                  </p>

                  <p>
                    Together, we will continue to build a cleaner, healthier, and brighter tomorrow.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-10">
                  <p className="font-medium">Warm regards,</p>
                  <p className="font-semibold mt-1">Dr. Raviraja M.E.</p>
                  <p className="text-gray-600">
                    Chairman & Managing Director <br />
                    Maharaj Soaps Industries Pvt. Ltd.
                  </p>
                </div>
              </motion.section>


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
