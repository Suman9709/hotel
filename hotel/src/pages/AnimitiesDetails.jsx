import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const amenitiesData = {
    "fine-dining": {
        title: "A Taste of Home – With a View",
        description: [
            "Enjoy delicious vegetarian and non-vegetarian meals freshly prepared with locally sourced ingredients. Our menu includes:",
            "• North Indian, South Indian, Chinese, and Continental cuisine",
            "• Traditional \"Farm-to-Plate\" Chulha Food experience (on prior booking)",
            "• A cozy in-house café – Aamras Café – with a capacity of 30 guests",
            "Relish every bite in the calm surroundings of nature."
        ],
        images: [
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528210/DSC_0712-min_n14gqh.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528210/DSC_0713-min_fqhwuh.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528209/WhatsApp_Image_2025-03-01_at_3.56.20_PM_12_itx029.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528209/WhatsApp_Image_2025-03-01_at_3.56.20_PM_3_iazgty.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528208/WhatsApp_Image_2025-03-01_at_3.56.20_PM_npj4q7.jpg",
        ]
    },

    "wedding-events": {
        title: "Celebrate in Style – Surrounded by Nature",
        description: [
            "3Acres Resort is a charming destination for weddings, get-togethers, and corporate events. Facilities include:",
            "• 2 Open Lawns – Accommodate 250–350 guests",
            "• Dining cum Conference Hall – Capacity of 80 guests",
            "• Spacious Parking – For up to 75 cars",
            "We provide tailored arrangements for destination weddings, social gatherings, and business retreats."
        ],
        images: [
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527281/WhatsApp_Image_2025-11-12_at_11.15.46_AM_ipidg5.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527279/WhatsApp_Image_2025-11-13_at_11.08.40_PM_idgo2u.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764529981/IMG_5184_pm0wlz.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764529981/IMG_5470_obbksf.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764529981/IMG_5568_wr51yz.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764529981/IMG_5302_zq3yvo.jpg",
        ]
    },

    "outdoor-activities": {
        title: "Fun for Everyone – Embrace the Outdoors",
        description: [
            "Make the most of your stay with a variety of engaging indoor and outdoor activities:",
            "• Outdoor: Badminton, Cricket, Volleyball, Cycling",
            "• Indoor: Carrom, Chess, Tambola",
            "• Bird Watching and Nature Walks around the property",
            "Our tranquil surroundings and fresh air (average AQI of 50) add to the charm of your stay."
        ],
        images: [
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528939/Activity_area_vbp73t.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527279/6321104812535562159_jl3qd1.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527278/6321104812535562255_axeqsi.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764528939/DSC02466_bu6uwn.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527277/6321104812535562263_ehdnuw.jpg",
            "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527279/WhatsApp_Image_2024-12-21_at_5.42.53_PM_kt1j6y.jpg",
        ]
    }
}

const AnimitiesDetails = () => {
    const { slug } = useParams()
    const amenity = amenitiesData[slug]

    const [openIndex, setOpenIndex] = useState(null)

    // Close modal with ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setOpenIndex(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    if (!amenity)
        return <h1 className="text-center mt-24 text-xl font-semibold">Amenity Not Found</h1>

    const nextImage = () => {
        setOpenIndex((prev) =>
            prev + 1 < amenity.images.length ? prev + 1 : 0
        )
    }

    const prevImage = () => {
        setOpenIndex((prev) =>
            prev === 0 ? amenity.images.length - 1 : prev - 1
        )
    }

    return (
        <div className='mt-24 px-6 sm:px-10 lg:px-16'>
            
            <h1 className='text-xl sm:text-4xl font-bold text-center text-gray-800 mb-8'
                style={{ fontFamily: "Times New Roman, serif" }}>
                {amenity.title}
            </h1>

            <div className='text-gray-700 text-sm sm:text-lg max-w-3xl mx-auto mb-12 space-y-3'>
                {amenity.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>

            {/* Image Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
                {amenity.images.map((image, index) => (
                    <div
                        key={index}
                        className='overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer'
                        onClick={() => setOpenIndex(index)}
                    >
                        <img src={image} className="w-full h-60 object-cover" />
                    </div>
                ))}
            </div>

            {/* IMAGE SLIDER MODAL */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setOpenIndex(null)}
                >
                    <div className="relative max-w-4xl w-full px-6"
                        onClick={(e) => e.stopPropagation()}>
                        
                        {/* Close Button */}
                        <button className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setOpenIndex(null)}>
                            ×
                        </button>

                        <img
                            src={amenity.images[openIndex]}
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />

                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={prevImage}
                        >
                            ‹
                        </button>

                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AnimitiesDetails
