// components/ContactSection.tsx
'use client';

import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 bg-[#111827] text-white pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">📬 Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out for opportunities, collaboration ideas or freelance projects.
        </p>

        <form
          className="space-y-6"
          action="https://formspree.io/f/mvgqareg"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6 text-2xl">
          <a href="https://github.com/takoalania" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tako-alania/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="tel:+491234567890" className="hover:text-blue-500 transition">
            <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
}
