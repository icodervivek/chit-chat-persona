import React from "react";

const AboutPage = () => {
  return (
    <section
      className="relative isolation-isolate overflow-hidden min-h-screen text-white px-6 py-20 flex flex-col items-center"
      style={{
        background: "linear-gradient(40deg, #1a1a1a, #1a1a1a, #e0562b)",
      }}
    >
      {/* Glow Effect */}
      <div
        className="absolute -top-[150px] -left-[150px] w-[700px] h-[700px] z-[-1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,86,43,0.4) 0%, rgba(73,46,148,0) 70%)",
          filter: "blur(120px)",
        }}
      ></div>

      {/* Heading */}
      <div className="max-w-4xl text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          About <span className="text-orange-400">Chit & Chat</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Chit & Chat isn’t just an AI — it’s your friendly companion for smart,
          engaging, and human-like conversations. Whether you’re brainstorming,
          seeking advice, or just want a lighthearted chat, we make every
          conversation feel natural and fun.
        </p>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Mission */}
        <div className="bg-[#222] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe AI should be approachable, friendly, and helpful.
            Our goal is to bridge the gap between humans and machines by
            creating conversations that feel intuitive, personal, and meaningful.
          </p>
        </div>

        {/* Story */}
        <div className="bg-[#222] p-8 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            Chit & Chat was born out of a passion for making technology more
            relatable. From late-night coding sessions to countless iterations,
            we’ve built an AI experience that feels more like talking to a friend
            than a machine.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="max-w-3xl text-center mt-16">
        <p className="text-lg text-gray-400 italic">
          “We don’t just build AI to talk — we build AI to connect.”
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
