import { BackToTop } from './components/BackToTop';
import { BokehBackground } from './components/BokehBackground';
import { TopNavbar } from './components/TopNavbar';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { InfoSection } from './sections/InfoSection';
import { PersonalSection } from './sections/PersonalSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StacksSection } from './sections/StacksSection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-gradient-to-br from-primary/35 via-secondary/15 to-black"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(0,53,47,0.40),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(0,77,68,0.30),transparent_45%),radial-gradient(circle_at_30%_85%,rgba(0,53,47,0.22),transparent_40%)]"
      />

      <BokehBackground />

      <TopNavbar />

      <main className="relative mx-auto max-w-screen-xl px-6 pb-10 pt-28 sm:pt-32">
        <PersonalSection />
        <div className="h-10" />
        <InfoSection />
        <div className="h-10" />
        <ProjectsSection />
        <div className="h-10" />
        <StacksSection />
        <div className="h-10" />
        <ContactSection />
        <Footer />
      </main>

      <BackToTop />
    </div>
  );
}

