"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-[#a31f4d]">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certString, index) => {
            // Try to split by " - " to separate Issuer and Title
            const parts = certString.split(" - ");
            const issuer = parts.length > 1 ? parts[0] : "Certification";
            const title = parts.length > 1 ? parts.slice(1).join(" - ") : parts[0];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-[#a31f4d]/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-[#a31f4d]/10 rounded-xl text-[#a31f4d]">
                    <Award size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#a31f4d] transition-colors">
                  {title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{issuer}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
