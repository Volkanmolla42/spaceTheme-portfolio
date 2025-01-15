import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({
  projects = [
    {
      title: "Cosmic Explorer",
      description:
        "A deep space visualization tool using WebGL and real NASA data",
      imageUrl:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop&q=60",
      tags: ["WebGL", "JavaScript", "NASA API"],
      link: "#",
    },
    {
      title: "Nebula Analytics",
      description:
        "Real-time data analytics platform with interactive visualizations",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
      tags: ["React", "D3.js", "GraphQL"],
      link: "#",
    },
    {
      title: "Stellar Portfolio",
      description:
        "A minimalist space-themed portfolio template for developers",
      imageUrl:
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&auto=format&fit=crop&q=60",
      tags: ["Next.js", "Tailwind", "Three.js"],
      link: "#",
    },
  ],
}: ProjectGridProps) => {
  return (
    <div className="w-full min-h-screen bg-[#0a2a2a] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            perspective: "1000px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                transform: `translateY(20px)`,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;
