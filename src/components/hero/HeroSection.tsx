import React from "react";
import Space3DScene from "./Space3DScene";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Welcome to My Portfolio",
  subtitle = "Exploring the Digital Universe Through Code",
  ctaText = "Explore Projects",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] bg-[#0a2a2a] overflow-hidden">
      <Space3DScene />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2a2a]/50 to-[#0a2a2a]">
        <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.2em] text-white"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "0.2em" }}
              transition={{ duration: 1.2 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>

            <motion.button
              className="px-8 py-4 bg-[#1a4a4a] text-white rounded-full text-lg tracking-wider
                         hover:bg-[#2a5a5a] transition-all duration-300 ease-in-out
                         border border-white/20 backdrop-blur-sm"
              onClick={onCtaClick}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {ctaText}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a2a2a] to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a2a2a] to-transparent" />
    </div>
  );
};

export default HeroSection;
