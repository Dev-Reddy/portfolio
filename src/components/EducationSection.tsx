import {
  MultiAccordionSection,
  SubItem,
} from "@/components/custom/MultiAccordionSection";

const educationSectionItems: SubItem[] = [
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
              <span className="font-bold">B. Tech in CSE</span> | (8.22 CGPA)
            </div>
            <div className="text-sm md:text-lg">
              Nov &apos;21 - Jun &apos;25
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="text-xl font-bold">B. Tech in CSE</div>
            <div className="text-sm">Nov &apos;21 - Jun &apos;25</div>
          </div>
          <div className="text-lg">(8.22 CGPA)</div>
        </div>
      </div>
    ),
    content: ["University: Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)"],
  },
];

export function EducationSection() {
  return (
    <div className="w-full mx-auto mt-8 ">
      <MultiAccordionSection
        sectionTitle="Education"
        items={educationSectionItems}
      />
    </div>
  );
}
