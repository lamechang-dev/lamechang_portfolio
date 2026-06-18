export type SkillLanguage = {
  imageUrl: string;
  officalUrl: string;
  name: string;
};

export const SKILL_LANGUAGES: Array<SkillLanguage> = [
  { imageUrl: "/img/typescript-plain.svg", officalUrl: "", name: "TypeScript" },
  { imageUrl: "/img/javascript-plain.svg", officalUrl: "", name: "JavaScript" },
  { imageUrl: "/img/nextjs-original.svg", officalUrl: "", name: "Next.js" },
  { imageUrl: "/img/materialui-original.svg", officalUrl: "", name: "MUI" },
  { imageUrl: "/img/react-original.svg", officalUrl: "", name: "React" },
  { imageUrl: "/img/babel-plain.svg", officalUrl: "", name: "Babel" },
  { imageUrl: "/img/jest-plain.svg", officalUrl: "", name: "Jest" },
  { imageUrl: "/img/php-plain.svg", officalUrl: "", name: "PHP" },
  { imageUrl: "/img/laravel-plain.svg", officalUrl: "", name: "Laravel" },
  { imageUrl: "/img/docker-plain-wordmark.svg", officalUrl: "", name: "Docker" },
];

export const BIO_ITEMS = [
  { title: "Name", value: "Ryosuke Yoshimoto" },
  { title: "Handle", value: "lamechang", href: "https://linktr.ee/lamechang" },
  {
    title: "Adrress",
    value: "Tokyo, Japan",
    href: "https://www.japan-guide.com/e/e2164.html"
  },
  { title: "Job", value: "Web Engineer（Front-End Focused）" },
  { title: "Hobby", value: "ゲーム・ドラム・音楽鑑賞・映画鑑賞" }
];
