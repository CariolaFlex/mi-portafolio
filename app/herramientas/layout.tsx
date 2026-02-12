import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActionButton } from '@/components/ui/FloatingActionButton';

export default function HerramientasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
