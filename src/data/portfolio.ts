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
  about?: string[];
}

export const personalInfo = {
  name: "Anand Shukla",
  title: "Computer Science (Data Science) Undergraduate",
  email: "aananddshukla@gmail.com",
  location: "Kanpur, India",
  bio: "Software Engineering undergraduate with hands-on backend experience in Python, Django, and Java, focused on building scalable and reliable systems. Strong in Data Structures and Algorithms.",
  about: [
    "I am a Computer Science Engineer with experience in Python backend development and machine learning. I have built scalable web applications using Django, REST APIs, and SQL, along with practical ML and deep learning solutions.",
    "I have a strong foundation in Data Structures and Algorithms and enjoy solving real-world engineering problems. I am actively seeking full-time opportunities in Backend or Machine Learning roles."
  ],
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
    slug: "codekaro",
    title: "CodeKaro – Coding Practice Platform (In Progress)",
    tagline: "A LeetCode-style coding practice platform with modern features.",
    techStack: ["Backend Development", "Python", "Django", "Data Structures & Algorithms", "System Design"],
    keyFeatures: [
      "Online code editor with multiple language support.",
      "Problem listing, difficulty filters, and submission system.",
      "Real-time output window and test-case evaluation.",
      "User authentication and progress tracking."
    ],
    about: [
      "Building a LeetCode-style coding practice platform designed to help developers improve problem-solving and Data Structures & Algorithms skills through a clean and intuitive interface.",
      "Currently implemented the core project structure, basic problem layout, and backend architecture with a focus on scalability and extensibility.",
      "Actively working on adding advanced features such as problem categorization, difficulty levels, user authentication, code submission workflows, and performance tracking to evolve the platform into a full-fledged competitive programming system.",
      "This project is focused on system design, backend development, and long-term scalability, with the goal of matching real-world coding platforms used in technical interviews."
    ],
    challenge: "Handling code execution safely and efficiently with real-time test case evaluation.",
    image: "/images/four 1.jpg", // Placeholder
    category: "Full Stack"
  },
  {
    slug: "medical-diagnosis-ai",
    title: "Unified Medical Intelligence System (HealWise AI)",
    tagline: "Symptom-based disease prediction and MRI report analysis using AI.",
    techStack: ["Machine Learning", "Deep Learning", "Python", "Flask", "Computer Vision"],
    live: "https://ai-ml-based-medical-daigonosis-and.onrender.com/",
    keyFeatures: [
      "Predicts diseases from user symptoms.",
      "Analyzes MRI scans for brain tumor classification.",
      "Provides AI-powered 24/7 medical support and recommendations.",
      "User-friendly dashboard with detailed result reports."
    ],
    about: [
      "Developed a unified AI-powered medical diagnosis platform that integrates symptom-based disease prediction and MRI-based brain tumor detection into a single production-ready web application.",
      "Implemented a disease prediction module using a Random Forest model that analyzes user-reported symptoms and provides disease insights along with precautions, medications, diet plans, and workout recommendations.",
      "Built a deep learning–based Brain Tumor Classification system using a Convolutional Neural Network (CNN) with TensorFlow/Keras to classify MRI scans into Glioma, Meningioma, Pituitary Tumor, or No Tumor with confidence scores.",
      "Integrated both modules into a unified Flask-based application and enhanced it with an AI Health Assistant powered by Google Gemini, enabling intelligent medical guidance through a conversational interface.",
      "Focused on end-to-end system design including model integration, backend logic, user-friendly interfaces, and deployment-ready architecture."
    ],
    challenge: "Training accurate models and integrating both text + image predictions in one unified system.",
    image: "/project_images/AIML Based Medical Diagnosis & Report Analysis.png", // Placeholder
    category: "AI/ML"
  },
  {
    slug: "job-portal",
    title: "Job Portal Application",
    tagline: "Recruitment platform with job search and employer posting.",
    techStack: ["Python", "Django", "Backend Development", "SQL"],
    live: "https://job-portal-application-y53g.onrender.com/",
    keyFeatures: [
      "Created a recruitment platform with job search, applications, and employer posting."
    ],
    about: [
      "Developed a full-featured Job Portal web application using Django that connects job seekers and recruiters through a role-based, end-to-end hiring platform.",
      "Implemented secure user authentication and profile management for job seekers, enabling resume uploads, job applications with cover letters, and real-time application status tracking.",
      "Built recruiter-specific workflows including admin-approved onboarding, job posting and management, applicant review, resume access, and application status updates.",
      "Designed an admin dashboard to manage users, recruiters, and job listings, providing complete control over platform operations.",
      "Focused on clean backend architecture, database design, and scalable workflows, with deployment-ready configuration for production environments."
    ],
    image: "/project_images/job portal.png", // Placeholder
    category: "Full Stack"
  },
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
    category: "Full Stack",
    about: [
      "Task Master is a comprehensive full-stack task management application designed to help users organize their daily activities efficiently.",
      "Built with Spring Boot and React, it features a robust backend using H2 Database for fast in-memory storage and supports full CRUD operations with a clean, responsive user interface."
    ]
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
    category: "AI/ML",
    about: [
      "NeuroScan AI is a sophisticated deep learning application capable of detecting brain tumors from MRI scans with high accuracy.",
      "Utilizing Transfer Learning with the VGG16 architecture, the model achieves 96% accuracy. The system is deployed with a Gradio interface, allowing users to easily upload scans and receive instant predictions."
    ]
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
    category: "AI/ML",
    about: [
      "Heal Wise AI is a multi-disease prediction system designed to act as a first-line automated medical assistant.",
      "By analyzing user symptoms through machine learning algorithms, it provides potential diagnosis insights and suggests appropriate medications, aiming to improve accessibility to preliminary healthcare information."
    ]
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
    category: "Tools",
    about: [
      "A secure and efficient Password Manager designed to generate and store complex passwords safely.",
      "Built with Python and Cryptography libraries, it ensures that sensitive user credentials remain protected while offering convenient features like auto-copy for seamless usability."
    ]
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
    category: "AI/ML",
    about: [
      "This Deepfake Detection Tool leverages advanced deep learning techniques to identify manipulated video content.",
      "Using a combination of CNN and LSTM networks with OpenCV, it performs frame-by-frame analysis to detect inconsistencies, providing visual confidence markers to help users verify media authenticity."
    ]
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
    category: "AI/ML",
    about: [
      "A customized Deep Learning model built to classify images into 10 distinct categories using the CIFAR-10 dataset.",
      "The project demonstrates the power of Convolutional Neural Networks (CNNs) in image recognition, featuring data augmentation techniques to boost performance and reduce overfitting."
    ]
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
    category: "Web Dev",
    about: [
      "A real-time Weather Forecast Application that provides instant weather updates for any city worldwide.",
      "Fetching data from a live Weather API, it displays key metrics like temperature, humidity, and wind speed in a clean, responsive interface designed for quick information access."
    ]
  }
];

