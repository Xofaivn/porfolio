import { useMemo } from 'react';
import { type Language, useLanguage } from '../context/LanguageContext';

type Dictionary = Record<
  Language,
  Record<
    | 'nav.about'
    | 'nav.info'
    | 'nav.projects'
    | 'nav.stacks'
    | 'nav.contact'
    | 'common.backToTop'
    | 'sections.about.title'
    | 'sections.about.subtitle'
    | 'sections.about.role'
    | 'sections.info.title'
    | 'sections.projects.title'
    | 'sections.stacks.title'
    | 'sections.contact.title'
    | 'sections.contact.subtitle'
    | 'footer.license',
    string
  >
>;

const dictionary: Dictionary = {
  en: {
    'nav.about': 'About Me',
    'nav.info': 'Info',
    'nav.projects': 'Projects',
    'nav.stacks': 'Stacks / Skills',
    'nav.contact': 'Contact',
    'common.backToTop': 'Back to top',
    'sections.about.title': 'Software Developer',
    'sections.about.subtitle': '🎓 I\'m currently a 3rd-year student at Ho Chi Minh City University of Technology (HCMUT) 💻 Passionate about Software Development and Machine Learning',
    'sections.about.role': 'React • TypeScript • Tailwind',
    'sections.info.title': 'Info',
    'sections.projects.title': 'Projects',
    'sections.stacks.title': 'Stacks / Skills',
    'sections.contact.title': 'Contact',
    'sections.contact.subtitle': 'Let\'s work together. Feel free to reach out!',
    'footer.license': '@From Xofai with love',
  },
  vi: {
    'nav.about': 'Giới thiệu',
    'nav.info': 'Thông tin',
    'nav.projects': 'Dự án',
    'nav.stacks': 'Công nghệ / Kỹ năng',
    'nav.contact': 'Liên hệ',
    'common.backToTop': 'Về đầu trang',
    'sections.about.title': 'SOFTWARE DEVELOPER',
    'sections.about.subtitle':
      '🎓 Tôi hiện là sinh viên năm 3 tại Đại học Công nghệ Thành phố Hồ Chí Minh (HCMUT) 💻 Passionate about Software Development and Machine Learning',
    'sections.about.role': 'React • TypeScript • Tailwind',
    'sections.info.title': 'Thông tin',
    'sections.projects.title': 'Dự án',
    'sections.stacks.title': 'Công nghệ / Kỹ năng',
    'sections.contact.title': 'Liên hệ',
    'sections.contact.subtitle': 'Hợp tác ngay nhé. Bạn có thể liên hệ bất cứ lúc nào!',
    'footer.license': '@From Xofai with love',
  },
};

export function useI18n() {
  const { language } = useLanguage();
  const t = useMemo(() => (key: keyof Dictionary['en']) => dictionary[language][key] ?? String(key), [
    language,
  ]);
  return { t };
}

