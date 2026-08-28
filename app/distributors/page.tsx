"use client";

import { motion } from 'framer-motion';
import { Award, CheckCircle2, Handshake, HandCoins, MapPinned, Megaphone, TrendingUp, Truck } from 'lucide-react';
import { useState } from 'react';
import { distributorReasons } from '../content/msipl';

const reasonIcons = [Award, TrendingUp, HandCoins, Megaphone, Truck, MapPinned];

export default function DistributorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    territory: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '', company: '', email: '', phone: '', city: '', state: '', territory: '', message: '',
      });
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
              backgroundImage: `url('/images/web banner.webp')`,
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
            <h1 className="text-white mb-6">Why Partner with MSIPL?</h1>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributorReasons.map((reason, index) => {
              const Icon = reasonIcons[index] ?? Award;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center mb-5">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-xl mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <a
              href="#become-a-distributor"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-earth text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Handshake className="w-5 h-5" />
              <span className="tracking-wide font-semibold">Become a Distributor</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="become-a-distributor" className="py-20 lg:py-32 bg-white scroll-mt-24">
        <div className="container-padding mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Become a Distributor</h2>
            <p className="text-gray-600" style={{ textAlign: 'center' }}>
              Tell us about your business and territory — our team will get in touch.
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Company *</label>
                  <input name="company" value={formData.company} onChange={handleChange} required placeholder="Company name" className={inputClass} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
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
                <label className={labelClass}>Territory</label>
                <input name="territory" value={formData.territory} onChange={handleChange} placeholder="Territory of interest" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your distribution reach" className={`${inputClass} resize-none`} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-gold to-earth text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span className="tracking-wide font-semibold">Submit Enquiry</span>
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
              <h3 className="text-2xl text-charcoal mb-3">Enquiry Sent!</h3>
              <p className="text-gray-600 text-center">Our distribution team will review your details and get back to you.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
