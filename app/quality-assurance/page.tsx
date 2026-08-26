"use client";

import { motion } from 'framer-motion';
import { FlaskConical, Factory, UsersRound, TrendingUp, ShieldCheck, FileCheck2 } from 'lucide-react';
import { qualityAssurance } from '../content/msipl';

const pillarIcons = [FlaskConical, Factory, UsersRound, TrendingUp];

export default function QualityAssurancePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/factory page.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
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
              <span className="text-sm text-white tracking-wider uppercase">
                {qualityAssurance.heroSubheading}
              </span>
            </div>
            <h1 className="text-white mb-6">{qualityAssurance.heroHeading}</h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed">{qualityAssurance.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-sm text-gold tracking-wider uppercase">
                MSIPL Quality Assurance &amp; Commitment
              </span>
            </div>
            <h2 className="mb-6">Every Product, Rigorously Verified</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityAssurance.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? ShieldCheck;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-gold to-earth rounded-xl flex items-center justify-center mb-5 shadow-md"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section className="py-20 lg:py-32 bg-deep-maroon">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16"
          >
            <h2 className="mb-4">Quality Commitment</h2>
            <p className="max-w-2xl mx-auto text-gray-700">{qualityAssurance.commitment}</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {qualityAssurance.process.map((step, index) => (
              <div key={step} className="flex items-center gap-3 md:gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl px-6 py-5 shadow-md text-center min-w-[140px]"
                >
                  <span className="block text-xs text-gold uppercase tracking-wider mb-1">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-charcoal">{step}</span>
                </motion.div>
                {index < qualityAssurance.process.length - 1 && (
                  <span className="text-2xl text-charcoal/40 hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-sm text-gold tracking-wider uppercase">Compliance</span>
            </div>
            <h2 className="mb-4">Certifications &amp; Documentation</h2>
            <p className="text-gray-600 max-w-2xl">
              Official certifications and relevant documentation may be displayed here to
              substantiate our compliance with rigorous safety and quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[0, 1, 2].map((slot) => (
              <div
                key={slot}
                className="aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center gap-2 text-center p-6"
              >
                <FileCheck2 className="w-8 h-8 text-gray-300" />
                <p className="text-sm text-gray-400">Certification document</p>
                <p className="text-xs text-gray-300">To be added when available</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
