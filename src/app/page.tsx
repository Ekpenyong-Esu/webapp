import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <CaseStudies />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
}
