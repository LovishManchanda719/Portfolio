import { Project, Experience, Education, Achievement, SkillCategory, Extracurricular } from './types';
import tripNestImg from './assets/tripnest-banner.png';
import shivBandImg from './assets/shiv-band-banner.png';

export const PERSONAL_INFO = {
  name: "Lovish Manchanda",
  title: "Full Stack Developer & CS Student",
  email: "lovishmanchanda480@gmail.com",
  phone: "(+91) 8750703059",
  location: "New Delhi, India",
  github: "https://github.com/LovishManchanda719",
  linkedin: "https://linkedin.com/in/lovish45",
  leetcode: "https://leetcode.com/u/Lovish480/",
  codeforces: "https://codeforces.com/profile/lovishmanchanda719"
};

export const EDUCATION: Education[] = [
  {
    institution: "Delhi Technological University (DTU)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2023 – 2027 (Expected)",
    grade: "CGPA: 8.49",
    location: "Delhi, India"
  },
  {
    institution: "Sneh International School",
    degree: "Class XII - CBSE Board",
    duration: "2021 – 2023",
    grade: "Percentage: 95%",
    location: "Preet Vihar, Delhi"
  },
  {
    institution: "Sneh International School",
    degree: "Class X - CBSE Board",
    duration: "2019 – 2021",
    grade: "Percentage: 94.8%",
    location: "Preet Vihar, Delhi"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Krayons",
    location: "NSP, Delhi",
    duration: "July 2025 – Aug 2025",
    points: [
      "Built responsive UIs using Next.js and Tailwind CSS, improving page speed by 50%.",
      "Integrated REST APIs with MongoDB, reducing data latency by 40%.",
      "Refactored codebase and improved dev handover docs, cutting onboarding time by 30%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "TripNest",
    image: tripNestImg,
    description: [
      "MERN Stack Hotel Booking Platform built scalable hotel booking app; handled 100+ test bookings.",
      "Implemented auth and dashboard; reduced navigation time by 60%."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Render"],
    date: "July 2025 – Aug 2025",
    liveLink: "https://wanderlust-hd9q.onrender.com/",
    repoLink: "https://github.com/LovishManchanda719/Wanderlust"
  },
  {
    title: "Shiv Band",
    image: shivBandImg,
    description: [
      "Event Booking Web App developed event-booking platform; boosted client visibility by 80%.",
      "Optimized images and routing, cutting mobile load time by 50%."
    ],
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    date: "Ongoing",
    liveLink: "https://shiv-band.vercel.app/",
    repoLink: "https://github.com/LovishManchanda719/ShivBand"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "C", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Web Technologies",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "REST API"]
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "Vercel", "Render"]
  },
  {
    category: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks", "SQL"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "LeetCode Knight",
    platform: "LeetCode",
    description: "Solved 327+ problems focusing on arrays, strings, recursion, and DP. Peak Rating: 1520.",
    link: "https://leetcode.com/u/Lovish480/"
  },
  {
    title: "Competitive Programmer",
    platform: "Codeforces",
    description: "Reached a peak rating of 942. Consistent participation in algorithmic contests.",
    link: "https://codeforces.com/profile/lovishmanchanda719"
  }
];

export const EXTRACURRICULAR: Extracurricular[] = [
  {
    organization: "IEEE DTU",
    role: "Content Executive",
    description: "Curated and edited 10+ technical articles and announcements; improved outreach clarity."
  },
  {
    organization: "Google Developer Group DTU",
    role: "Web Developer",
    description: "Collaborated on building and maintaining internal club platforms using Next.js, Tailwind CSS, and Firebase."
  },
  {
    organization: "GDG DTU",
    role: "Competitive Programming Member",
    description: "Participated in weekly problem-solving sessions and internal contests to improve logical reasoning."
  }
];