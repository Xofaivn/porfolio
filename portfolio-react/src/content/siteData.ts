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
  en: ['OISP Scholarship (Sem 3 - 2023)', 'Outstanding Academic Performance (Sem 2 2023, 1 & 2 - 2024)'],
  vi: ['Học bổng OISP (Kì 3 - 2023)', 'Thành tích học tập xuất sắc (Kỳ 2 - 2023, Kỳ 1 & 2 - 2024)'],
};

export const englishCertificatesByLang: Record<Language, string[]> = {
  en: ['IELTS 6.5 (2023)'],
  vi: ['IELTS 6.5 (2023)'],
};

export const education: Education = {
  degreeByLang: {
    en: 'Bachelor of Computer Science',
    vi: 'Cử nhân Khoa học Máy tính',
  },
  schoolByLang: {
    en: 'Bách Khoa HCMUT',
    vi: 'Bách Khoa HCMUT',
  },
  schoolFullNameByLang: {
    en: 'Ho Chi Minh University of Technology, National University Ho Chi Minh City',
    vi: 'Trường Đại học Bách Khoa, ĐHQG TP.HCM',
  },
  levelByLang: {
    en: 'Undergraduate',
    vi: 'Undergraduate',
  },
  startDate: 'Aug 2023',
  endDate: 'Present',
  schoolWebsite: 'https://hcmut.edu.vn/',
};

export const projects: Project[] = [
  {
    name: 'Learning Management System',
    descriptionByLang: {
      en: 'Full-stack LMS with course management and user enrollment. Designed database schema, created UML diagrams and system architecture.',
      vi: 'Hệ thống quản lý học tập với quản lý khóa học và đăng ký. Thiết kế schema cơ sở dữ liệu và diagram kiến trúc.',
    },
    tech: ['React', 'TypeScript', 'FastAPI', 'MySQL'],
    githubUrl: 'https://github.com/Xofaivn/CNPM',
  },
  {
    name: 'Tutor Support System',
    descriptionByLang: {
      en: 'Tutoring platform with booking, messaging, and reporting. UI/UX designed with Figma, responsive frontend implementation.',
      vi: 'Nền tảng hỗ trợ gia sư với đặt lịch, nhắn tin. Thiết kế UI/UX với Figma, giao diện phản hồi.',
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    githubUrl: 'https://github.com/Xofaivn/lms-db',
  },
  {
    name: 'IoT System (Multidisciplinary Project)',
    descriptionByLang: {
      en: 'Built backend with FastAPI and responsive frontend with Vite + React.',
      vi: 'Xây dựng backend FastAPI và frontend phản hồi với Vite + React.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'TailwindCSS'],
    githubUrl: '',
  },
];

export const stacksByLang: Record<Language, SkillGroup[]> = {
  en: [
    { title: 'Languages', skills: ['Java', 'Python', 'C/C++', 'SQL', 'R'] },
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { title: 'Backend', skills: ['FastAPI', 'REST APIs', 'Node.js'] },
    { title: 'Data Science & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn'] },
    { title: 'Databases', skills: ['MySQL', 'MongoDB', 'Microsoft SQL Server'] },
    { title: 'Tools & DevOps', skills: ['Git', 'Docker', 'VS Code', 'Cursor', 'IntelliJ', 'Figma'] },
    { title: 'Concepts', skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Calculus', 'Linear Algebra', 'Probability & Statistics'] },
  ],
  vi: [
    { title: 'Ngôn ngữ', skills: ['Java', 'Python', 'C/C++', 'SQL', 'R'] },
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'] },
    { title: 'Backend', skills: ['FastAPI', 'REST APIs', 'Node.js'] },
    { title: 'Data Science & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn'] },
    { title: 'Cơ sở dữ liệu', skills: ['MySQL', 'MongoDB', 'Microsoft SQL Server'] },
    { title: 'Công cụ & DevOps', skills: ['Git', 'Docker', 'VS Code', 'Cursor', 'IntelliJ', 'Figma'] },
    { title: 'Học thuật', skills: ['Cấu trúc dữ liệu & Thuật toán', 'Lập trình Hướng đối tượng', 'Giải tích', 'Đại số tuyến tính', 'Xác suất & Thống kê'] },
  ],
};

