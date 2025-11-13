import React from 'react';
import aboutImage from '/public/about.avif';

const About = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#001526] via-[#00263b] to-[#001526] text-white py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 animate-fadeIn pl-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#fc8b0a]">
          About <span className="text-white">3AcreIn</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Welcome to <span className="text-[#fc8b0a]] font-semibold">3AcreIn</span>, where luxury meets serenity. 
          Our mission is to offer an unforgettable stay with modern amenities, royal hospitality, 
          and personalized comfort. Nestled amidst nature, our property provides a perfect blend 
          of elegance and peace for travelers seeking a refined experience.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          From contemporary rooms to exquisite dining and world-class facilities, every corner 
          of 3AcreIn reflects sophistication and warmth. Whether you’re here for leisure or business, 
          we ensure your stay is both memorable and delightful.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#fc8b0a] text-black font-semibold rounded-lg shadow-lg hover:bg-[##fc8b0a] transition-all duration-300">
          Know More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 animate-fadeIn delay-200">
        <img
          src={aboutImage}
          alt="About 3AcreIn"
          className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default About;
