import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="wrap">
          <h2 className="section-title">About & Skills</h2>
          <div className="bento-grid">
            <About />
            <Skills />
          </div>
        </section>

        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
