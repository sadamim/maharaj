"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, HandHeart, Award, Lightbulb, ShieldCheck, Sparkles, Upload, Users } from 'lucide-react';
import { useState } from 'react';
import { values } from '../content/msipl';

const valueIcons = [ShieldCheck, HandHeart, Users, Award, Sparkles, Lightbulb];

const openings = [
  { title: 'Production Supervisor', department: 'Manufacturing', location: 'Davangere, Karnataka', type: 'Full-time' },
  { title: 'Quality Control Executive', department: 'Quality Assurance', location: 'Davangere, Karnataka', type: 'Full-time' },
  { title: 'Sales Executive', department: 'Distribution & Sales', location: 'Karnataka', type: 'Full-time' },
  { title: 'Warehouse & Logistics Coordinator', department: 'Supply Chain', location: 'Davangere, Karnataka', type: 'Full-time' },
  { title: 'Machine Operator', department: 'Production', location: 'Davangere, Karnataka', type: 'Full-time' },
  { title: 'Marketing Executive', department: 'Brand & Marketing', location: 'Davangere, Karnataka', type: 'Full-time' },
];

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', state: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', city: '', state: '' });
      setFileName(null);
      setIsSubmitted(false);
    }, 4000);
  };

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors";
  const labelClass = "block text-sm text-gray-700 mb-2";

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-deep-maroon overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/Servicesbanner.webp')`,
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
            <h1 className="text-white mb-6">Build Your Career at MSIPL</h1>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-sm text-gold tracking-wider uppercase">Our Culture</span>
            </div>
            <h2 className="mb-6">Guided by the Same Values Since 2000</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">“{value.quote}”</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-16 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-4">
              <span className="text-sm text-gold tracking-wider uppercase">Join Our Team</span>
            </div>
            <h2 className="mb-4">Current Openings</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {openings.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-cream rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow border border-transparent hover:border-gold/40"
              >
                <span className="inline-block text-[11px] font-semibold text-gold uppercase tracking-wider bg-gold/10 rounded-full px-3 py-1 mb-4">
                  {role.department}
                </span>
                <h3 className="text-lg mb-2">{role.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{role.location} &middot; {role.type}</p>
                <a
                  href="#apply-now"
                  className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Apply for this role →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply-now" className="py-20 lg:py-32 bg-white scroll-mt-24">
        <div className="container-padding mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Apply Now</h2>
            <p className="text-gray-600 text-center">
              No specific openings are listed at this time — submit your details and we&rsquo;ll
              reach out when a suitable role is available.
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-cream rounded-3xl p-8 lg:p-10 shadow-md"
            >
              <div>
                <label className={labelClass}>Name *</label>
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>City *</label>
                  <input name="city" value={formData.city} onChange={handleChange} required placeholder="City" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State *</label>
                  <input name="state" value={formData.state} onChange={handleChange} required placeholder="State" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Upload Resume *</label>
                <label className="flex items-center justify-between px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gold transition-colors bg-white">
                  <span className="text-sm text-gray-500 truncate">
                    {fileName ?? "Click to upload PDF / DOC"}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gold shrink-0 ml-3">
                    <Upload className="w-4 h-4" /> Browse
                  </span>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-gold to-earth text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span className="tracking-wide font-semibold">Submit Application</span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-cream rounded-3xl"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl text-charcoal mb-3">Application Received</h3>
              <p className="text-gray-600 text-center">Thank you for your interest in MSIPL.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
