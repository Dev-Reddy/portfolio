import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactMeForm } from "./custom/ContactMeForm";

export function ContactMeSection() {
  return (
    <Accordion
      type="multiple"
      className="w-full border-b font-open-sans mx-auto mt-8"
    >
      <AccordionItem value={"Contactme".toLowerCase().replace(/\s+/g, "-")}>
        <AccordionTrigger className="text-3xl font-bold text-black hover:opacity-80 cursor-pointer">
          Contact Me
        </AccordionTrigger>
        <AccordionContent className="">
          <ContactMeForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
