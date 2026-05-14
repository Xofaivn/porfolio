import type { Language } from '../context/LanguageContext';

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  descriptionByLang: Record<Language, string>;
  tech: string[];
  githubUrl: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  degreeByLang: Record<Language, string>;
  schoolByLang: Record<Language, string>;
  schoolFullNameByLang: Record<Language, string>;
  levelByLang: Record<Language, string>;
  startDate: string;
  endDate: string;
  schoolWebsite: string;
};

export const profile = {
  name: 'Phan Tiến Huy',
  headline: {
    en: 'Software Developer',
    vi: 'Software Developer',
  },
  location: 'Vietnam',
  phone: '0919129799',
  personalEmail: 'huytienphan0301@gmail.com',
  avatarStyle: {
    bgFrom: '#00352F',
    bgTo: '#001f1a',
  },
} as const;

export const socialLinksByLang: Record<Language, SocialLink[]> = {
  en: [
    { label: 'GitHub', href: 'https://github.com/Xofaivn' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huy-phan-tien' },
    { label: 'Email', href: 'mailto:huyphantien.work@gmail.com' },
  ],
  vi: [
    { label: 'GitHub', href: 'https://github.com/Xofaivn' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huy-phan-tien' },
    { label: 'Email', href: 'mailto:huyphantien.work@gmail.com' },
  ],
};

export const gpa = '3.40 / 4.00';

export const awardsByLang: Record<Language, string[]> = {
  en: [
    'Outstanding Academic Performance (Sem 2, 2023–2024; Sem 1 & 2, 2024–2025)',
    'OISP Scholarship (Sem 3, 2023–2024)',
  ],
  vi: [
    'Thành tích học tập xuất sắc (Kỳ 2, 2023–2024; Kỳ 1 & 2, 2024–2025)',
    'Học bổng OISP (Kỳ 3, 2023–2024)',
  ],
};

export const englishCertificatesByLang: Record<Language, string[]> = {
  en: ['IELTS 6.5 (2023)'],
  vi: ['IELTS 6.5 (2023)'],
};

export const education: Education = {
  degreeByLang: {
    en: 'Bachelor of Computer Science — Software Engineering',
    vi: 'Cử nhân Khoa học Máy tính — Kỹ thuật Phần mềm',
  },
  schoolByLang: {
    en: 'Bách Khoa HCMUT',
    vi: 'Bách Khoa HCMUT',
  },
  schoolFullNameByLang: {
    en: 'Ho Chi Minh City University of Technology (HCMUT)',
    vi: 'Trường Đại học Bách Khoa, ĐHQG TP.HCM',
  },
  levelByLang: {
    en: 'Undergraduate',
    vi: 'Undergraduate',
  },
  startDate: 'Sep 2023',
  endDate: 'Present',
  schoolWebsite: 'https://hcmut.edu.vn/',
};

export const projects: Project[] = [
  {
    name: 'Credit Sentinel',
    descriptionByLang: {
      en: 'Fraud detection dashboard with React + FastAPI. Implemented JWT auth, RBAC, PostgreSQL storage, and integrated ML models with SHAP-based explainable AI. Dockerized.',
      vi: 'Dashboard phát hiện gian lận với React + FastAPI. Tích hợp JWT auth, RBAC, PostgreSQL, mô hình ML và SHAP AI có thể giải thích. Dockerized.',
    },
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: '',
  },
  {
    name: 'Google Forms Auto-Filler',
    descriptionByLang: {
      en: 'Automation tool to fill and submit Google Forms via Selenium. FastAPI backend with JWT auth, quota management, and session handling. Self-hosted via Cloudflare Tunnel.',
      vi: 'Công cụ tự động điền Google Forms qua Selenium. Backend FastAPI với JWT auth, quản lý quota. Self-host qua Cloudflare Tunnel tại ggform.xofai.online.',
    },
    tech: ['Python', 'FastAPI', 'Selenium', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://ggform.xofai.online',
  },
  {
    name: 'Learning Management System',
    descriptionByLang: {
      en: 'Designed database schema with EERD and relational mapping for a course management system. Integrated backend services and DB operations via RESTful APIs.',
      vi: 'Thiết kế schema CSDL với EERD cho hệ thống quản lý khóa học. Tích hợp backend và thao tác CSDL qua RESTful APIs.',
    },
    tech: ['React', 'TypeScript', 'FastAPI', 'SQL Server'],
    githubUrl: 'https://github.com/Xofaivn/lms-db',
  },
  {
    name: 'Personal Web Portfolio',
    descriptionByLang: {
      en: 'Personal portfolio website to showcase projects, skills, and academic background. Built with React + Tailwind CSS and deployed at xofai.online via Cloudflare Pages.',
      vi: 'Website portfolio cá nhân giới thiệu dự án, kỹ năng và học vấn. Xây dựng với React + Tailwind CSS, triển khai tại xofai.online qua Cloudflare Pages.',
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    githubUrl: 'https://github.com/Xofaivn/porfolio',
  },
];

export const stacksByLang: Record<Language, SkillGroup[]> = {
  en: [
    { title: 'Languages', skills: ['Java', 'Python', 'C/C++', 'SQL', 'R'] },
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { title: 'Backend', skills: ['FastAPI', 'REST APIs', 'Node.js'] },
    { title: 'Data Science & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn'] },
    { title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'] },
    { title: 'Tools & DevOps', skills: ['Git', 'Docker', 'VS Code', 'Cursor', 'IntelliJ', 'Figma'] },
    { title: 'Concepts', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Calculus', 'Linear Algebra', 'Probability & Statistics'] },
  ],
  vi: [
    { title: 'Ngôn ngữ', skills: ['Java', 'Python', 'C/C++', 'SQL', 'R'] },
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { title: 'Backend', skills: ['FastAPI', 'REST APIs', 'Node.js'] },
    { title: 'Data Science & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn'] },
    { title: 'Cơ sở dữ liệu', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'] },
    { title: 'Công cụ & DevOps', skills: ['Git', 'Docker', 'VS Code', 'Cursor', 'IntelliJ', 'Figma'] },
    { title: 'Học thuật', skills: ['Cấu trúc dữ liệu & Thuật toán', 'Lập trình Hướng đối tượng', 'Giải tích', 'Đại số tuyến tính', 'Xác suất & Thống kê'] },
  ],
};
