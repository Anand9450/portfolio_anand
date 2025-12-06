export interface Project {
  slug: string;
  title: string;
  tagline: string;
  techStack: string[];
  keyFeatures: string[];
  github?: string;
  live?: string;
  challenge?: string;
  image: string;
  category: "AI/ML" | "Web Dev" | "Full Stack" | "Tools";
}

export const personalInfo = {
  name: "Anand Shukla",
  title: "Computer Science (Data Science) Undergraduate",
  email: "aananddshukla@gmail.com",
  location: "Kanpur, India",
  bio: "Aspiring Software Engineer with a strong foundation in Data Structures and Algorithms. Eager to apply analytical problemsolving skills and programming knowledge to build efficient software solutions for a dynamic engineering team.",
  hobbies: ["Programming", "Listening to Music", "Reading Books", "Mentoring Students"]
};

export const education = [
  {
    degree: "Bachelor of Technology (CSE - Data Science)",
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    cgpa: "7.74",
    year: "2022 - 2026" // Estimated based on typical B.Tech duration
  },
  {
    degree: "Diploma in Electronics Engineering",
    institution: "Government Polytechnic Kanpur",
    percentage: "79%",
    year: "2019 - 2022" // Estimated
  }
];

export const skills = {
  programmingLanguages: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  backendDevelopment: ["Django", "REST APIs", "Spring Boot", "SQL", "PostgreSQL", "H2 Database", "Node.js", "Express"],
  tools: ["Eclipse", "VS Code", "Jupyter Notebook", "Git", "Postman", "Docker", "Agile"],
  frameworks: ["React", "TensorFlow", "Keras", "Gradio", "Next.js", "Tailwind CSS"],
  testing: ["Unit Testing", "Integration Testing", "API Testing"],
  aiAndMl: ["Deep Learning", "Transfer Learning (VGG16)", "Machine Learning"],
  softSkills: ["Multitasking", "Work Ethics", "Effective Communication"],
  problemSolving: ["Data Structures", "Algorithms", "Competitive Programming"]
};

