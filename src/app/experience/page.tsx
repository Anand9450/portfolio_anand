"use client";

import { motion } from "framer-motion";
import { experience, achievements } from "@/data/portfolio";
import { Briefcase, Trophy, Calendar, Award } from "lucide-react";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Professional <span className="text-[#a31f4d]">Journey</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My career path, key achievements, and the milestones that define my growth as an engineer.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Experience Timeline */}
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-8">
            <Briefcase className="text-[#a31f4d]" /> Work Experience
          </h2>

          <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8"
              >
                {/* Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#a31f4d] border-4 border-white dark:border-black" />

                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-[#a31f4d]/30 transition-colors shadow-lg dark:shadow-none">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-[#a31f4d] font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Sidebar */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-8">
            <Trophy className="text-[#a31f4d]" /> Achievements
          </h2>

          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 hover:bg-[#a31f4d]/5 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#a31f4d]/10 rounded-lg text-[#a31f4d]">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
