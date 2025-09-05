import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ConceptSection from '@/components/ConceptSection';
import TokenSection from '@/components/TokenSection';
import RoadmapSection from '@/components/RoadmapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <StorySection />
      <ConceptSection />
      <TokenSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
