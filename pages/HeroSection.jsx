import React, { useState } from "react";
import Image from "next/image";
import Bobr from "../images/Bobr.jpg";

export default function HeroSection() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfoBox = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="w-screen flex flex-col items-center pb-12 hero-text-light hero-text-dark">
      <div className="flex items-center justify-center mt-6">
        <h1 className="text-6xl mr-4">Kevin</h1>
        <Image src={Bobr} alt="Picture of me" height="300" className="rounded-lg" />
        <h1 className="text-6xl ml-4">Sodini</h1>
      </div>

      <button 
        onClick={toggleInfoBox} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Here For More Info
      </button>

      {showInfo && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md max-w-md mx-auto">
          <h3>My name is Kevin Sodini and this is my portfolio!</h3>
          <h1 className="text-2xl">Frontend Dev</h1>
          <p>I am a student at ChasAcademy. In this school we are working on a variety of knowledge.</p>
          <h2>My knowledge</h2>
          <div className="space-x-6">
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Vite</span>
          </div>
        </div>
      )}
    </div>
  );
}