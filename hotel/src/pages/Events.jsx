import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "MEETINGS & CONFERENCES",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "GRAND ROYAL EVENTS",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "TIMELESS WEDDINGS",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "CULTURAL NIGHTS",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "FINE DINING EXPERIENCE",
      image:
        "https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#001526] via-[#00263b] to-[#001526] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-wide mb-4">
          EVENTS AND CONFERENCES
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          3AcreIn elevates every occasion into an awe-inspiring, immersive
          experience to cherish forever.
        </p>

        {/* Scrollable Row of Cards */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 w-max justify-center px-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative group overflow-hidden rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 min-w-[300px] sm:min-w-[340px] md:min-w-[380px]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[350px] object-cover group-hover:opacity-90 transition-opacity duration-500"
                />

                {/* Centered Title Box */}
                <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[#fc8b0a] px-8 py-3 rounded-tl-2xl rounded-tr-2xl shadow-lg border border-[#fc8b0a]/50 font-serif font-semibold text-sm md:text-base z-40">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          ← Scroll to explore more events →
        </p>
      </div>
    </div>
  );
};

export default Events;
