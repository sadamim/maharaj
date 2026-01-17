import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anita Sharma',
    role: 'Homemaker, Bengaluru',
    content:
      'I started using Maharaj soaps after my kids developed skin sensitivity. Five years later, we still haven’t switched. The soaps feel gentle, smell natural, and give me peace of mind every day.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Working Professional',
    content:
      'After long workdays, I look for products that are simple and effective. Maharaj’s herbal soaps do exactly that — no harsh feel, no overpowering fragrance, just clean and refreshing.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 3,
    name: 'Sneha Joshi',
    role: 'Fitness Enthusiast',
    content:
      'I’m very particular about what touches my skin. Maharaj soaps leave my skin feeling fresh and hydrated without dryness. It’s become a small but important part of my daily routine.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 4,
    name: 'Arjun Patel',
    role: 'Hospitality Business Owner',
    content:
      'We introduced Maharaj soaps across our hotel properties, and guests noticed the change immediately. The feedback has been genuinely positive, especially about fragrance and skin comfort.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
  },
  {
    id: 5,
    name: 'Meena Kaur',
    role: 'Mother & Homemaker',
    content:
      'From elders to kids, everyone at home uses Maharaj soap. It feels reassuring to use a product that’s affordable, reliable, and proudly made in India.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, 5000); // 5 seconds

  return () => clearInterval(interval); // cleanup
}, []);

  return (
    <section className="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-padding mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-4">
            <span className="text-sm text-white tracking-wider uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="mb-6 text-white">What Our Customers Say</h2>
          <p className="text-gray-300">
            Join thousands of satisfied customers who have elevated their daily rituals with Shashi Soap.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8">
                “{testimonials[activeIndex].content}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
               
                <div>
                  <div className="text-white mb-1">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-white">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
       {/* Dots Pagination */}
<div className="flex justify-center gap-3 mt-8">
  {testimonials.map((_, index) => (
    <motion.button
      key={index}
      onClick={() => setActiveIndex(index)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className={`h-2 rounded-full transition-all duration-300 ${
        activeIndex === index
          ? 'bg-white w-6 opacity-100'
          : 'bg-white w-2 opacity-50 hover:opacity-80'
      }`}
      aria-label={`Go to testimonial ${index + 1}`}
    />
  ))}
</div>


        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10"
        >
          {[
            { value: '50K+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '15+', label: 'Cities Delivery' },
            { value: '100%', label: 'Natural Ingredients' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
