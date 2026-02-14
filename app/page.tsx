import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { QuickAccess } from '@/components/sections/QuickAccess';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Particles } from '@/components/ui/Particles';
import { FloatingActionButton } from '@/components/ui/FloatingActionButton';

export default function Home() {
  return (
    <>
      {/* Background Particles */}
      <Particles />

      {/* Header/Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <QuickAccess />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </>
  );
}
