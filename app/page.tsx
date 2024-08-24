import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];
/*
tout les pages sont dans le dossier app directement. Il ne sont pas dans le dossier Pages
*/
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-x-40">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
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
    <h1 className="py-3.5 px-0.5 z-10 text-4xl bg-gradient-to-r from-red-600 via-orange-600 to-yellow-400 bg-clip-text text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap">
  Yvens-- Portfolio
</h1>


      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl text-zinc-500 ">
          Welcome in my Portfolio. If any questions, Feel free to ask. Stay tuned For More!!
        </h2>
      </div>
    </div>
  );

}
