"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Hustle-Hub",
    description:
      "An online live job posting and applying application used in South Africa and now expanding across 5 countries. Enables real-time job postings, applications, and seamless employer-employee connections. Built with modern Android technologies.",
    tech: ["Kotlin", "MVVM", "Room", "Firebase"],
    image: "💼",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather app with real-time forecasts, location-based weather, and interactive charts. Features smooth animations and modern UI using Jetpack Compose.",
    tech: ["Jetpack Compose", "Kotlin", "Coroutines", "REST API"],
    image: "🌤️",
    github: "#",
    demo: "#",
  },
  {
    title: "Al-Safar",
    description:
      "A personal project currently in development to help pilgrims perform their Umrah easily. The app provides guidance, schedules, and essential information to make the Umrah journey smooth and spiritually fulfilling.",
    tech: ["Kotlin", "Room", "WorkManager", "Material Design"],
    image: "🕌",
    github: "#",
    demo: "https://al-safar-backend.onrender.com/login/",
  },
  {
    title: "Facing Qibla Application",
    description:
      "An easy and maintainable Facing Qibla application. Simply open the app, face towards the Kaaba, and easily perform your prayers with confidence.",
    tech: ["Kotlin", "Android SDK", "Sensors", "Material Design"],
    image: "🧭",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const hasLiveDemo = project.demo !== "#";

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`glass rounded-3xl overflow-hidden group ${hasLiveDemo ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (hasLiveDemo) {
                  window.open(project.demo, "_blank", "noopener,noreferrer");
                }
              }}
              onKeyDown={(e) => {
                if (hasLiveDemo && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  window.open(project.demo, "_blank", "noopener,noreferrer");
                }
              }}
              role={hasLiveDemo ? "link" : undefined}
              tabIndex={hasLiveDemo ? 0 : undefined}
              aria-label={hasLiveDemo ? `Open ${project.title} live demo` : undefined}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-8xl"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center"
                  >
                    <Github size={24} />
                  </motion.a>
                  )}
                  {hasLiveDemo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center"
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone size={20} className="text-blue-400" />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  )}
                  {hasLiveDemo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
