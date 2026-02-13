"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Kotlin", level: 90 },
      { name: "Java", level: 85 },
      { name: "XML", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Jetpack Compose", level: 85 },
      { name: "Android SDK", level: 90 },
      { name: "Retrofit", level: 80 },
      { name: "Room Database", level: 75 },
      { name: "Coroutines", level: 85 },
      { name: "MVVM Architecture", level: 88 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Android Studio", level: 90 },
      { name: "Git & GitHub", level: 85 },
      { name: "Firebase", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Material Design", level: 85 },
    ],
  },
];

const techIcons = [
  "📱", "⚡", "🎨", "🔧", "🚀", "💻", "📦", "🌐", "🎯", "✨"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(index) * 20, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="absolute text-6xl"
              style={{
                left: `${10 + (index * 10)}%`,
                top: `${20 + (index % 3) * 30}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
