"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        "service_wx9pjiq",      // Service ID Added
        "template_0tqfilo",     // Email Tamplate ID Added
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          budget: formData.budget,
          message: formData.message,
        },
        "Ntsmap_HNHHL790ii"      // My public key
      );

      setSuccess("Message sent successfully! I will contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-40px] space-y-10 text-[var(--foreground)]">
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Let's Work{" "}
          <span className="text-[var(--brand-accent)] font-bold">
            Together!
          </span>
        </h2>

        <p className="text-[var(--brand-dark-2)] mb-12">
          workwithiqr@gmail.com
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                FULL NAME *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full text-[13px] text-white/50 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-[13px] text-white/50 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                PHONE (optional)
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full text-[13px] text-white/50 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>

            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                YOUR BUDGET (optional)
              </label>
              <input
                type="text"
                name="budget"
                placeholder="Your budget range for the project"
                value={formData.budget}
                onChange={handleChange}
                className="w-full text-[13px] text-white/60 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
              MESSAGE *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full text-[18px] bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--brand-accent)] transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>

          {success && (
            <p className="text-sm mt-4 text-[var(--brand-accent)]">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
