import React from 'react'
import spacelogo from '/arealogo.png'
import bedlogo from '/bedlogo.png'
import extralogo from '/bathroomlogo.png'
import { Link } from 'react-router-dom'

const RoomMiniDetails = ({ keyName,
    img, roomType, space, bed, GardenView,
    extra, price1, breakfast, price2, lunch,
    price3, price4, li1, li2, li3, li4, li5, li6
}) => {

    // DATE FORMAT
    const date = new Date();
    const cancellationDate = new Date(date);
    cancellationDate.setDate(cancellationDate.getDate() + 1);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = cancellationDate.toLocaleDateString(undefined, options);

    return (
        <div className="w-full border rounded-2xl shadow-md bg-white 
                        p-3 sm:p-4 md:p-6 
                        flex flex-row gap-3 sm:gap-4 md:gap-6">

            {/* LEFT SECTION */}
            <div className="w-1/3 flex flex-col gap-2 sm:gap-3">

                {/* Room Image */}
                <div className="w-full 
                                h-32 sm:h-44 md:h-60 
                                overflow-hidden rounded-lg">
                    <img
                        src={img}
                        alt={roomType}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>

                {/* Room Title */}
                <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900">
                    {roomType}
                </h2>

                {/* Key Features */}
                <ul className="flex flex-wrap gap-1 sm:gap-3 text-gray-700 mt-1 sm:mt-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {space}
                    </li>

                    {GardenView && (
                        <li className="flex items-center gap-1 sm:gap-2">
                            <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {GardenView}
                        </li>
                    )}

                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={bedlogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {bed}
                    </li>

                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={extralogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {extra}
                    </li>
                </ul>

                {/* Amenities */}
                <div className="mt-1 sm:mt-2">
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-base">
                        Amenities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm">
                        <li>✔ {li1}</li>
                        <li>✔ {li2}</li>
                        <li>✔ {li3}</li>
                        <li>✔ {li4}</li>
                        <li>✔ {li5}</li>
                        <li>✔ {li6}</li>
                    </ul>
                </div>

                <Link
                    to={`/rooms/details/${keyName}`}
                    className="text-[#fc8b0a] font-semibold mt-1 sm:mt-3 text-xs sm:text-base hover:underline"
                >
                    View More Details →
                </Link>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-2/3 grid grid-cols-1 gap-2 sm:gap-4">

                {/* PLAN BOX STYLE */}
                {[
                    {
                        title: "Room Available with Free Cancellation",
                        price: price1,
                        breakfast: null,
                        lunch: null
                    },
                    {
                        title: "Free Cancellation | Breakfast Only",
                        price: price2,
                        breakfast: breakfast,
                        lunch: null
                    },
                    {
                        title: "Free Cancellation | Breakfast + Lunch/Dinner",
                        price: price3,
                        breakfast: breakfast,
                        lunch: lunch
                    },
                    {
                        title: "Free Cancellation | Breakfast + Lunch + Dinner",
                        price: price4,
                        breakfast: breakfast,
                        lunch: lunch
                    }
                ].map((plan, i) => (
                    <div key={i}
                        className="flex justify-between gap-2 sm:gap-4 
                                   border rounded-xl bg-gray-50 
                                   p-2 sm:p-4">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col gap-1 sm:gap-2 w-1/2 text-xs sm:text-sm md:text-base">
                            <h1 className="text-gray-700 font-medium text-sm sm:text-lg">
                                {plan.title}
                            </h1>

                            {plan.breakfast && (
                                <p>🍳 {plan.breakfast} Breakfast included</p>
                            )}

                            {plan.lunch && (
                                <p>🍽️ {plan.lunch} Lunch or Dinner included</p>
                            )}

                            <p className="text-green-700">
                                ✔ Free Cancellation before {formattedDate}
                            </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col items-center w-1/2">
                            <p className="text-gray-500 text-xs sm:text-base">Price per night</p>

                            <h3 className="text-lg sm:text-3xl font-bold text-gray-700 mt-1">
                                ₹{plan.price}
                            </h3>

                            <p className="text-gray-500 text-xs sm:text-sm">+ taxes & fees</p>

                            <button className="mt-2 sm:mt-4 w-full bg-[#fc8b0a] text-white 
                                               py-1 sm:py-3 rounded-lg sm:rounded-xl 
                                               text-xs sm:text-lg font-semibold hover:bg-[#e07a05]">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default RoomMiniDetails