export const experience = [
  {
    company: "Wyvate",
    role: "Python Backend Developer Intern",
    period: "January 2025 - March 2025",
    responsibilities: [
      "Engineered and optimized 10+ APIs using Django.",
      "Conducted unit testing, integration testing, and API testing for reliability.",
      "Analyzed and tested 100+ test cases ensuring cross-platform stability.",
      "Identified and resolved 40+ critical bugs improving system efficiency."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "task-master",
    title: "Task Master Web Application",
    tagline: "Full-stack task management with Spring Boot and React.",
    techStack: ["Java", "Spring Boot", "React", "H2 Database", "Render", "Vercel"],
    live: "https://taskmaster-two-steel.vercel.app/",
    keyFeatures: [
      "Developed a full-stack application using Spring Boot and React.",
      "Used H2 Database for fast in-memory task storage.",
      "Deployed on Render and Vercel enabling online CRUD task management."
    ],
    image: "/project_images/Task master.png",
    category: "Full Stack"
  },
  {
    slug: "brain-tumor-detection",
    title: "NeuroScan_AI",
    tagline: "Deep learning model for tumor detection from MRI scans.",
    techStack: ["Python", "Deep Learning", "Transfer Learning (VGG16)", "Gradio"],
    keyFeatures: [
      "Engineered a deep learning model using Transfer Learning with VGG16.",
      "Achieved 96% accuracy on MRI scans.",
      "Integrated with Gradio for real-time tumor prediction from user uploads."
    ],
    image: "/project_images/NeuroScan AI.png",
    category: "AI/ML"
  },
  {
    slug: "disease-prediction",
    title: "Heal Wise AI",
    tagline: "Multi-disease prediction and automated medicine recommendations.",
    techStack: ["Machine Learning", "Python", "Pandas", "Scikit-learn"],
    live: "https://healwiseai-nu.vercel.app/",
    keyFeatures: [
      "Developed a machine learning-driven multi-disease prediction system.",
      "Automated medicine recommendations for improved treatment precision."
    ],
    image: "/project_images/heal wise ai.png",
    category: "AI/ML"
  },
  {
    slug: "password-manager",
    title: "Password Manager",
    tagline: "Secure password generator and storage system.",
    techStack: ["Python", "Cryptography"],
    keyFeatures: [
      "Built a secure password generator and storage system.",
      "Auto-copy feature for quick use."
    ],
    image: "/images/one 1.png", // Placeholder
    category: "Tools"
  },
  {
    slug: "job-portal",
    title: "Job Portal (Django)",
    tagline: "Recruitment platform with job search and employer posting.",
    techStack: ["Python", "Django", "HTML/CSS"],
    live: "https://job-portal-application-y53g.onrender.com/",
    keyFeatures: [
      "Created a recruitment platform with job search, applications, and employer posting."
    ],
    image: "/project_images/job portal.png", // Placeholder
    category: "Full Stack"
  },
  // Restored Previous Projects
  {
    slug: "medical-diagnosis-ai",
    title: "AI/ML Based Medical Diagnosis & Report Analysis",
    tagline: "Symptom-based disease prediction and MRI report analysis using AI.",
    techStack: ["Python", "ML", "DL", "Transfer Learning (VGG16)", "Computer Vision", "Flask/Django"],
    live: "https://ai-ml-based-medical-daigonosis-and.onrender.com/",
    keyFeatures: [
      "Predicts diseases from user symptoms.",
      "Analyzes MRI scans for brain tumor classification.",
      "Provides AI-powered 24/7 medical support and recommendations.",
      "User-friendly dashboard with detailed result reports."
    ],
    challenge: "Training accurate models and integrating both text + image predictions in one unified system.",
    image: "/project_images/AIML Based Medical Diagnosis & Report Analysis.png", // Placeholder
    category: "AI/ML"
  },
  {
    slug: "deepfake-detection",
    title: "Deepfake Detection Tool",
    tagline: "Detecting manipulated videos and images using deep learning.",
    techStack: ["Python", "OpenCV", "CNN/LSTM", "Deep Learning"],
    keyFeatures: [
      "Identifies deepfake videos with frame-by-frame analysis.",
      "Uses CNN-based feature extraction and temporal modeling.",
      "Generates confidence scores and visual markers."
    ],
    challenge: "Achieving high accuracy on noisy and low-resolution video data.",
    image: "/images/twow.jpg", // Placeholder
    category: "AI/ML"
  },
  {
    slug: "cifar-10-classification",
    title: "Deep Learning CIFAR-10 Image Classification",
    tagline: "Classifying 10 categories using CNN.",
    techStack: ["Python", "TensorFlow/Keras", "CNN"],
    keyFeatures: [
      "Custom CNN model achieving high test accuracy.",
      "Data augmentation for performance boost.",
      "Clean training visualization and evaluation metrics."
    ],
    challenge: "Improving accuracy without overfitting.",
    image: "/images/four 1.jpg", // Placeholder
    category: "AI/ML"
  },
  {
    slug: "weather-forecast",
    title: "Weather Forecast Application",
    tagline: "Real-time weather updates based on city name.",
    techStack: ["JavaScript", "HTML/CSS", "Weather API"],
    keyFeatures: [
      "Live weather data with temperature, humidity, wind speed.",
      "Responsive interface.",
      "Error handling for invalid locations."
    ],
    challenge: "Managing API rate limits and real-time updates.",
    image: "/images/five 1.jpg", // Placeholder
    category: "Web Dev"
  },
  {
    slug: "codekaro",
    title: "CodeKaro: Coding Practice Platform",
    tagline: "A LeetCode-style coding practice platform with modern features.",
    techStack: ["React", "Node.js", "Django", "REST APIs", "MongoDB"],
    keyFeatures: [
      "Online code editor with multiple language support.",
      "Problem listing, difficulty filters, and submission system.",
      "Real-time output window and test-case evaluation.",
      "User authentication and progress tracking."
    ],
    challenge: "Handling code execution safely and efficiently with real-time test case evaluation.",
    image: "/images/four 1.jpg", // Placeholder
    category: "Full Stack"
  }
];

export const achievements = [
  "Knight badge on LeetCode (Global Rank ~11,600) — consistent DSA practice.",
  "Participated in ICPC 2024 — gained team-based competitive coding experience.",
  "Solved large volumes of DSA problems across LeetCode, HackerRank, and GFG.",
  "Multiple certifications in DSA, Machine Learning, and Web Development."
];

export const certifications = [
  "HackerRank - Problem Solving",
  "HackerRank - Software Engineer Intern",
  "Coursera - Introduction to Generative AI",
  "MindLuster - Embedded Systems",
  "NEATmet, SESI - Senior Green Ambassador Program",
  "Infosys Springboard - OOP in Python",
  "Udemy - Full Stack Web Development",
  "GeeksforGeeks - Data Structures & Algorithms",
  "Coursera - Machine Learning Specialization",
  "Additional certifications from Coursera, GFG, HackerRank etc."
];
