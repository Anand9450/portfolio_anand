"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

import { useState, useEffect } from "react";

const LeetCodeStats = () => {
  const [stats, setStats] = useState({
    total: { solved: 1292, count: 3787 },
    easy: { solved: 424, count: 918 },
    medium: { solved: 695, count: 1974 },
    hard: { solved: 173, count: 895 },
    username: "anand_shukla1312",
    link: "https://leetcode.com/u/anand_shukla1312/"
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/anand_shukla1312");
        const data = await response.json();

        if (data.status === "success") {
          setStats(prev => ({
            ...prev,
            total: { solved: data.totalSolved, count: data.totalQuestions },
            easy: { solved: data.easySolved, count: data.totalEasy },
            medium: { solved: data.mediumSolved, count: data.totalMedium },
            hard: { solved: data.hardSolved, count: data.totalHard },
          }));
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchStats();
  }, []);

  // Calculate percentages for the circular progress
  // We'll use a simple approach: 3 concentric circles or just a total progress?
  // Let's do a single "Total Solved" circle and separate bars for breakdown, cleaner UI.
  const totalPercentage = (stats.total.solved / stats.total.count) * 100;

  return (
    <section id="leetcode" className="py-20 bg-gray-50 dark:bg-black/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            LeetCode <span className="text-[#a31f4d]">Analytics</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Consistency is key. Here is a live breakdown of my problem-solving journey on LeetCode.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#a31f4d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Column: Total Circle */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* SVG Circle */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-gray-200 dark:text-white/10"
                    />
                    {/* Progress Circle - Total */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#a31f4d"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283" // 2 * pi * 45
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 283 - (283 * totalPercentage) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>

                  {/* Inner Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      {stats.total.solved}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">
                      Solved
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#ffa116]/10 text-[#ffa116] rounded-full text-xs font-bold border border-[#ffa116]/20 flex items-center gap-1">
                    <Trophy size={12} /> Knight Badge
                  </span>
                </div>
              </div>

              {/* Right Column: Breakdown */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-600 dark:text-gray-400">Easy</span>
                    <span className="text-gray-900 dark:text-white">
                      <span className="text-[#00b8a3] font-bold">{stats.easy.solved}</span> / {stats.easy.count}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stats.easy.solved / stats.total.solved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-[#00b8a3] rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/20" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-600 dark:text-gray-400">Medium</span>
                    <span className="text-gray-900 dark:text-white">
                      <span className="text-[#ffc01e] font-bold">{stats.medium.solved}</span> / {stats.medium.count}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stats.medium.solved / stats.total.solved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-[#ffc01e] rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/20" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-600 dark:text-gray-400">Hard</span>
                    <span className="text-gray-900 dark:text-white">
                      <span className="text-[#ef4743] font-bold">{stats.hard.solved}</span> / {stats.hard.count}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stats.hard.solved / stats.total.solved) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-[#ef4743] rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/20" />
                    </motion.div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={stats.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-[#282828] hover:bg-[#323232] border border-white/10 px-6 py-3 rounded-xl transition-all font-medium hover:scale-105 active:scale-95 shadow-lg group"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
