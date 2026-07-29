"use client";

import { motion } from "framer-motion";
import { X, Send, MessageSquare, CheckCircle2 } from "lucide-react";
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
        message: "",
      });
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!open) return null;

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-[#e4d7c9] bg-[#fffaf3] px-3.5 py-2.5 text-sm text-[#3a2226] placeholder:text-[#b7a8a0] outline-none transition focus:border-[#b9773c] focus:ring-2 focus:ring-[#b9773c]/25";
  const labelClass =
    "text-[11px] font-bold uppercase tracking-[0.08em] text-[#24485e]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#1d3a4d]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(43,9,13,0.45)] ring-1 ring-[#24485e]/10"
      >
        {/* Branded header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#cbdff0] to-[#dce9f5] px-6 py-5 text-[#24485e]">
          {/* soft decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/40 blur-2xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 ring-1 ring-[#24485e]/15">
                <MessageSquare className="h-5 w-5 text-[#2f6081]" />
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight text-[#24485e]">Quick Enquiry</h3>
                <p className="text-xs text-[#4b7690]">
                  We&apos;d love to hear from you.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close enquiry form"
              className="rounded-full p-1.5 text-[#24485e]/70 transition hover:bg-white/50 hover:text-[#24485e]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {/* accent line */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#5b8299] via-[#7fb0cc] to-transparent" />
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            {/* Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us how we can help you..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#dce9f5] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#24485e] shadow-[0_10px_24px_rgba(36,72,94,0.30)] transition hover:-translate-y-0.5 hover:bg-[#c3daed] hover:shadow-[0_14px_30px_rgba(36,72,94,0.45)]"
              >
                <Send className="h-4 w-4" />
                Send Enquiry
              </button>
            </div>
          </form>
        ) : (
          <div className="px-6 py-14 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#f6e2d4]">
              <CheckCircle2 className="h-11 w-11 text-[#24485e]" />
            </div>
            <h4 className="text-lg font-bold text-[#3a2226]">
              Enquiry Sent Successfully
            </h4>
            <p className="mt-1 text-sm text-[#6e5f5a]">
              We&apos;ll contact you shortly.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
