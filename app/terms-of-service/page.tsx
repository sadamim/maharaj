"use client";

import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.',
  },
  {
    title: '2. Use of This Website',
    body: 'This website and its content are provided for general information about Maharaj Soaps Industry Private Limited (MSIPL), our brands, products, and services. You agree to use this website only for lawful purposes.',
  },
  {
    title: '3. Product Information',
    body: 'We aim to keep product information on this website accurate and up to date. However, product availability, packaging, and specifications may change without notice. Please confirm details with us before placing an order.',
  },
  {
    title: '4. Enquiries & Applications',
    body: 'Submitting a distributor enquiry, career application, or contact form does not guarantee a partnership, employment, or response within a specific timeframe. All submissions are reviewed at our discretion.',
  },
  {
    title: '5. Intellectual Property',
    body: 'All content on this website - including the MSIPL name, SHASHI and SAVAAL brand names, logos, images, and text - is the property of Maharaj Soaps Industry Private Limited and may not be used without permission.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'MSIPL is not liable for any damages arising from your use of, or inability to use, this website or its content, to the fullest extent permitted by law.',
  },
  {
    title: '7. Changes to These Terms',
    body: 'We may update these Terms of Service from time to time. Continued use of this website after changes are posted constitutes acceptance of the updated terms.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-20 lg:py-28 bg-deep-maroon overflow-hidden">
        <div className="container-padding mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-charcoal mb-4">Terms of Service</h1>
            <p className="text-charcoal/70">Last updated: 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-padding mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed mb-10"
          >
            These Terms of Service govern your use of the Maharaj Soaps Industry Private Limited
            (&ldquo;MSIPL&rdquo;) website. Please read them carefully.
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-xl mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-xl mb-3">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:customercare@msiplgroup.com" className="text-gold hover:text-gold-dark">
                customercare@msiplgroup.com
              </a>{' '}
              or{' '}
              <a href="tel:+917353011355" className="text-gold hover:text-gold-dark">
                +91 7353011355
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
