import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { ProductSection } from './sections/ProductSection';
import { ExploreSection } from './sections/ExploreSection';
import { TastingSection } from './sections/TastingSection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#0D2818]">
      <HeroSection />
      <StorySection />
      <ProductSection />
      <ExploreSection />
      <TastingSection />
      <FooterSection />
    </main>
  );
}

export default App;
