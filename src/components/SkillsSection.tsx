'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiDocker } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 bg-[#0d1117] text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        🧠 My Expertise
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend */}
        <motion.div
          className="bg-[#161b22] p-6 rounded-lg shadow-lg will-change-transform cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaReact className="text-blue-400" /> Frontend
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>React / Next.js / LitElement</li>
            <li>TypeScript / JavaScript</li>
            <li>Tailwind CSS / Polaris</li>
            <li>Redux / Zustand</li>
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="bg-[#161b22] p-6 rounded-lg shadow-lg will-change-transform cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaNodeJs className="text-green-400" /> Backend
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Node.js / Express / NestJS (TypeORM)</li>
            <li>REST / GraphQL APIs</li>
            <li>Prisma / PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>

        {/* Tools & Testing */}
        <motion.div
          className="bg-[#161b22] p-6 rounded-lg shadow-lg will-change-transform cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FaTools className="text-pink-400" /> Tools & Testing
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1">
            <li>Docker / Git / GitLab</li>
            <li>CI/CD / Vercel / Figma</li>
            <li>Jest / Cypress / Storybook</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
