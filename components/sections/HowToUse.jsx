import React from 'react'
import CircleCard from '../CircleCard'

const HowToUse = () => {

    const steps = [
        {
            imgUrl: '/assets/icons/key.png',
            heading: 'Select Rental Product',
            content: 'You can search & select product from our wide range.',
        },
        {
            imgUrl: '/assets/icons/select-to-cart.png',
            heading: 'Book Product',
            content: 'Easily book bikes & cars from "Book Now" button.',
        },
        {
            imgUrl: '/assets/icons/pick-up.png',
            heading: 'Pick Your Product',
            content: 'Find the pickup location and pick a product.',
        },
        {
            imgUrl: '/assets/icons/ride-your-bike.png',
            heading: 'Ride Anywhere',
            content: 'We do not have kms limit.',
        },
    ]

  return (
    <div className='feature flex flex-col pb-16 bg-gray-200'>
        <div className="py-16 flex justify-center items-center text-3xl font-bold border-t-2">
            How to use
        </div>
        <div className="flex-1 padding-x flex flex-wrap justify-evenly items-center flex-col md:flex-row">
            {steps.map((item, i) => (
                <div key={i} className="m-4 flex justify-center items-center flex-col space-y-1 p-2 max-w-xs">
                    <CircleCard img={item.imgUrl} />
                    <div className="font-semibold text-xl mt-1 w-full text-center">{item.heading}</div>
                    <div className="text-sm text-gray-400 w-full text-center">{item.content}</div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default HowToUse