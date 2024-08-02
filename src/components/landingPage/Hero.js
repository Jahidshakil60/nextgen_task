import React from "react";

function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/landingPage/hero.png')" }}
    >
      <div className="absolute z-10 inset-0 bg-[#002f80d1] opacity-75"></div>
      <div className="flex flex-col items-center relative z-20 max-w-[800px] mx-auto text-center mt-10">
        <div className="h-[90px] w-[90px] bg-white"></div>
        <h1 className="text-4xl font-bold text-yellow-500 mt-4 mb-2">
          WELCOME TO GRAND SHOP
        </h1>
        <p className="text-xl mb-6 text-white">A Single Line of Motto Text</p>
        <a
          href="#"
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Main CTA 1 →
        </a>
      </div>
    </section>
  );
}

export default Hero;
