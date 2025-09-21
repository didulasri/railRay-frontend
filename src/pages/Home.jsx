import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-1 left-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="h-screen w-full">
        <img
          src="https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-4.jpg"
          alt="Slide 2"
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Home;
