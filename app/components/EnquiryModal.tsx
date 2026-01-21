"use client";

import { motion } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

export function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
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
        name: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
      });
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            Quick Enquiry
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm
                    focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@email.com"
                  className="mt-1 w-full rounded-lg border px-3 py-2 text-sm
                    focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            {/* Company */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Company / Shop Name
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your business name"
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm
                  focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us how we can help you..."
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm resize-none
                  focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2
                  rounded-lg bg-gold px-5 py-2.5 text-sm font-medium text-white
                  hover:opacity-90 transition"
              >
                <Send className="w-4 h-4" />
                Send Enquiry
              </button>
            </div>
          </form>
        ) : (
          <div className="py-14 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
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
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              Enquiry Sent Successfully
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              We’ll contact you shortly.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
