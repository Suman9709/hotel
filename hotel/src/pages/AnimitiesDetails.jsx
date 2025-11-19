import React from 'react'
import { useParams } from 'react-router-dom'
import amenitiesData from '../Data/amenitiesData';
const AnimitiesDetails = () => {
    const { slug } = useParams();
    const amenity = amenitiesData[slug]

    if (!amenity) return <h1>Amenity Not Found</h1>;

    return (
        <div className='mt-24 p-6'>
            <h1 className='text-3xl font-semibold mb-8 text-center'>{amenity.title}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    amenity.image.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={amenity.title}
                            className="rounded-xl w-full h-60 object-cover"
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default AnimitiesDetails