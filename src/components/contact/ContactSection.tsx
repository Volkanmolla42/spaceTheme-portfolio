import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0a2a2a] py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-thin tracking-[0.2em] text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-white/70 tracking-wider">
            Let's create something amazing together
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-lg border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-white/80 tracking-wider text-sm">
                Name
              </label>
              <Input
                type="text"
                required
                className="bg-[#1a4a4a] border-white/10 text-white"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-white/80 tracking-wider text-sm">
                Email
              </label>
              <Input
                type="email"
                required
                className="bg-[#1a4a4a] border-white/10 text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-white/80 tracking-wider text-sm">
              Message
            </label>
            <Textarea
              required
              className="bg-[#1a4a4a] border-white/10 text-white min-h-[150px]"
              placeholder="Your message"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-white/10 hover:bg-white/20 text-white tracking-wider py-6"
          >
            SEND MESSAGE
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactSection;
