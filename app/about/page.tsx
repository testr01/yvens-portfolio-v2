import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black px-4 sm:px-8 md:px-16">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={50} />
      <Navigation />
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-150 text-white font-display text-center my-4 sm:my-8">
        Hello World... Let's Ride Together !! <br />
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white font-display text-left max-w-4xl mx-4 lg:mx-8 my-4">
        Je possède -X- heures de formation et de pratique intensive en programmation orientée objet et en conception
         de bases de données relationnelles et NoSQL. J'ai également une expérience approfondie en vente, marketing, 
         gestion de personnel et design web, ce qui me permet de combiner créativité et stratégie commerciale, notamment 
         dans le développement d'applications mobiles et web. Je souhaite utiliser mes compétences pour explorer de nouvelles 
         approches alignées avec mes objectifs de carrière.
      </p>
      <p className="text-center text-white my-4">----------------------------------------------------------</p>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white font-display text-left max-w-4xl mx-4 lg:mx-8 my-4">
        I have -X- hours of training and intensive practice in object-oriented programming and in designing relational and NoSQL 
        databases. I also have extensive experience in sales, marketing, personnel management, and web design, which allows me to combine 
        creativity and business strategy, particularly in the development of mobile and web applications. I wish to use my skills 
        to explore new approaches aligned with my career goals.
      </p>
    </div>
  );
}
