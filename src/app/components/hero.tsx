import React from "react";
import FeatureCards from "./FeatureCards";

const HeroSection = () => {
  return (
    <section
      className="relative isolation-isolate overflow-hidden min-h-screen text-white px-6 py-16 flex flex-col items-center"
      style={{
        background: "linear-gradient(40deg, #1a1a1a, #1a1a1a, #e0562b)",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] z-[-1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,86,43,0.5) 0%, rgba(73,46,148,0) 70%)",
          filter: "blur(100px)",
        }}
      ></div>

      {/* Content */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Let&apos;s Chit & <span className="text-orange-400">Chat</span>
        </h1>
        <p className="text-lg text-gray-300">
          Let’s Chit & Chat with AI Persona brings your conversations to life with a smart,
          friendly, and engaging virtual companion.
        </p>
       
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-6xl">
        <FeatureCards />
      </div>
    </section>
  );
};

export default HeroSection;
