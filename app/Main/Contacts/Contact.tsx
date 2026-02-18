"use client";

import { useState } from "react";

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-12 mt-[-70px] ml-0 md:ml-[-60px] lg:ml-[-30px]"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          LET'S WORK
          <br />
          <span className="text-[var(--brand-dark-3)]">TOGETHER</span>
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-16 space-y-8"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-[var(--brand-secondary)] text-white outline-none focus:ring-2 focus:ring-[var(--brand-accent)] transition"
              />
            </div>

            <div>
              <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg px-4 py-3 bg-[var(--brand-secondary)] text-white outline-none focus:ring-2 focus:ring-[var(--brand-accent)] transition"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
              Budget
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 bg-[var(--brand-secondary)] text-white outline-none focus:ring-2 focus:ring-[var(--brand-accent)] transition"
            >
              <option value="">Select...</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000+">$5,000+</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-[var(--brand-dark-3)] block mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 bg-[var(--brand-secondary)] text-white outline-none focus:ring-2 focus:ring-[var(--brand-accent)] transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="    w-full
          py-3
          rounded-xl
          bg-primary
          hover:opacity-90
          transition
          text-foreground
          font-semibold
          text-sm sm:text-base"
            style={{
              backgroundColor: "var(--brand-accent)",
              color: "#111",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
