"use client";


import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    name: 'Products & Ingredients',
    faqs: [
      {
        question: 'Are your soaps truly all-natural?',
        answer: 'Yes! Every Shashi Soap bar is made with 100% natural, organic ingredients. We use only plant-based oils, butters, essential oils, and botanicals. No synthetic fragrances, parabens, sulfates, or harmful chemicals ever touch our formulas.',
      },
      {
        question: 'Are your products vegan and cruelty-free?',
        answer: 'Absolutely. All our products are completely vegan and never tested on animals. We work exclusively with suppliers who share our commitment to ethical, cruelty-free practices.',
      },
      {
        question: 'How long does a bar of soap typically last?',
        answer: 'With proper care (keeping it dry between uses), one bar typically lasts 4-6 weeks with daily use. Using a soap dish with drainage helps extend the life of your soap.',
      },
      {
        question: 'Can I use these soaps on sensitive skin?',
        answer: 'Our soaps are gentle and suitable for most skin types, including sensitive skin. However, if you have specific allergies or skin conditions, we recommend checking the ingredient list or consulting your dermatologist. We also offer unscented varieties for those with extra sensitivity.',
      },
      {
        question: 'What makes handmade soap different from commercial soap?',
        answer: 'Handmade cold-process soaps retain natural glycerin, which is moisturizing and beneficial for your skin. Commercial soaps often remove glycerin and add synthetic detergents. Our soaps are also made in small batches with premium ingredients and cure for 4-6 weeks for optimal quality.',
      },
    ],
  },
  {
    name: 'Orders & Shipping',
    faqs: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping within the US takes 5-7 business days. We also offer expedited shipping (2-3 days) and express shipping (1-2 days) at checkout. International orders typically arrive within 10-15 business days.',
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders over $75 within the United States. International shipping rates vary by location and are calculated at checkout.',
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can use this to monitor your package\'s journey to your doorstep.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please note that international customers are responsible for any customs duties or taxes.',
      },
      {
        question: 'What if my order arrives damaged?',
        answer: 'We take great care in packaging, but if your order arrives damaged, please contact us within 48 hours with photos. We\'ll send a replacement or issue a full refund immediately.',
      },
    ],
  },
  {
    name: 'Returns & Exchanges',
    faqs: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely happy with your purchase, you can return unused products for a full refund or exchange. Used products may be eligible for store credit on a case-by-case basis.',
      },
      {
        question: 'How do I initiate a return?',
        answer: 'Simply contact our customer service team at ustomercare@msiplgroup.com with your order number. We\'ll provide you with return instructions and a prepaid shipping label for orders over $50.',
      },
      {
        question: 'Can I exchange a product?',
        answer: 'Yes! If you\'d like to try a different scent or product, we\'re happy to arrange an exchange. Contact us within 30 days of purchase, and we\'ll take care of it.',
      },
      {
        question: 'Are gift sets returnable?',
        answer: 'Yes, unopened gift sets can be returned within 30 days. If you\'ve opened the set but are unsatisfied with a particular item, please contact us to discuss options.',
      },
    ],
  },
  {
    name: 'Custom Orders & Wholesale',
    faqs: [
      {
        question: 'Can I create a custom soap blend?',
        answer: 'Yes! We offer custom soap creation for orders of 50 bars or more. You can work with our master artisan to choose ingredients, scents, colors, and even packaging. Contact us to start the consultation process.',
      },
      {
        question: 'Do you offer wholesale pricing?',
        answer: 'Absolutely! We work with spas, hotels, boutiques, and retailers. Wholesale pricing begins at orders of 100 bars. Please contact us at wholesale@shashisoap.com for pricing tiers and our lookbook.',
      },
      {
        question: 'How long does it take to fulfill a custom order?',
        answer: 'Custom orders typically take 4-6 weeks from approval to delivery. This includes formulation, production, curing time, and shipping. Rush orders may be available for an additional fee.',
      },
      {
        question: 'Can you create soaps for wedding favors?',
        answer: 'Yes! Wedding favors are one of our specialties. We can create custom scents, colors, and packaging that match your theme. We recommend reaching out at least 2-3 months before your event.',
      },
      {
        question: 'What\'s the minimum order for private labeling?',
        answer: 'Private label services start at 200 units. This includes custom formulation, branding, and packaging design. Contact our team to discuss your specific needs and get a detailed quote.',
      },
    ],
  },
  {
    name: 'Sustainability & Ethics',
    faqs: [
      {
        question: 'How is your packaging eco-friendly?',
        answer: 'We use recyclable paper packaging, biodegradable labels, and minimal plastic. Our boxes are made from recycled materials and printed with soy-based inks. We\'re constantly working to reduce our environmental footprint.',
      },
      {
        question: 'Where do you source your ingredients?',
        answer: 'We source from certified organic suppliers and fair-trade cooperatives around the world. We prioritize ethical harvesting practices and maintain direct relationships with many of our suppliers to ensure quality and sustainability.',
      },
      {
        question: 'Do you give back to the community?',
        answer: 'Yes! We donate 2% of all profits to clean water initiatives and support local artisan programs in the regions where we source ingredients. We also partner with community organizations for workshops and education.',
      },
      {
        question: 'Are your facilities eco-friendly?',
        answer: 'Our workshop operates on renewable energy, uses water-efficient processes, and composts all organic waste. We\'re committed to minimizing our environmental impact at every stage of production.',
      },
    ],
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category =>
    category.faqs.length > 0 &&
    (selectedCategory === null || category.name === selectedCategory)
  );

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-sm text-gold tracking-wider uppercase">Help Center</span>
            </div>
            <h1 className="text-white mb-6">
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Find answers to common questions about our products, services, and policies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full text-lg border-2 border-transparent focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 lg:top-24 z-40">
        <div className="container-padding mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === null
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.name
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-cream">
        <div className="container-padding mx-auto max-w-4xl">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h2 className="mb-6">{category.name}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const faqId = `${category.name}-${faqIndex}`;
                      const isOpen = openFAQ === faqId;

                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: faqIndex * 0.05 }}
                          className="bg-white rounded-2xl shadow-md overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                            className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors group"
                          >
                            <h4 className="flex-1 group-hover:text-gold transition-colors">
                              {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center"
                            >
                              {isOpen ? (
                                <Minus className="w-4 h-4 text-gold" />
                              ) : (
                                <Plus className="w-4 h-4 text-gold" />
                              )}
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-6">
                No results found for "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-gold text-white rounded-full hover:bg-gold-dark transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gold via-earth to-gold-dark">
        <div className="container-padding mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Can't find what you're looking for? Our friendly customer service team 
              is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-charcoal rounded-full hover:bg-cream transition-colors duration-300 shadow-xl"
              >
                <span className="tracking-wide">Contact Support</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <span className="tracking-wide">Live Chat</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
