'use client';

import { usePrefersReducedMotion } from '../helpers/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};


export default function ProjectsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const renderProjectCard = (project: any, index: number) => {
    const Wrapper = prefersReducedMotion ? 'div' : motion.div;

    return (
      <Wrapper
        key={index}
        {...(!prefersReducedMotion && {
          initial: 'hidden',
          whileInView: 'show',
          viewport: { once: true, amount: 0.4 },
          variants: fadeIn
        })}
        className="grid md:grid-cols-2 gap-8 items-center mb-16"
      >
        <div className="w-full h-60 bg-gray-800 rounded-lg overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-sm"
              >
                Visit Site
              </a>
            )}
            {project.codeUrl && (
              <Link
                href={project.codeUrl}
                target="_blank"
                className="border border-gray-500 hover:bg-gray-800 transition px-4 py-2 rounded text-sm"
              >
                View Code
              </Link>
            )}
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <section id="projects" className="relative z-10 px-6 py-20 bg-[#0c0f13] text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        🛠 My Work
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-20">
        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">💼 Contributions</h3>
          {contributionProjects.map(renderProjectCard)}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">🧪 Personal Projects</h3>
          {personalProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
}

const personalProjects = [
  {
    title: 'Kanban App',
    description: 'A simple and responsive Kanban board...',
    image: '/projects/kanban.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://kanban-app-lake-two.vercel.app',
    codeUrl: 'https://github.com/takoalania/Kanban-App'
  },
  {
    title: 'GIF Explorer',
    description: 'A Giphy API-integrated app...',
    image: '/projects/gif.png',
    tech: ['React', 'TypeScript', 'REST API'],
    liveUrl: 'https://gif-explorer-theta.vercel.app',
    codeUrl: 'https://github.com/takoalania/gif-explorer'
  },
  {
    title: 'Habit Tracker',
    description: 'A clean, minimalistic app for tracking habits...',
    image: '/projects/habit.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://habit-tracker-wheat-one.vercel.app',
    codeUrl: 'https://github.com/takoalania/habit-tracker'
  },
  {
    title: 'Report Structure App',
    description: 'A collapsible, dynamic editor...',
    image: '/projects/report.png',
    tech: ['React', 'TypeScript', 'Styled Components'],
    liveUrl: 'https://report-structure-app.vercel.app',
    codeUrl: 'https://github.com/takoalania/report-structure-app'
  }
];

const contributionProjects = [
  {
    title: 'Bank of Georgia – Retail Banking',
    description: 'Modern and responsive public site for BoG...',
    image: '/projects/bog.png',
    tech: ['LitElement', 'Node.js', 'JavaScript'],
    liveUrl: 'https://bankofgeorgia.ge/en/retail/main'
  },
  {
    title: 'SOLO Banking Portal',
    description: 'Premium banking site for SOLO...',
    image: '/projects/solo.png',
    tech: ['LitElement', 'Node.js', 'JavaScript'],
    liveUrl: 'https://solo.ge/en/solo'
  },
  {
    title: 'BoG – Conditions Portal',
    description: 'A portal showcasing terms for transparency...',
    image: '/projects/conditions.png',
    tech: ['LitElement', 'Node.js', 'JavaScript'],
    liveUrl: 'https://conditions.bog.ge/en/main'
  },
  {
    title: 'BoG – Research Portal',
    description: 'Investor and analyst hub...',
    image: '/projects/research.png',
    tech: ['LitElement', 'Node.js', 'JavaScript'],
    liveUrl: 'https://research.bog.ge/en/research/main'
  },
  {
    title: 'BoG Design System',
    description: 'Design system for BoG’s digital products...',
    image: '/projects/design.png',
    tech: ['LitElement', 'Node.js', 'JavaScript'],
    liveUrl: 'https://bog.design/en'
  },
  {
    title: 'Open Fiskal (Shopify App)',
    description: 'Fiscal integration for Shopify POS...',
    image: '/projects/fiskal.png',
    tech: ['React', 'TypeScript', 'Shopify Polaris', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://www.openfiskal.com/'
  }
];
