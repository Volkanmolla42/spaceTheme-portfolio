import React from "react";
import HeroSection from "./hero/HeroSection";
import NavBar from "./navigation/NavBar";
import ProjectGrid from "./projects/ProjectGrid";
import { motion } from "framer-motion";

interface HomeProps {
  onThemeToggle?: () => void;
}

const Home = ({ onThemeToggle = () => {} }: HomeProps) => {
  return (
    <div className="min-h-screen bg-[#0a2a2a] overflow-x-hidden">
      <NavBar
        onThemeToggle={onThemeToggle}
        links={[
          { href: "/", label: "HOME" },
          { href: "/projects", label: "PROJECTS" },
          { href: "/about", label: "ABOUT" },
          { href: "/contact", label: "CONTACT" },
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection
          onCtaClick={() => {
            const projectsSection = document.getElementById("projects");
            projectsSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </motion.div>

      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="py-20">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="text-4xl font-thin tracking-[0.2em] text-white mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto tracking-wider">
              Explore my latest works that blend technology and creativity
            </p>
          </div>
          <ProjectGrid />
        </div>
      </motion.div>

      <footer className="bg-[#0a2a2a] text-white/50 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="tracking-wider text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
