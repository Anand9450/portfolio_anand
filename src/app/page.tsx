import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStackMarquee from "@/components/TechStackMarquee";
import Skills from "@/components/Skills";
import LeetCodeStats from "@/components/LeetCodeStats";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#a31f4d] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStackMarquee />
      <Skills />
      <LeetCodeStats />
      <Experience />
      <Achievements />
      <Projects />
      <CodingProfiles />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
