import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-auto min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets-cug1-825v2.tajhotels.com/video/wshbtaj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay for contrast */}
      {/* <div className="absolute inset-0  from-black/40 via-black/20 to-transparent"></div> */}

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
          Welcome to 3AcreIn
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl drop-shadow-md animate-fadeIn delay-200">
          Experience Royal Luxury & Comfort — where elegance meets tranquility.
        </p>
      </div>
    </div>
  );
};

export default Home;
