"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_wx9pjiq",      // Your Service ID
        "template_xx8173l",     // Your Template ID
        formRef.current,
        "Ntsmap_HNHHL790ii"     // Your Public Key
      );

      setStatus("Message sent successfully! I will contact you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
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

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
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
                className="w-full text-[13px] text-white/70 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
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
                className="w-full text-[13px] text-white/70 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
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
                className="w-full text-[13px] text-white/70 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
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
                className="w-full text-[13px] text-white/70 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition"
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
              className="w-full text-[16px] text-white/80 bg-[var(--brand-secondary)] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--brand-accent)] transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>

          {status && (
            <p className="text-sm mt-4 text-[var(--brand-accent)]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
