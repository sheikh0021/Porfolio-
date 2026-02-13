"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Android Developer",
    company: "Wassha",
    location: "Japan",
    period: "March 2025 - Present",
    description: [
      "Developed and maintained multiple Android applications using Kotlin and Java",
      "Implemented MVVM architecture pattern for scalable and maintainable code",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Optimized app performance and reduced crash rates significantly",
      "Integrated RESTful APIs and third-party SDKs",
    ],
  },
  {
    title: "Software Engineer",
    company: "Aadi Foundation",
    location: "Delhi",
    period: "August 2024 - February 2025",
    description: [
      "Built user-friendly Android applications from scratch",
      "Worked with Android SDK, Material Design guidelines",
      "Participated in code reviews and agile development processes",
      "Learned and implemented modern Android development practices",
      "Contributed to app store releases and updates",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            2 years of crafting amazing Android experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-24 pb-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900" />

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/70">
                        <div className="flex items-center gap-2">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
