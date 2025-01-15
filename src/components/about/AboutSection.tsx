import React from "react";
import { motion } from "framer-motion";
import SkillGlobe from "./SkillGlobe";

interface Skill {
  name: string;
  level: number;
}

interface AboutSectionProps {
  skills?: Skill[];
  bio?: string;
}

const AboutSection = ({
  skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Three.js", level: 75 },
    { name: "WebGL", level: 70 },
  ],
  bio = "A passionate developer with a love for creating immersive web experiences. Specializing in modern web technologies and creative coding.",
}: AboutSectionProps) => {
  return (
    <div className="min-h-screen bg-[#0a2a2a] py-32 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-thin tracking-[0.2em] text-white mb-8">
            ABOUT ME
          </h2>
          <p className="text-white/80 text-lg leading-relaxed tracking-wide">
            {bio}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-thin tracking-[0.2em] text-white mb-12 text-center">
            SKILL CONSTELLATION
          </h3>
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white tracking-wider">
                    {skill.name}
                  </span>
                  <span className="text-white/60">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1a4a4a] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/80"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-20">
            <SkillGlobe skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
