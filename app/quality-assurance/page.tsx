"use client";

import { motion } from 'framer-motion';
import { FlaskConical, Factory, UsersRound, TrendingUp, ShieldCheck, FileCheck2, Package, Truck, type LucideIcon } from 'lucide-react';
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
              backgroundImage: `url('/Quality Assurance-banner-1.webp')`,
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
            <span className="block text-sm text-white/80 tracking-wider uppercase mb-4">
              {/* {qualityAssurance.heroSubheading} */}
            </span>
            {/* <h1 className="text-white mb-6">{qualityAssurance.heroHeading}</h1> */}
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
                        <h1 className="text-gold mb-6" style={{ fontSize: '3.5rem' }}>{qualityAssurance.heroHeading}</h1>

            
            <p className="text-gray-600 leading-relaxed max-w-2xl text-center">
              Four pillars guide every batch that leaves our production floor before it reaches
              an Indian household.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityAssurance.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? ShieldCheck;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center text-center bg-cream rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow border border-transparent hover:border-gold/40"
                >
                  <div className="flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <Icon className="w-20 h-20 text-gold m-2" />
                  </div>
                  {/* <span className="text-xs font-bold text-gold tracking-wider mb-1">0{index + 1}</span> */}
                  <h3 className="text-xl mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center text-sm">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
        <div
          className="pointer-events-none absolute -left-36 -top-36 w-[420px] h-[420px] rounded-full border border-white/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-28 -bottom-28 w-[320px] h-[320px] rounded-full border border-white/10"
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
              Our Process
            </p>
            <h2 className="mb-4 text-white">Quality Commitment</h2>
            <p className="max-w-2xl mx-auto text-white/70 text-center">{qualityAssurance.commitment}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-xl max-w-3xl mx-auto px-6 py-12 sm:px-10"
          >
            <HorseshoeFlow steps={qualityAssurance.process} />
          </motion.div>
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
            <p className="text-gray-600 max-w-2xl text-center">
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
                <p className="text-sm text-gray-400 text-center">Certification document</p>
                <p className="text-xs text-gray-300 text-center">To be added when available</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowArrow({ direction }: { direction: 'right' | 'down' | 'left' }) {
  const rotation = direction === 'right' ? 0 : direction === 'down' ? 90 : 180;
  return (
    <div className="flex items-center justify-center w-10 h-10">
      <svg
        viewBox="0 0 32 16"
        className="w-8 h-4"
        style={{ transform: `rotate(${rotation}deg)`, color: '#c9a86f' }}
        fill="none"
      >
        <path
          d="M0 8 H26 M26 8 L18 2 M26 8 L18 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const processIcons: Record<string, LucideIcon> = {
  'Raw Material': Package,
  'Production': Factory,
  'Batch Testing': FlaskConical,
  'Quality Control': ShieldCheck,
  'Distribution': Truck,
};

function FlowBox({ label, delay }: { label: string; delay: number }) {
  const Icon = processIcons[label] ?? Package;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="flow-box flex flex-col items-center gap-3 bg-white rounded-2xl px-6 py-6 shadow-lg text-center min-w-[150px] sm:min-w-[160px]"
    >
      <div className="flow-box-icon">
        <Icon />
      </div>
      <span className="font-semibold text-charcoal">{label}</span>
    </motion.div>
  );
}

/**
 * Renders the 5-step process as a horseshoe/serpentine flow on sm+ screens
 * (right, down, down, left) and as a simple vertical stack on mobile.
 */
function HorseshoeFlow({ steps }: { steps: readonly string[] }) {
  const [s0, s1, s2, s3, s4] = steps;

  return (
    <>
      {/* Mobile: simple vertical stack */}
      <div className="horseshoe-mobile flex-col items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center gap-2">
            <FlowBox label={step} delay={index * 0.08} />
            {index < steps.length - 1 && <FlowArrow direction="down" />}
          </div>
        ))}
      </div>

      {/* sm+: horseshoe layout */}
      <div
        className="horseshoe-desktop mx-auto w-fit items-center justify-items-center gap-x-6 gap-y-2"
        style={{ gridTemplateColumns: 'auto auto auto' }}
      >
        <div style={{ gridColumn: 1, gridRow: 1 }}>
          <FlowBox label={s0} delay={0} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <FlowArrow direction="right" />
        </div>
        <div style={{ gridColumn: 3, gridRow: 1 }}>
          <FlowBox label={s1} delay={0.1} />
        </div>

        <div style={{ gridColumn: 3, gridRow: 2 }}>
          <FlowArrow direction="down" />
        </div>

        <div style={{ gridColumn: 3, gridRow: 3 }}>
          <FlowBox label={s2} delay={0.2} />
        </div>

        <div style={{ gridColumn: 3, gridRow: 4 }}>
          <FlowArrow direction="down" />
        </div>

        <div style={{ gridColumn: 1, gridRow: 5 }}>
          <FlowBox label={s4} delay={0.4} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 5 }}>
          <FlowArrow direction="left" />
        </div>
        <div style={{ gridColumn: 3, gridRow: 5 }}>
          <FlowBox label={s3} delay={0.3} />
        </div>
      </div>
    </>
  );
}
