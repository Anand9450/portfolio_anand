"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodechef } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    role: "Problem Solving",
    url: "https://leetcode.com/u/anand_shukla1312/",
    icon: <SiLeetcode size={32} />,
    color: "text-[#FFA116]",
    bg: "bg-[#FFA116]/10",
    description: "Knight Badge (Top 2.58%), Global Rank ~11,600. Solved 1200+ problems."
  },
  {
    name: "GitHub",
    role: "Open Source",
    url: "https://github.com/Anand9450",
    icon: <FaGithub size={32} />,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-white/10",
    description: "Active contributor to open source projects with 1000+ contributions."
  },
  {
    name: "GeeksforGeeks",
    role: "DSA Practice",
    url: "https://www.geeksforgeeks.org/user/aananddshukla/",
    icon: <SiGeeksforgeeks size={32} />,
    color: "text-[#2F8D46]",
    bg: "bg-[#2F8D46]/10",
    description: "Consistent practice and problem solving on GFG platform."
  },
  {
    name: "HackerRank",
    role: "Competitive Programming",
    url: "https://www.hackerrank.com/profile/aananddshukla",
    icon: <SiHackerrank size={32} />,
    color: "text-[#2EC866]",
    bg: "bg-[#2EC866]/10",
    description: "5-star Gold badge in Problem Solving and Python."
  },
  {
    name: "CodeChef",
    role: "Competitive Programming",
    url: "https://www.codechef.com/users/aanand_shukla",
    icon: <SiCodechef size={32} />,
    color: "text-[#5B4638]",
    bg: "bg-[#5B4638]/10",
    description: "Rated 4-star coder with strong performance in long challenges."
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coding <span className="text-[#a31f4d]">Profiles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey across various coding platforms and competitive programming achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 glass-card rounded-2xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${profile.bg} ${profile.color}`}>
                  {profile.icon}
                </div>
                <ExternalLink className="text-gray-400 dark:text-gray-500 group-hover:text-[#a31f4d] transition-colors" size={20} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#a31f4d] transition-colors">
                {profile.name}
              </h3>
              <p className="text-sm text-[#a31f4d] mb-3 font-medium">
                {profile.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {profile.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