export const achievements = [
  "Knight badge on LeetCode (Global Rank ~11,600) — consistent DSA practice.",
  "Participated in ICPC 2024 — gained team-based competitive coding experience.",
  "Solved large volumes of DSA problems across LeetCode, HackerRank, and GFG.",
  "Multiple certifications in DSA, Machine Learning, and Web Development."
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "Adobe India Hackathon – Round 2 (Build & Connect)",
    issuer: "Adobe",
    date: "Oct 2025",
    credentialId: "dd5e37d1-9991-4f92-9160-143fe9eb004c",
    skills: ["Deep Learning", "Machine Learning", "Problem Solving"],
    image: "/certificates/Adobe India Hackathon – Round 2 (Build & Connect).jpg"
  },
  {
    title: "Adobe India Hackathon – Round 1 (Coding Assessment)",
    issuer: "Adobe",
    date: "Aug 2025",
    credentialId: "96de8f53-997d-42b4-9267-a560a27d3818",
    skills: ["Python", "Machine Learning"],
    image: "/certificates/Adobe India Hackathon – Round 1 (Coding Assessment).jpg"
  },
  {
    title: "Software Engineering Intern Certification",
    issuer: "HackerRank",
    date: "Feb 2025",
    credentialId: "0F103DD6FC73",
    skills: ["Problem Solving", "SQL", "Backend Development"],
    image: "/certificates/17HackerRank – Software Engineering Intern Certification.jpg"
  },
  {
    title: "Microsoft Azure SQL",
    issuer: "Microsoft",
    date: "Feb 2025",
    credentialId: "X53TLCH1QR38",
    skills: ["SQL", "Azure SQL"],
    image: "/certificates/Microsoft Azure SQL.jpg"
  },
  {
    title: "ICPC Asia Kanpur Regional – Participant",
    issuer: "ICPC",
    date: "Nov 2024",
    skills: ["Data Structures & Algorithms", "Competitive Programming"],
    image: "/certificates/ICPC Asia Kanpur Regional – Participant.jpg"
  },
  {
    title: "Natural Language Processing using Python",
    issuer: "Infosys Springboard",
    date: "May 2024",
    skills: ["Python", "Natural Language Processing (NLP)"],
    image: "/certificates/Natural Language Processing using Python.jpg"
  },
  {
    title: "Object Oriented Programming using Python",
    issuer: "Infosys Springboard",
    date: "Apr 2024",
    skills: ["Python", "Object-Oriented Programming (OOP)"],
    image: "/certificates/Object Oriented Programming using Python.jpg"
  },
  {
    title: "Linear Algebra for Machine Learning",
    issuer: "codedamn",
    date: "Jan 2024",
    credentialId: "65a021216fb2930012524f20",
    skills: ["Python", "Machine Learning"],
    image: "/certificates/Linear Algebra for Machine Learning.jpg"
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Dec 2023",
    credentialId: "EE56BDD53571",
    skills: ["Problem Solving", "Result-Oriented", "Python"],
    image: "/certificates/HackerRank – Problem Solving (Intermediate).jpg"
  },
  {
    title: "GfG-160",
    issuer: "GeeksforGeeks",
    date: "2024",
    skills: ["Python", "Data Structures & Algorithms", "Problem Solving"],
    image: "/certificates/GfG-160.jpg"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "May 2025",
    credentialId: "UUPBTKP3JN7G",
    skills: [],
    image: "/certificates/The Bits and Bytes of Computer Networking.jpg"
  },
  {
    title: "A Crash Course in Data Science",
    issuer: "Johns Hopkins University",
    date: "Mar 2025",
    credentialId: "SHW10I3VM8WR",
    skills: [],
    image: "/certificates/A Crash Course in Data Science.jpg"
  },
  {
    title: "Big Data Emerging Technologies",
    issuer: "Yonsei University",
    date: "Mar 2025",
    credentialId: "KSTFIC84T62Z",
    skills: ["Data Analytics"],
    image: "/certificates/Big Data Emerging Technologies.jpg"
  },
  {
    title: "Machine Learning for All",
    issuer: "University of London",
    date: "Mar 2025",
    credentialId: "325OJXW7DG3I",
    skills: ["Machine Learning"],
    image: "/certificates/Machine Learning for All.jpg"
  }
];
