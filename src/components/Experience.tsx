"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-[#a31f4d]">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to the industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-white/20 to-transparent -translate-x-1/2" />

              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#a31f4d] rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 ring-4 ring-white dark:ring-black shadow-[0_0_10px_#a31f4d]" />

                {/* Date */}
                <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
                  <span className="inline-block px-4 py-1.5 bg-[#a31f4d]/10 text-[#a31f4d] rounded-full text-sm font-bold border border-[#a31f4d]/20">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none hover:border-[#a31f4d]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#a31f4d]/5">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-[#a31f4d]" size={20} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    </div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[#a31f4d] rounded-full flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
