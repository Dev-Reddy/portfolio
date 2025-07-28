import {
  MultiAccordionSection,
  SubItem,
} from "@/components/custom/MultiAccordionSection";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const testimonialSectionItems: SubItem[] = [
  {
    title: (
      <div className="w-full">
        <div className="hidden md:block">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl">
              <span className="font-bold">Mr. Sunny Vedwal</span> | CTO @
              Swayatt Drishtigochar
            </div>
            <div className="text-sm md:text-lg"></div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl font-bold">Mr. Sunny Vedwal</div>
            {/* <div className="text-sm md:text-lg">
              Nov &apos;21 - Jun &apos;25
            </div> */}
          </div>
          <div className="text-lg">CTO @ Swayatt Drishtigochar</div>
        </div>
      </div>
    ),
    content: [
      <div key="R1" className="text-justify font-semibold">
        &ldquo;I had the pleasure of working closely with Dev, a highly skilled
        and dependable MERN stack developer, and I can confidently say he is one
        of the most resourceful and proactive developers I&apos;ve worked with.
        <br />
        <br />
        Dev brings a strong command of MongoDB, Express.js, React, and Node.js,
        and consistently delivers clean, scalable, and well-documented code.
        Whether it&apos;s building full-stack web applications from scratch or
        optimising existing codebases for performance and maintainability, Dev
        approaches every challenge with a problem-solving mindset and a positive
        attitude.
        <br />
        <br />
        What truly sets Dev apart is his collaborative spirit and communication
        skills. He&apos;s not just technically sharp — he&apos;s also a great
        team player who listens actively, gives thoughtful feedback, and is
        always willing to mentor others or step up when deadlines are tight.
        <br />
        <br />
        If you&apos;re looking for a developer who combines technical depth,
        creative thinking, and reliability, I highly recommend Dev. Any team
        would be lucky to have him!&rdquo;
      </div>,
      <Link
        href="https://www.linkedin.com/in/devreddy07/#recommendations"
        target="_blank"
        key="R2"
        className="hover:text-black border-b border-black hover:border-b-2 my-2 pb-1 flex items-center gap-2 w-fit font-bold"
      >
        See on LinkedIn <ExternalLink className="h-4 w-4" strokeWidth={2} />
      </Link>,
    ],
  },
];

export function TestimonialSection() {
  return (
    <div className="w-full mx-auto mt-8 ">
      <MultiAccordionSection
        sectionTitle="Testimonials"
        items={testimonialSectionItems}
      />
    </div>
  );
}
