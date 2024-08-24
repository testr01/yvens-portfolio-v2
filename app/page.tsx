import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black px-4 sm:px-8 md:px-16">
      <nav className="my-8 md:my-16 animate-fade-in">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-10 md:gap-x-20 lg:gap-x-40">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg sm:text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-2.5 px-0.5 z-10 text-3xl sm:text-5xl md:text-7xl lg:text-9xl bg-gradient-to-r from-red-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display whitespace-nowrap">
        Yvens-- Portfolio
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 md:my-16 text-center animate-fade-in px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-500">
          Welcome to my Portfolio. If any questions, feel free to ask. Stay tuned for more!!
        </h2>
      </div>
    </div>
  );
}
