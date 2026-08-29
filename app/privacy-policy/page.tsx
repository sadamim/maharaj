"use client";

import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you use our website - including our contact, enquiry, distributor, and career forms - we may collect information you provide directly, such as your name, email address, phone number, city, state, company name, and any message or resume you submit.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use the information you provide to respond to your enquiries, process distributor and career applications, and improve our products and services. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Cookies & Website Data',
    body: 'Our website may use cookies and similar technologies to remember your preferences and understand how visitors use our site, helping us improve your experience.',
  },
  {
    title: '4. Data Sharing',
    body: 'We may share information with trusted service providers who help us operate our website and business (such as hosting and email providers), and only to the extent necessary for them to perform their services.',
  },
  {
    title: '5. Data Security',
    body: 'We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Your Choices',
    body: 'You may contact us at any time to ask what information we hold about you, or to request that it be corrected or removed, using the details below.',
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page.',
  },
];

export default function PrivacyPolicyPage() {
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
            <h1 className="text-charcoal mb-4">Privacy Policy</h1>
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
            Maharaj Soaps Industry Private Limited (&ldquo;MSIPL&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains what information
            we collect through this website and how we use it.
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
              If you have any questions about this Privacy Policy, please contact us at{' '}
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
