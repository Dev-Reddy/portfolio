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
      "• Developed a job portal featuring advanced job search, streamlined application process, robust authentication and CRUD operations for recruiters to manage job postings.",
      "• Enhanced performance with pagination, reducing page load times by 30%, and implemented OTP verification to prevent bot applications.",
      "• Designed automated system to send confirmation emails in under 1 second to applicants for seamless experience.",
      "• Built applicant management system with resume uploads and recruiter dashboard displaying candidate information.",
    ],
  },
  {
    id: "fresco",
    title: "Fresco",
    subtitle: "Smart Vision Quality Control",
    githubUrl: "https://github.com/Dev-Reddy/FRESCO",
    content: [
      "• Built for Flipkart Grid in a 2-person team, this AI-powered app analyzes the freshness of 14 fruits and vegetables and extracts product information using AWS Textract OCR and OpenAI, achieving 90% accuracy in text extraction.",
      "• Fine-tuned MobileNet model on 300K images, achieving 99.79% inference accuracy with <500ms processing time.",
      "• Enabled real-time analysis using fine-tuned models and OCR with WebSocket, achieving <200ms response time.",
    ],
  },
  {
    id: "tokenizer",
    title: "Tokenizer",
    subtitle: "Tokenizer with Encoder & Decoder",
    liveUrl: "https://tokenizer-three-ecru.vercel.app/",
    githubUrl: "https://github.com/Dev-Reddy/tokenizer",
    content: [
      "A tokenizer with encoding and decoding capabilities built from scratch using pure TypeScript without any third-party libraries.",
      "• Tokenizes English text into meaningful parts — words, digits, punctuation, etc.",
      "• Encodes tokens into numbers using a custom JSON vocabulary (1M+ entries)",
      "• Decodes numbers back to text — with visual animations",
      "• 100% client-side — no backend involved",
    ],
  },
  {
    id: "transl8r",
    title: "Transl8r",
    subtitle: "A Live Audio Translator",
    githubUrl: "https://github.com/Dev-Reddy/transl8r",
    content: [
      "• Built a multilingual real-time speech translation app, supporting 25 languages with 90% translation accuracy.",
      "• Reduced response time from 60s to <5s by integrating AssemblyAI, GTTS & OpenAI for translation.",
    ],
  },
  {
    id: "prepwise",
    title: "PrepWise",
    subtitle: "AI Mock Interview Platform",
    liveUrl: "https://major-project-2-tawny.vercel.app/sign-in",
    githubUrl: "https://github.com/Dev-Reddy/major-project-2",
    content: [
      "• Built PrepWise, an AI-powered mock interview platform that simulates real-time interviews using Vapi voice agents and Gemini AI.",
      "• Integrated voice-based conversations, auto-scoring, and detailed feedback across communication, technical, and problem-solving skills.",
    ],
  },
  {
    id: "socialmediaapi",
    title: "SocialMediaAPI",
    subtitle: "RESTful Backend APIs",
    githubUrl: "https://github.com/Dev-Reddy/SocialMediaAPI",
    content: [
      "• Built a social media backend API with features like posts, likes, comments, friends etc.",
      "Integrated JWT authenticaton with features like all-device logout and OTP-secured password resets, enhancing security and scalability.",
      "• Integrated Winston for structured logging and Swagger for comprehensive API documentation.",
    ],
  },
  {
    id: "messenger",
    title: "Messenger",
    subtitle: "A Chat App",
    liveUrl: "https://messenger-chatapp-yrnp.onrender.com/",
    githubUrl: "https://github.com/Dev-Reddy/ChatApp/tree/main",
    content: [
      "• Test Id: user1@test.com",
      "• Test Password: 123456",
      "• Developed a full-stack chat app via Daisy UI, Socket.io, JWT authentication, & bcrypt encryption.",
      "• Integrated Cloudinary for image uploads & sharing in <1 second, enhancing the user experience.",
      "• Implemented Zustand for state management, ensuring minimal re-renders and optimized performance.",
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
