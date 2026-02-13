"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Smartphone,
    title: "Native Android",
    description: "Expert in Kotlin and Java for building native Android apps",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing apps for speed, efficiency, and smooth user experience",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love what I do and always eager to learn new technologies",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Passionate Android Developer
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Hello! I'm <span className="text-gradient font-semibold">Sheikh Rehan</span>, 
              an enthusiastic Android Developer with 2 years of hands-on experience in creating 
              innovative mobile applications. I specialize in building beautiful, performant, 
              and user-friendly Android apps using modern technologies.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My journey in Android development started with a curiosity to understand how 
              mobile apps work, and it has evolved into a passion for crafting exceptional 
              user experiences. I believe in writing clean, maintainable code and staying 
              up-to-date with the latest Android development trends and best practices.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-6"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold inline-flex items-center gap-2"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <feature.icon
                      size={40}
                      className="mx-auto mb-4 text-blue-400"
                    />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-white/70">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
