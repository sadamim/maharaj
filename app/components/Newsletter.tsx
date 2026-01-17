import { motion } from 'framer-motion';
import { Mail, Gift } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-gold via-earth to-gold-dark rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
              >
                <Gift className="w-8 h-8" />
              </motion.div>

              <h2 className="text-white mb-4">
                Join Our Exclusive Club
              </h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Subscribe to receive special offers, beauty tips, and be the first to know 
                about new product launches. Plus, get 15% off your first order!
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Exclusive discounts & early access',
                  'Expert skincare tips & tutorials',
                  'Monthly giveaways & surprises',
                  'Free shipping on your birthday',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-gold to-earth text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="tracking-wide">Get 15% Off Now</span>
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to receive marketing emails. 
                    Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl text-charcoal mb-3">Welcome Aboard!</h3>
                  <p className="text-gray-600">
                    Check your inbox for your exclusive 15% discount code.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
