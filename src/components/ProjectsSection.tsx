"use client";
import {
  MultiAccordionSection,
  SubItem,
} from "@/components/custom/MultiAccordionSection";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// TypeScript interfaces
interface Project {
  id: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  githubUrl: string;
  content: string[];
}

interface ProjectLinksProps {
  project: Project;
  onLinkClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface ProjectTitleProps {
  project: Project;
}

// Projects data array
const projects: Project[] = [
  {
    id: "jobsden",
    title: "JobsDen",
    subtitle: "A Job Portal",
    liveUrl: "https://jobs-den.vercel.app/",
    githubUrl: "https://github.com/Dev-Reddy/JobsDen",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "fresco",
    title: "Fresco",
    subtitle: "Smart Vision Quality Control",
    githubUrl: "https://github.com/Dev-Reddy/FRESCO",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "tokenizer",
    title: "Tokenizer",
    subtitle: "Tokenizer with Encoder & Decoder",
    liveUrl: "https://tokenizer-three-ecru.vercel.app/",
    githubUrl: "https://github.com/Dev-Reddy/tokenizer",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "transl8r",
    title: "Transl8r",
    subtitle: "A Live Audio Translator",
    githubUrl: "https://github.com/Dev-Reddy/transl8r",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "prepwise",
    title: "PrepWise",
    subtitle: "AI Mock Interview Platform",
    liveUrl: "https://major-project-2-tawny.vercel.app/sign-in",
    githubUrl: "https://github.com/Dev-Reddy/major-project-2",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "socialmediaapi",
    title: "SocialMediaAPI",
    subtitle: "RESTful Backend APIs",
    githubUrl: "https://github.com/Dev-Reddy/SocialMediaAPI",
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    id: "messenger",
    title: "Messenger",
    subtitle: "A Chat App",
    liveUrl: "https://messenger-chatapp-yrnp.onrender.com/",
    githubUrl: "https://github.com/Dev-Reddy/ChatApp/tree/main",
    content: [
      "user1@test.com, 123456",
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
];

// Component to render project links
const ProjectLinks: React.FC<ProjectLinksProps> = ({
  project,
  onLinkClick,
}) => (
  <div className="flex gap-2">
    {project.liveUrl && (
      <Link
        href={project.liveUrl}
        target="_blank"
        className="hover:border-b-2 hover:border-black"
        onClick={onLinkClick}
      >
        <ExternalLink />
      </Link>
    )}
    <Link
      href={project.githubUrl}
      target="_blank"
      className="hover:border-b-2 hover:border-black"
      onClick={onLinkClick}
    >
      <Github />
    </Link>
  </div>
);

// Component to render project title
const ProjectTitle: React.FC<ProjectTitleProps> = ({ project }) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="w-full">
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between w-full">
          <div>
            <span className="font-bold">{project.title}</span> |{" "}
            {project.subtitle}
          </div>
          <ProjectLinks project={project} onLinkClick={handleLinkClick} />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="text-xl font-bold">{project.title}</div>
          <div className="text-sm">
            <ProjectLinks project={project} onLinkClick={handleLinkClick} />
          </div>
        </div>
        <div className="text-lg">{project.subtitle}</div>
      </div>
    </div>
  );
};

// Generate project section items from projects array
const projectSectionItems: SubItem[] = projects.map((project: Project) => ({
  title: <ProjectTitle project={project} />,
  content: project.content,
}));

export function ProjectsSection(): ReactNode {
  return (
    <div className="w-full mx-auto mt-8">
      <MultiAccordionSection
        sectionTitle="Projects"
        items={projectSectionItems}
      />
    </div>
  );
}
