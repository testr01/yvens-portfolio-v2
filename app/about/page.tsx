import { Navigation }  from "../components/nav";
import Particles from "../components/particles";

export default function About() {

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-blue via-zinc-600/70 to-black">
       
            <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={50}
      />
            <Navigation/>
            <h1 className="lg:text-xl font-medium duration-150 xl:text-3xl text-white font-display text-center">
               Hello World... Let's Ride Together !! <br/>
            </h1>
            <p className="lg:text-base font-normal xl:text-lg text-white  font-display text-left  max-w-4xl mx-4 lg:mx-8 text-left">
            Je possède -X- heures de formation et de pratique intensive en programmation orientée objet et en conception 
            de bases de données relationnelles et NoSQL. J'ai également une expérience approfondie en vente, marketing, 
            gestion de personnel et design web, ce qui me permet de combiner créativité et stratégie commerciale, notamment 
            dans le développement d'applications mobiles et web. Je souhaite utiliser mes compétences pour explorer de nouvelles 
            approches alignées avec mes objectifs de carrière.
            </p>
            <p>--------------------------------------------------------------------------</p>
            <p className="lg:text-base font-normal xl:text-lg text-white  font-display text-left  max-w-4xl mx-4 lg:mx-8 text-left">
             I have -X- hours of training and intensive practice in object-oriented programming and in designing 
            relational and NoSQL databases. I also have extensive experience in sales, marketing, personnel management,
            and web design, which allows me to combine creativity and business strategy, particularly in the development
            of mobile and web applications. 
            I wish to use my skills to explore new approaches aligned with my career goals."  
            </p>
        </div>
        
    );
}
