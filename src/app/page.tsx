import { ContactMeSection } from "@/components/ContactMeSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import Header from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center my-8 p-4">
      {/* Header */}
      <Header />
      {/* Experience */}
      <ExperienceSection />
      {/* Projects */}
      <ProjectsSection />
      {/* Education */}
      <EducationSection />
      {/* Testimonials */}
      <TestimonialSection />
      {/* Contact Me */}
      <ContactMeSection />
    </div>
  );
}
