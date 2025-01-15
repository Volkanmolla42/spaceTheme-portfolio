import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  link?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing its key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
  tags = ["React", "TypeScript", "Tailwind"],
  link = "#",
}: ProjectCardProps) => {
  return (
    <Card
      className="group w-[350px] h-[400px] bg-[#0a2a2a] hover:translate-y-[-8px] transition-all duration-300 ease-out cursor-pointer overflow-hidden"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a2a2a]/80" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <CardHeader className="space-y-1">
        <CardTitle className="text-white text-xl tracking-wider">
          {title}
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#1a4a4a] text-white hover:bg-[#2a5a5a]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-gray-300 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
