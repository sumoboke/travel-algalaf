import { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import Features from "../components/Features";

const Home = () => {
  const [caros, setCaros] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col bg-gradient-to-r from-orange-400/30 via-amber-400/10">
      <div className="w-screen h-screen text-2xl relative">
        <div className="md:text-5xl text-2x antialiased absolute top-[35%] md:w-3/4 w-full z-20 text-gray-200 text-center font-extrabold tracking-tighter px-20">
          HALAL TRIPS TO
        </div>
        <div className="md:text-4xl text-xl antialiased absolute bottom-[35%] right-0 md:w-3/4 w-full z-20 text-gray-200 text-center font-extrabold tracking-tighter px-20">
          PLAN YOUR VACATION WITH US
        </div>

        <Carousel
          slideInterval={2000}
          indicators={false}
          leftControl=" "
          rightControl=" "
        >
          <div className="w-screen h-screen border relative items-center flex">
            <img
              src="images/pura.jpg"
              alt="..."
              className="w-full h-full opacity-90 static object-cover"
            />
            <h1 className="absolute mx-auto left-0 right-0 text-center font-hero tracking-widest md:text-8xl text-5xl font-bold text-white">
              B A L I
            </h1>
          </div>
          <div className="w-screen h-screen border relative items-center flex">
            <img
              src="images/bogor.jpg"
              alt="..."
              className="w-full h-full opacity-90 static object-cover"
            />
            <h1 className="absolute mx-auto left-0 right-0 text-center font-hero tracking-widest md:text-8xl text-5xl font-bold text-white">
              P U N C A K
            </h1>
          </div>
          <div className="w-screen h-screen border relative items-center flex">
            <img
              src="images/borobudur.jpg"
              alt="..."
              className="w-full h-full opacity-90 static object-cover"
            />
            <h1 className="absolute mx-auto left-0 right-0 text-center font-hero tracking-widest md:text-8xl text-5xl font-bold text-white">
              Y O G Y A K A R T A
            </h1>
          </div>
          <div className="w-screen h-screen border relative items-center flex">
            <img
              src="images/banyuwangi.jpg"
              alt="..."
              className="w-full h-full opacity-90 static object-cover"
            />
            <h1 className="absolute mx-auto left-0 right-0 text-center font-hero tracking-widest md:text-8xl text-5xl font-bold text-white">
              B A N Y U W A N G I
            </h1>
          </div>
        </Carousel>
      </div>
      <Features />
      <div className="w-screen h-screen text-2xl"> home </div>
      <div className="w-screen h-screen text-2xl"> home </div>
    </div>
  );
};

export default Home;
