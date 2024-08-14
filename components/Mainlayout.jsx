import React from "react";

const Mainlayout = () => {
  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50" />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        <div className="space-y-8">
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
            Welcome to Recipe AI <span className="text-palette-primary"></span>
          </h1>
          <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
            Get personlised recipes according to your preference and items at
            your disposal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
