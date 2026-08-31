"use client";

import { motion } from 'framer-motion';
import { Award, Eye, HandHeart, Lightbulb, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import Image from 'next/image';
import { chairmanMessage, mission, values, vision } from '../content/msipl';

const milestones = [
  {
    year: '2000',
    title: 'The Beginning',
    description:
      'Started as a small-scale unit with a vision to uplift daily cleaning with better-quality products',
  },
  {
    year: '2008',
    title: 'Breakthrough in Formulation',
    description:
      'Developed advanced stain-removal and fabric-care formulas that set new standards in performance',
  },
  {
    year: '2016',
    title: 'Production Upgrade',
    description:
      'Enhanced manufacturing capabilities with improved processes for consistency, purity, and efficiency',
  },
  {
    year: '2023',
    title: 'Trusted by Millions',
    description:
      'Proudly serving families across the country, becoming a household name in dependable cleaning',
  },
];

export default function AboutPage() {
  const valueIcons = [ShieldCheck, HandHeart, Users, Award, Sparkles, Lightbulb];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/About us-banner-1.webp')`,
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
            <h1 className="text-white mb-6">
              25 Years of Excellence
              <br />
              in Soap Innovation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story-section py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <div className="about-story-grid grid lg:grid-cols-2 gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-story-copy"
            >
              <h2 className="mb-6">Who We Are</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-justify-better">
                  Since its inception in 2000 by Dr. Raviraja M.E, MSIPL has emerged as a trusted
                  manufacturer and supplier of detergent soaps, powders, and liquids. Evolving from
                  Maharaj Industries into a private limited company in 2010, we have expanded our
                  reach across India with a strong commitment to innovation, quality, and customer
                  satisfaction.
                </p>

                <p className="text-justify-better">
                  Our products are manufactured under trusted brands such as <strong>SHASHI</strong> and
                  <strong> SAVAAL</strong>, reflecting our commitment to quality, consistency, and
                  performance. Our journey is built on excellence, reliability, and a vision to
                  provide every home with affordable, effective, and safe cleaning solutions.
                </p>

                <p className="text-justify-better">
                  With a strong market presence across the country, we have successfully diversified
                  our operations into key sectors including FMCG Manufacturing, E-commerce, Retail,
                  Education, Logistics, and more - remaining committed to delivering quality, value,
                  and innovation in everything we do.
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-collage relative h-full"
            >
              <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about1.webp"
                  alt="MSIPL manufacturing"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 lg:py-32 vision-mission-section overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-40 w-[480px] h-[480px] rounded-full border border-white/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 -bottom-32 w-[360px] h-[360px] rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16"
          >
            <span className="block h-1 w-14 bg-gold rounded-full mx-auto mb-6" />
            <p className="text-sm font-bold text-gold uppercase tracking-[0.25em] mb-3 text-center">
              Purpose &amp; Direction
            </p>
            <h2 className="text-white">Our Mission &amp; Vision</h2>
          </motion.div>

          <div className="vision-mission-grid max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="vision-mission-block"
            >
              <div className="vision-mission-icon">
                <Target />
              </div>
              <span className="vision-mission-label">01 &middot; Our Mission</span>
              <p className="font-serif-quote vision-mission-text">
                {mission}
              </p>
            </motion.div>

            <div className="vision-mission-divider" aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="vision-mission-block"
            >
              <div className="vision-mission-icon">
                <Eye />
              </div>
              <span className="vision-mission-label">02 &middot; Our Vision</span>
              <p className="font-serif-quote vision-mission-text">
                &ldquo;{vision}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="milestone-section py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="milestone-heading mx-auto mb-20 flex flex-col items-center"
          >
            <h2 className="mb-6">Our Milestones</h2>
            <p className="text-gray-600">
              A journey of dedication, growth, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="milestone-wrap max-w-6xl mx-auto mt-16">
            <div className="milestone-grid">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="milestone-card relative"
                >
                  <div className="milestone-content">
                    <div className="milestone-year">
                      <span>{milestone.year}</span>
                    </div>
                    <h4>{milestone.title}</h4>
                    <p style={{ textAlign: 'center' }}>{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="milestone-connector" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="about-values-section py-20 lg:py-32 bg-cream scroll-mt-24">
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
            <p className="text-gray-600 mb-10 text-center">
              The cornerstone of our growth - the core values embedded in our organizational
              culture that guide us in every endeavor.
            </p>
          </motion.div>

          <div className="about-values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="about-value-card bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    className="about-value-icon"
                  >
                    <svg className="about-value-gradient-def" width="0" height="0" aria-hidden="true" focusable="false">
                      <linearGradient id={`about-value-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#24485e" />
                        <stop offset="100%" stopColor="#c98a4f" />
                      </linearGradient>
                    </svg>
                    <Icon style={{ stroke: `url(#about-value-gradient-${index})` }} />
                  </motion.div>
                  <h3 className="text-xl mb-3 text-center transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify w-full">
                    “{value.quote}”
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section id="chairman" className="chairman-section py-20 lg:py-32 bg-cream scroll-mt-24">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="chairman-wrap max-w-9xl mx-auto"
          >
            <div className="chairman-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="chairman-photo relative min-h-[420px]"
              >
                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/raviraja.webp"
                    alt="Dr. Raviraja M.E. - Founder & CMD, MSIPL"
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
                className="chairman-message max-w-4xl mx-auto px-6 py-16"
              >
                <h1 className="text-3xl font-semibold mb-8">
                  Chairman&rsquo;s Message
                </h1>

                <div className="space-y-5 text-gray-700 leading-relaxed text-base">
                  {chairmanMessage.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="font-semibold mt-1">- {chairmanMessage.signatureName}</p>
                  <p className="text-gray-600">{chairmanMessage.signatureTitle}</p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
