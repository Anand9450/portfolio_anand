"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const Skills = () => {
  // Transform the skills object into an array for rendering
  const skillCategories = [
    { category: "Programming Languages", items: skills.programmingLanguages },
    { category: "Backend Development", items: skills.backendDevelopment },
    { category: "Tools", items: skills.tools },
    { category: "Frameworks", items: skills.frameworks },
    { category: "Testing", items: skills.testing },
    { category: "AI & ML", items: skills.aiAndMl },
    { category: "Soft Skills", items: skills.softSkills },
    { category: "Problem Solving", items: skills.problemSolving },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-[#a31f4d]">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-[#a31f4d]/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:bg-[#a31f4d]/20 hover:text-[#a31f4d] dark:hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
