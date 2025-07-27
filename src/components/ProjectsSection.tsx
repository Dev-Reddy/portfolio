"use client";
import {
  MultiAccordionSection,
  SubItem,
} from "@/components/custom/MultiAccordionSection";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projectSectionItems: SubItem[] = [
  // Job Den
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>JobsDen: A Job Portal</div>
        <div className="flex gap-2">
          <Link
            href="https://jobs-den.vercel.app/"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link>
          <Link
            href="https://github.com/Dev-Reddy/JobsDen"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  // Fresco
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>Fresco: Smart Vision Quality Control</div>
        <div className="flex gap-2">
          {/* <Link
            href="https://jobs-den.vercel.app/"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link> */}
          <Link
            href="https://github.com/Dev-Reddy/FRESCO"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  // Tokenizer
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>Tokenizer: Tokenizer with Encoder & Decoder</div>
        <div className="flex gap-2">
          <Link
            href="https://tokenizer-three-ecru.vercel.app/"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link>
          <Link
            href="https://github.com/Dev-Reddy/tokenizer"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  // Transl8r
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>Transl8r: A Live Audio Translator</div>
        <div className="flex gap-2">
          {/* <Link
            href="https://jobs-den.vercel.app/"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link> */}
          <Link
            href="https://github.com/Dev-Reddy/transl8r"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  // PrepWise
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>PrepWise: AI Mock Interview Platform</div>
        <div className="flex gap-2">
          <Link
            href="https://major-project-2-tawny.vercel.app/sign-in"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link>
          <Link
            href="https://github.com/Dev-Reddy/major-project-2"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },

  // Social Media API
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>SocialMediaAPI: RESTful Backend APIs</div>
        <div className="flex gap-2">
          {/* <Link
            href="https://major-project-2-tawny.vercel.app/sign-in"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link> */}
          <Link
            href="https://github.com/Dev-Reddy/SocialMediaAPI"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  // Messenger
  {
    title: (
      <div className="flex flex-row justify-between w-full">
        <div>Messenger: A Chat App</div>
        <div className="flex gap-2">
          <Link
            href="https://messenger-chatapp-yrnp.onrender.com/"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <ExternalLink />{" "}
          </Link>
          <Link
            href="https://github.com/Dev-Reddy/ChatApp/tree/main"
            target="_blank"
            className="hover:border-b-2 hover:border-black"
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              event.stopPropagation();
            }}
          >
            {" "}
            <Github />{" "}
          </Link>
        </div>
      </div>
    ),
    content: [
      "user1@test.com, 123456",
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
];

export function ProjectsSection() {
  return (
    <div className="w-full mx-auto mt-8 ">
      <MultiAccordionSection
        sectionTitle="Projects"
        items={projectSectionItems}
      />
    </div>
  );
}
