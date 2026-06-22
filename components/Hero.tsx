"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import HeroVisual from "@/components/hero/HeroVisual";

const techHighlights = [
  "Kotlin",
  "Jetpack Compose",
  "MVVM",
  "Hilt",
  "Room",
  "Retrofit",
  "Firebase",
  "Clean Architecture",
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle backdrop — left-weighted so right visual stays clean */}
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/3 left-0 w-[24rem] h-[24rem] bg-purple-600/[0.06] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: -mousePosition.x * 0.5, y: -mousePosition.y * 0.5 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-500/[0.05] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-medium border border-white/10 text-white/70">
                Android Engineer · Kotlin · Compose
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Sheikh Rehan</span>
              <br />
              <span className="text-3xl md:text-5xl xl:text-6xl text-white/95">
                Building modern
                <br className="hidden sm:block" />
                {" "}<span className="text-white/90">mobile</span> systems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/65 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Professional Android engineer specializing in Kotlin,
              Jetpack Compose, and scalable architecture for production mobile applications.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {techHighlights.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(61, 220, 132, 0.5)" }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium glass border border-white/10 text-white/80 hover:text-white transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-slate-900 font-semibold flex items-center gap-2 shadow-lg shadow-white/10 hover:shadow-white/20 transition-shadow"
              >
                Get In Touch
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass font-semibold flex items-center gap-2 border border-white/20 hover:border-[#3DDC84]/40 transition-colors"
              >
                View My Work
                <ArrowDown size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/sheikh0021", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sheikhrehan2100/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sheikhrehan2121@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#3DDC84]/10 hover:border-[#3DDC84]/40 border border-transparent transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — engineering visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <HeroVisual mousePosition={mousePosition} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-white/50">Explore more</span>
          <ArrowDown size={24} className="text-[#3DDC84]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
