"use client";

import { skills } from "@/data/portfolio";

const TechStackMarquee = () => {
  // Flatten all skills into a single array for the marquee
  const allSkills = [
    ...skills.programmingLanguages,
    ...skills.frameworks,
    ...skills.backendDevelopment,
    ...skills.tools,
    ...skills.aiAndMl,
  ];

  // Duplicate the array to ensure seamless looping
  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <div className="w-full overflow-hidden bg-[#a31f4d]/5 dark:bg-[#a31f4d]/10 border-y border-[#a31f4d]/10 py-6 mb-10">
      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <div className="animate-marquee flex gap-8 md:gap-16 items-center">
          {marqueeItems.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default uppercase"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
