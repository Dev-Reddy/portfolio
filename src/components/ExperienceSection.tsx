import {
  MultiAccordionSection,
  SubItem,
} from "@/components/custom/MultiAccordionSection";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experienceSectionItems: SubItem[] = [
  {
    title: (
      // <div className="flex flex-row justify-between w-full items-center">
      //   <div className="text-xl">Auror | Indie Hacker</div>
      //   <div className="text-sm md:text-lg">Jul &apos;25 - Present</div>
      // </div>
      <div className="w-full">
        <div className="hidden md:block">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl">Auror | Indie Hacker</div>
            <div className="text-sm md:text-lg">Jul &apos;25 - Present</div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl">Auror</div>
            <div className="text-sm md:text-lg">Jul &apos;25 - Present</div>
          </div>
          <div className="text-lg font-bold">Indie Hacker</div>
        </div>
      </div>
    ),
    content: [
      "Built MVP for an AI-powered mock interview platform",
      "Integrated real-time feedback, scoring, and analytics",
      "Built with Next.js, PostgreSQL, Supabase, Python, and LLMs",
    ],
  },
  {
    title: (
      // <div className="flex flex-row justify-between w-full">
      //   <div className="text-lg md:text-xl">
      //     Swayatt | Full Stack Developer Intern
      //   </div>
      //   <div className="text-sm md:text-lg w-1/2">
      //     Mar &apos;25 - Jun &apos;25
      //   </div>
      // </div>
      <div className="w-full">
        <div className="hidden md:block">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl">Swayatt | Full Stack Developer Intern</div>
            <div className="text-sm md:text-lg">
              Mar &apos;25 - Jun &apos;25
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl">Swayatt</div>
            <div className="text-sm md:text-lg">
              Mar &apos;25 - Jun &apos;25
            </div>
          </div>
          <div className="text-lg font-bold">Full Stack Developer Intern</div>
        </div>
      </div>
    ),
    content: [
      <Link
        key="website"
        href="https://www.swayatt.com"
        target="_blank"
        className="hover:text-black border-b border-black hover:border-b-2 mb-2 pb-1 flex items-center gap-2 w-fit"
      >
        Visit Website <ExternalLink className="w-4 h-4" />
      </Link>,
      "Created internal admin dashboards using React",
      "Reduced API response time by optimizing backend routes",
      "Worked closely with product team to ship features quickly",
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className="w-full mx-auto mt-8 ">
      <MultiAccordionSection
        sectionTitle="Experience"
        items={experienceSectionItems}
      />
    </div>
  );
}
