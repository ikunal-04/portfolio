import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
