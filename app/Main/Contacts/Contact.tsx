"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-40px] space-y-10 text-[var(--foreground)]">
      
      {/* Background gradient */}

      <div className="relative max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Let's Work{" "}
          <span className="text-[var(--brand-accent)] font-bold">
            Together!
          </span>
        </h2>

        <p className="text-[var(--brand-dark-2)] mb-12">
workwithiqr@gmail.com        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Row 1 */}
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

          {/* Row 2 */}
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

          {/* Message */}
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

          {/* Button */}
          <button
            type="submit"
            className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--brand-accent)] transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}
