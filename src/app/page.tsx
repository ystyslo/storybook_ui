import Link from "next/link";

import {
  Github,
  Linkedin,
  Mail,
  HeartHandshakeIcon,
  Rocket,
} from "lucide-react";

const LINKS = [
  {
    href: "https://github.com/ystyslo",
    icon: <Github />,
  },
  {
    href: "https://www.linkedin.com/in/yurii-styslo-608800366/",
    icon: <Linkedin />,
  },
  {
    href: "mailto:yuriistyslo@gmail.com",
    icon: <Mail />,
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="max-w-xl bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <HeartHandshakeIcon className="w-6 h-6" />
            Greetings!
          </h1>
          <p className="text-lg">
            My name is <strong>Yurii</strong>. I am a passionate Frontend
            Developer with a strong focus on creating clean, efficient, and
            user-friendly web applications. I enjoy solving complex problems and
            continuously improving my skills through real projects and teamwork.
          </p>
          <p className="text-base text-gray-600">
            Here you can explore examples and styling of components in a real
            interface.
          </p>
          <div className="flex gap-6 mt-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 hover:scale-110 transition"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="flex text-md text-gray-500 gap-2">
          <Rocket />
          <span>Developed by Yurii Styslo | 2025</span>
        </div>
      </footer>
    </div>
  );
}
