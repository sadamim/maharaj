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
              backgroundImage: `url('/Distributors-banner-1.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

       
      </section>

      {/* Reasons */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title center mx-auto mb-16"
          >
            <span>Partner With Confidence</span>
            <h2 className="mb-4">Why Partner with MSIPL?</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Six reasons distributors across India choose to grow their business with us.
            </p>
          </motion.div>

           <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Distributors
            </span>
            {/* <h1 className="text-gold mb-4 text-sm">Partner With MSIPL</h1> */}
            <p className="text-white/75 text-lg">
              Join a growing network of distributors carrying trusted, high-demand brands
              into homes across India.
            </p>
          </motion.div>
        </div>

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
                  className="distributor-reason-card"
                >
                  <div className="distributor-reason-icon text-center">
                    <Icon />
                  </div>
                  {/* <span className="distributor-reason-index">0{index + 1}</span> */}
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Handshake className="w-5 h-5" />
              <span className="tracking-wide font-semibold">Become a Distributor</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enquiry form */}
{/* =====================================================
    BECOME A DISTRIBUTOR
===================================================== */}
<section
  id="become-a-distributor"
  className="relative py-20 lg:py-32 bg-cream scroll-mt-24 overflow-hidden"
>
  <div className="container-padding mx-auto">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* =================================================
          LEFT — DISTRIBUTOR OPPORTUNITY
      ================================================= */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:sticky lg:top-32"
      >
        <span className="section-kicker">
          Become A Partner
        </span>

        <h2 className="mt-4 mb-6">
          Build Your Business
          <br />
          <span className="text-gold">With MSIPL.</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
          Join MSIPL's growing distribution network and bring
          trusted personal care and home care products to
          customers across your territory.
        </p>

        {/* Opportunity Points */}
        <div className="space-y-6">

          {/* Point 1 */}
          <div className="flex gap-5 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
              <TrendingUp className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-1">
                Grow With Established Brands
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Build your portfolio with products designed
                for everyday demand and long-term market growth.
              </p>
            </div>
          </div>


          {/* Point 2 */}
          <div className="flex gap-5 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
              <Truck className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-1">
                Expand Your Territory
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Reach new markets and strengthen your distribution
                network with the support of MSIPL.
              </p>
            </div>
          </div>


          {/* Point 3 */}
          <div className="flex gap-5 group">
            <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
              <Handshake className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-1">
                A Partnership Built To Last
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Work alongside a team committed to product quality,
                reliable supply and sustainable partnerships.
              </p>
            </div>
          </div>

        </div>


        {/* Bottom Highlight */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold mb-2">
            Let's Grow Together
          </p>

          <p className="text-gray-600">
            Tell us about your business, market and territory.
            Our team will connect with you.
          </p>
        </div>
      </motion.div>


      {/* =================================================
          RIGHT — FORM
      ================================================= */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-7 md:p-9 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100"
          >

            {/* Form Header */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
                Distributor Enquiry
              </span>

              <h3 className="text-2xl lg:text-3xl mt-2 mb-2">
                Let's Start a Conversation
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Share your details and our team will get back
                to you shortly.
              </p>
            </div>


            {/* Name + Company */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">

              <div>
                <label className={labelClass}>
                  Name *
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Company *
                </label>

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company name"
                  className={inputClass}
                />
              </div>

            </div>


            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">

              <div>
                <label className={labelClass}>
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  Phone *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass}
                />
              </div>

            </div>


            {/* City + State */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">

              <div>
                <label className={labelClass}>
                  City *
                </label>

                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="City"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>
                  State *
                </label>

                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="State"
                  className={inputClass}
                />
              </div>

            </div>


            {/* Territory */}
            <div className="mb-5">

              <label className={labelClass}>
                Territory
              </label>

              <input
                name="territory"
                value={formData.territory}
                onChange={handleChange}
                placeholder="Territory of interest"
                className={inputClass}
              />

            </div>


            {/* Message */}
            <div className="mb-7">

              <label className={labelClass}>
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your distribution reach"
                className={`${inputClass} resize-none`}
              />

            </div>


            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-charcoal text-white rounded-full font-semibold tracking-wide hover:bg-gold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Handshake className="w-5 h-5" />
              Submit Enquiry
            </motion.button>

          </motion.form>
        ) : (

          /* Success */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 text-center shadow-lg"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>

            <h3 className="text-2xl text-charcoal mb-3">
              Enquiry Sent!
            </h3>

            <p className="text-gray-600 max-w-md mx-auto">
              Our distribution team will review your details
              and get back to you.
            </p>
          </motion.div>
        )}

      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
}
