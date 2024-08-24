"use client";
import { Facebook, Github, Mail, School, Twitter, Contact } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";



const socials = [
	{
		icon: <Contact size={20} />,
		href: "",
		label: "Téléphone",
		handle: "514-254-6011",
		image: <img src="/call.png" alt="XZIT app" className="w-60 h-auto"/>
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:yvensb002@gmail.com",
		label: "Email",
		handle: "yvensb002@gmail.com",
		image: <img src="/envelop-icon.png"  alt="My Email"  className="w-96 h-auto " />
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/testr01",
		label: "Github",
		handle: "testr01",
		image: <img src="/github-400.png" alt="My Github " />
	},
];

export default function Example() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black">
			<Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-zinc-100 group-hover:bg-zinc-800 border-zinc-500 bg-zinc-900 group-hover:border-zinc-300 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-xl text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
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
