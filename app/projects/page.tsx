import { Navigation }  from "../components/nav";
import Particles from "../components/particles";
import Link from "next/link";
import { Card } from "../components/card";

export default function projects () {

    return ( 
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black">
             <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />
      <Card >
      <span className="max-w-md w-full mx-auto p-4">
      <video
                    className="rounded-lg shadow-lg"
                    width="200"
                    height="200"
                    controls
                >
                    <source src="/ei_ps_beaudin_yvens.mp4" type="video/mp4 "/>
                    Your browser does not support the video tag.
                </video>
          <span
              className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
          />
         
          <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                Projet   infographie 
              </span>
            
              <div>
              </div>
          </div>
          </span>  
  </Card>
            <h1 className="">
            Hello 
        </h1>
        <Navigation/>
        </div>
        
    )
}