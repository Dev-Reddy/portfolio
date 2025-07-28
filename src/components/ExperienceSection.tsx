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
            <div className="text-xl">
              <span className="font-bold">Auror</span> | Indie Hacker
            </div>
            <div className="text-sm md:text-lg">Jul &apos;25 - Present</div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl font-bold">Auror</div>
            <div className="text-sm md:text-lg">Jul &apos;25 - Present</div>
          </div>
          <div className="text-lg">Indie Hacker</div>
        </div>
      </div>
    ),
    content: [
      "• Currently building the MVP for an AI-powered mock interview platform integrating real-time voice agents",
      "• Users can choose from featured curated interviews of big MNCs to Startups",
      "• Users can also create their custom interview to practice for any job interview",
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
            <div className="text-xl">
              <span className="font-bold">Swayatt</span> | Full Stack Developer
              Intern
            </div>
            <div className="text-sm md:text-lg">
              Mar &apos;25 - Jun &apos;25
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl font-bold">Swayatt</div>
            <div className="text-sm">Mar &apos;25 - Jun &apos;25</div>
          </div>
          <div className="text-lg">Full Stack Developer Intern</div>
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
      "• Led the development of HMI (Human-Machine Interface) monitoring system for BrahMos Aerospace that processes 10+ machine metrics/second from industrial sensors using InfluxDB and MERN stack with Socket.IO, reducing data latency to <200ms while optimizing server CPU load by over 90%.",
      "• Building the company’s new website using Next.js 14 and TypeScript, implementing SSR/SSG rendering and MongoDB-integrated forms, achieving 90+ PageSpeed scores in initial tests.",
      "• Built an email notification system for CMMS (Computerized Maintenance Management System) processing 1K+ daily alerts across 7 modules and opt-in controls reducing notification overload by 25%.",
      "• Engineered CMMS-HMI integration using MongoDB change streams and RBAC-controlled Socket.IO rooms, achieving <200ms cross-system synchronization with 100% data consistency.",
      "• Architected downtime resolution system that auto-triggers HMI-blocking pages for outages >1 hour, enforcing 90% incident documentation compliance and reducing unresolved downtime by 80%.",
      "• Designed and shipped end-to-end request-to-work-order workflow with state transition modeling and RBAC views to handle 200+ monthly tickets, cutting closure time by 30% and securing 2 new client acquisitions.",
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
