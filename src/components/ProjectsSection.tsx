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
        My Work
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-20">
        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">Contributions</h3>
          {contributionProjects.map(renderProjectCard)}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">Personal Projects</h3>
          {personalProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
}

const personalProjects = [
  {
    title: 'JD Research (AI Agent)',
    description: 'An AI-powered tool to analyze job descriptions using LangChain and OpenAI. Supports fast, contextual research for job seekers and hiring teams.',
    image: '/projects/jd.png',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'LangChain', 'Tailwind CSS', 'AI Agent'],
    liveUrl: 'https://jd-research.vercel.app',
    codeUrl: 'https://github.com/takoalania/jd-research'
  },
  {
    title: 'Task Management System',
    description: 'A real-time Kanban board built with React and TypeScript. It lets users manage tasks by dragging cards across columns and supports inline editing, dynamic column creation, and persistent state.',
    image: '/projects/task-management.png',
    tech: ['React', 'TypeScript', 'Websockets', 'Jest', 'Testing Library'],
    liveUrl: 'https://kanban-board-xi-ivory.vercel.app',
    codeUrl: 'https://github.com/takoalania/kanban-board'
  },
  {
    title: 'Public Holidays App',
    description: 'Displays public holidays by country and year using the OpenHolidays API. Built with React Query and styled using PaperCSS.',
    image: '/projects/calendar.png',
    tech: ['React', 'TypeScript', 'React Query', 'PaperCSS', 'REST API', 'Jest', 'Testing Library'],
    liveUrl: 'https://public-holidays-app-flax.vercel.app',
    codeUrl: 'https://github.com/takoalania/public-holidays-app'
  },
  {
    title: 'Fun Translations App',
    description: 'A playful language translator that uses the Fun Translations API. Supports Pirate, Yoda, Minion, and more. Built with React.',
    image: '/projects/translate.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Fun Translations API', 'REST'],
    liveUrl: 'https://fun-translations-sigma.vercel.app/translate',
    codeUrl: 'https://github.com/takoalania/fun-translations'
  },
  {
    title: 'Todo App with useLocalStorage',
    description: 'A clean and responsive Todo app built with React and TypeScript. Features a reusable custom hook for localStorage persistence and full test coverage using Vitest and React Testing Library.',
    image: '/projects/todo.png',
    tech: ['React', 'TypeScript', 'Vite', 'Vitest', 'Testing Library', 'Custom Hook', 'localStorage'],
    liveUrl: 'https://todo-app-eosin-eta-46.vercel.app',
    codeUrl: 'https://github.com/takoalania/todo-app'
  },
  {
    title: 'Memory Game',
    description: 'A card-matching memory game built with React and TypeScript. Features card flip animations, shuffling using Lodash, win detection, and restart functionality with a polished modal UI.',
    image: '/projects/memory.png',
    tech: ['React', 'TypeScript', 'Lodash', 'UUID', 'CSS Animations'],
    liveUrl: 'https://memory-game-app-theta.vercel.app',
    codeUrl: 'https://github.com/takoalania/memory-game-app'
  },
  {
    title: 'SpaceX Launch Tracker',
    description: 'Browse and search past and upcoming SpaceX launches. Powered by GraphQL and styled with Tailwind. Includes pagination and accessibility testing.',
    image: '/projects/spaceX.png',
    tech: ['React', 'TypeScript', 'GraphQL', 'SpaceX API', 'Tailwind CSS', 'Pagination', 'Testing Library'],
    liveUrl: 'https://space-x-launches-g6yd.vercel.app/',
    codeUrl: 'https://github.com/takoalania/SpaceX-launches'
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
  },
  {
    title: 'Accordion App',
    description: 'A minimal, accessible accordion UI component built with React and Tailwind CSS. Designed for reuse and clean animation.',
    image: '/projects/accordion.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Component Design'],
    liveUrl: 'https://accordion-app-956v.vercel.app/',
    codeUrl: 'https://github.com/takoalania/accordion-app'
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
