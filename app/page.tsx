import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { SkillsSection } from '@/components/skillls-section';
import { CursorBubble } from '@/components/bubble';

export default function Home() {
  return (
    <>

      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection/>
      <ContactSection />
    <CursorBubble/>

    </>
  );
}