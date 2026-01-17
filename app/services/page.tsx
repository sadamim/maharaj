"use client";


import { motion } from 'framer-motion';
import { Package, Users, Gift, Sparkles, Truck, RefreshCw, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: 'Advanced Formulation',
      description: 'Our products are developed using refined cleaning technologies that ensure powerful stain removal, colour protection, and long-lasting freshness.',
      features: [
        'Optimized stain-removal performance',
        'Fabric-safe and colour-care formulas',
        'Long-lasting fragrance technology',
        'Consistent results in every wash',
      ],
      image: 'https://images.unsplash.com/photo-1607006555278-8d2de55615e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHNvYXAlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1NTIyMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Users,
      title: 'Quality-Controlled Production',
      description: 'Every batch is manufactured under strict hygiene and safety standards, with multi-step testing for consistency and performance.',
      features: [
        'Multi-stage product testing',
        'Safe & hygienic production environment',
        'Standardized ingredient measurement',
        'Batch-wise performance checks',
      ],
      image: 'https://images.unsplash.com/photo-1588546071922-7c599cdf651b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwc29hcCUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1NTIyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Gift,
      title: 'Trusted by Thousands',
      description: 'Our detergents and soaps are used daily by families across regions, valued for their reliability, affordability, and gentle care.',
      features: [
        'Gentle on clothes & skin',
        'Budget-friendly and dependable',
        'Suitable for all household needs',
        'Strong brand trust across markets',
      ],
      image: 'https://images.unsplash.com/photo-1763485955921-d3842bd90eb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2FwJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjU1MjIwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Sparkles,
      title: 'Scalable Manufacturing',
      description: 'With modern facilities and trained teams, we support high-volume production while maintaining uncompromised quality at every stage.',
      features: [
        'High-capacity machinery',
        'Efficient production workflow',
        'Consistent supply for large orders',
        'Trained workforce & expert supervision',
      ],
      image: 'https://images.unsplash.com/photo-1760614034530-a0d34463e03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBsdXh1cnl8ZW58MXx8fHwxNzY1NTIyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary shipping on orders over $75',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day satisfaction guarantee on all products',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with certified organic ingredients',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Dedicated support team ready to assist you',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/images/Servicesbanner.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-gold tracking-wider uppercase">Our Services</span>
            </div>
            <h1 className="text-white mb-6">
              Tailored Solutions for
              <br />
              Every Need
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From custom creations to bulk orders, we offer specialized services 
              designed to meet your unique requirements with the same artisan quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container-padding mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-earth rounded-2xl flex items-center justify-center shadow-lg mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-charcoal text-white rounded-full hover:bg-gold transition-colors duration-300 shadow-lg"
                  >
                    <span className="tracking-wide">Request a Quote</span>
                  </motion.button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center  mx-auto mb-16"
          >
            <h2 className="mb-6">Why Choose Shashi Soap</h2>
            <p className="text-gray-600">
              We're committed to providing exceptional service and quality at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold/10 to-earth/10 rounded-2xl flex items-center justify-center group-hover:from-gold group-hover:to-earth transition-all duration-300 shadow-md"
                >
                  <benefit.icon className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
                </motion.div>
                <h4 className="mb-3">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cream to-white">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center  mx-auto mb-16"
          >
            <h2 className="mb-6">How It Works</h2>
            <p className="text-gray-600">
              Our simple process ensures you get exactly what you need, when you need it.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Contact Us', description: 'Share your vision and requirements' },
                { step: '02', title: 'Consultation', description: 'We create a custom proposal for you' },
                { step: '03', title: 'Sample & Approval', description: 'Review samples before bulk production' },
                { step: '04', title: 'Delivery', description: 'Receive your custom products on time' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="text-6xl text-gold/20 mb-4">{item.step}</div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-gold/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gold via-earth to-gold-dark">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mx-auto text-center"
          >
            <h2 className="text-white mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
             Let’s discuss how we can support your manufacturing, bulk supply, or custom formulation needs. Our team is here to help you bring reliable, high-quality products to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-charcoal rounded-full hover:bg-cream transition-colors duration-300 shadow-xl"
              >
                <span className="tracking-wide">Explore Our Products</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <span className="tracking-wide">View Portfolio</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
