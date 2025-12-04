"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-black/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key <span className="text-[#a31f4d]">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that highlight my dedication to problem-solving and continuous learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-[#a31f4d]/50 transition-colors shadow-sm dark:shadow-none flex items-start gap-4"
              >
                <div className="p-3 bg-[#a31f4d]/10 rounded-lg text-[#a31f4d] shrink-0">
                  <Trophy size={24} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
