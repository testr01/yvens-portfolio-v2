"use client";
import { Contact, Mail, Github } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
  {
    icon: <Contact size={16} />,  // Taille réduite de l'icône
    href: "",
    label: "Téléphone",
    handle: "514-254-6011",
    image: <img src="/call.png" alt="XZIT app" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto" />
  },
  {
    icon: <Mail size={16} />,  // Taille réduite de l'icône
    href: "mailto:yvensb002@gmail.com",
    label: "Email",
    handle: "yvensb002@gmail.com",
    image: <img src="/envelop-icon.png" alt="My Email" className="w-20 sm:w-24 md:w-32 lg:w-48 h-auto" />
  },
  {
    icon: <Github size={16} />,  // Taille réduite de l'icône
    href: "https://github.com/testr01",
    label: "Github",
    handle: "testr01",
    image: <img src="/github-400.png" alt="My Github" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto" />
  },
];

export default function Example() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={50} />
      <Navigation />
      <div className="container flex items-center justify-center px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-8 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="p-2 relative flex flex-col items-center gap-2 duration-700 group md:gap-4 md:py-8 lg:pb-12 md:p-4"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-xs duration-1000 border rounded-full text-zinc-200 group-hover:text-zinc-100 group-hover:bg-zinc-800 border-zinc-500 bg-zinc-900 group-hover:border-zinc-300 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-sm sm:text-md font-medium duration-150 md:text-lg lg:text-xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-2 text-center text-xs sm:text-sm md:text-md duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <div>
                    {s.image}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
