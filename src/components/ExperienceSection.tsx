'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Experience = {
  company: string;
  title: string;
  location: string;
  logo: string;
  website: string;
  period: string;
  description: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    company: 'Bank of Georgia',
    title: 'Advanced Analyst-Developer',
    location: 'Tbilisi, Georgia · Hybrid',
    logo: '/logos/bog.png',
    website: 'https://bankofgeorgia.ge',
    period: 'Oct 2020 – Present',
    description: [
      'Built SPA and PWA with React, TypeScript, and LitElement within a custom CMS.',
      'Implemented SSR with Next.js to improve SEO and performance.',
      'Integrated APIs (Node.js, Express.js, MongoDB, GraphQL) for KYC, loan, and card flows.',
      'Optimized UI with code splitting, lazy loading, and secure authentication.',
      'Developed interactive promotion pages and mentored a junior dev.',
      'Used Jira, GitLab, Figma; wrote tests with Jest and Cypress.',
      'Worked with Docker and AWS for streamlined deployment.'
    ],
    tech: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'LitElement', 'REST', 'MongoDB', 'Docker', 'Jest']
  },
  {
    company: 'Open Fiskal',
    title: 'Frontend React Developer Contractor',
    location: 'Remote',
    logo: '/logos/fiskal.png',
    website: 'https://www.openfiskal.com',
    period: 'Contract · 2024',
    description: [
      'Built fiscal compliance UI using React, TypeScript, and Shopify Polaris.',
      'Connected to PostgreSQL via Prisma for secure data management.',
      'Integrated APIs for Shopify POS and optimized performance.'
    ],
    tech: ['React', 'Shopify Polaris', 'PostgreSQL', 'Prisma']
  },
  {
    company: 'Freelance (Upwork)',
    title: 'Frontend React Developer',
    location: 'Remote',
    logo: '/logos/upwork.png',
    website: 'https://www.upwork.com/freelancers/~011d7e053295465d70',
    period: 'Contract · Various',
    description: [
      'Developed scalable React/Next.js apps with Webpack (Micro-Frontends).',
      'Used Redux, Zustand, and Context API for state management.',
      'Built data-driven UIs using React Flow, PostgreSQL, Prisma.',
      'Delivered apps with high performance and responsive design.'
    ],
    tech: ['React', 'Next.js', 'Nest.js', 'Redux', 'Zustand', 'Prisma', 'React Flow']
  },
  {
    company: 'Bank of Georgia',
    title: 'IT Quality Management Engineer',
    location: 'Tbilisi, Georgia · On-site',
    logo: '/logos/bog.png',
    website: 'https://bankofgeorgia.ge',
    period: 'Apr 2019 – Oct 2020',
    description: [
      'Black and White Box testing for internal banking systems.',
      'Prepared test cases with Jira and Zephyr.',
      'Worked with PL/SQL for test validation.',
      'Collaborated with product teams on business requirement analysis.'
    ],
    tech: ['PL/SQL', 'Jira', 'Zephyr', 'Testing']
  },
  {
    company: 'Bank of Georgia',
    title: 'IT Project Specialist',
    location: 'Tbilisi, Georgia · On-site',
    logo: '/logos/bog.png',
    website: 'https://bankofgeorgia.ge',
    period: 'Aug 2017 – Apr 2019',
    description: [
      'Managed HR software selection, demos, and onboarding.',
      'Tested and documented internal tools.',
      'Developed dashboards using ClicData, Power BI, and Tableau.',
      'Administered and extended Moodle learning platform.'
    ],
    tech: ['Moodle', 'Power BI', 'Tableau', 'ClicData']
  },
  {
    company: 'Silknet',
    title: 'IT Specialist',
    location: 'Tbilisi, Georgia · On-site',
    logo: '/logos/silknet.png',
    website: 'https://silknet.com',
    period: 'Aug 2016 – Jul 2017',
    description: [
      'Provided technical support via phone and email.',
      'Performed remote troubleshooting and diagnostics.',
      'Maintained incident logs and escalated unresolved issues.'
    ],
    tech: ['Support', 'Remote Access', 'Customer Service']
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10 px-6 py-20 bg-gray-900 text-white max-w-5xl mx-auto" id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">📁 Professional Experience</h2>

      {experiences.map((exp, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className={`flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer bg-[#1a1f2b] hover:bg-[#222736] transition-colors ${
                isOpen ? 'border-b border-gray-700' : ''
              }`}
            >
              <span className="font-semibold text-lg">{exp.title} @ {exp.company}</span>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-[#161b22] space-y-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <Image src={exp.logo} alt={exp.company} width={40} height={40} />
                      )}
                      <div>
                        <div className="text-sm text-gray-400">{exp.location}</div>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            className="text-sm text-blue-400 underline"
                          >
                            {exp.company === 'Freelance (Upwork)' ? 'upwork.com' : exp.website.replace('https://', '')}
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
