"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectDetail from "../components/ProjectDetail";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle section navigation
  const handleNavigate = (section) => {
    setCurrentSection(section);
    setSelectedProject(null);

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Handle project click
  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle back from project
  const handleBackToProjects = () => {
    setSelectedProject(null);
    handleNavigate("projects");
  };

  // Track current section on scroll
  useEffect(() => {
    if (selectedProject) return;

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setCurrentSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedProject]);

  //scrolling for navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf6f0] text-darkbrown">
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        scrolled={scrolled}
      />

      {selectedProject ? (
        <ProjectDetail
          projectId={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : (
        <>
          <div id="hero">
            <Hero onNavigate={handleNavigate} />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <ProjectsGrid onProjectClick={handleProjectClick} />
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
