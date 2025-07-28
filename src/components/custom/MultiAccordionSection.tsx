import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Link from "next/link";

export type SubItem = {
  title: string | React.ReactNode; // Changed from 'string' to 'string | React.ReactNode'
  content: (string | React.ReactNode)[]; // Changed from 'JSX.Element' to 'React.ReactNode'
};

export type SectionProps = {
  sectionTitle: string;
  items: SubItem[];
};

export function MultiAccordionSection({ sectionTitle, items }: SectionProps) {
  return (
    <Accordion type="multiple" className="w-full border-b font-open-sans">
      <AccordionItem value={sectionTitle.toLowerCase().replace(/\s+/g, "-")}>
        <AccordionTrigger className="text-3xl font-bold text-black hover:opacity-80 cursor-pointer">
          {sectionTitle}
        </AccordionTrigger>
        <AccordionContent className="">
          <Accordion type="multiple" className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`${sectionTitle}-${index}`}
                className="px-4"
              >
                <AccordionTrigger className="text-xl text-black cursor-pointer">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  {item.content.map((point, i) => (
                    <div key={i}>
                      {typeof point === "string" ? (
                        <p className="font-semibold text-justify">{point}</p>
                      ) : (
                        point
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
