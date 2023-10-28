import React from 'react'
import CircleCard from '../CircleCard'

const Feature = () => {

    const features = [
        {
            imgUrl: '/assets/icons/24-hours.png',
            heading: 'No Bullshit',
            content: "A Day Rent is simply for 24 hrs, We mean it."
        },
        {
            imgUrl: '/assets/icons/route.png',
            heading: 'No Riding Limits',
            content: "Odometer Won't Scare You Anymore."
        },
        {
            imgUrl: '/assets/icons/helmet.png',
            heading: 'Freebies',
            content: "Helmets Always, Sometimes More."
        },
        {
            imgUrl: '/assets/icons/cash.png',
            heading: '100% Moneyback',
            content: "Not Happy With Service, Take Your Money Back."
        },
        {
            imgUrl: '/assets/icons/person.png',
            heading: 'Verified Centers',
            content: "Every Single Center is Committed to Quality Service."
        },
        {
            imgUrl: '/assets/icons/secure-payment.png',
            heading: 'Secure Payments',
            content: "Our Payment Partners are Industry Leaders."
        },
    ]

  return (
    <div className='feature flex flex-col pb-16'>
        <div className="py-16 flex justify-center items-center text-3xl font-bold border-t-2">
            Features we offer
        </div>
        <div className="flex-1 padding-x flex flex-wrap justify-evenly items-center">
            {features.map((item, i) => (
                <div key={i} className="m-4 flex justify-center items-center flex-col space-y-1 p-2">
                    <CircleCard img={item.imgUrl} />
                    <div className="font-semibold text-xl mt-1 w-full text-center">{item.heading}</div>
                    <div className="text-sm text-gray-400 w-full text-center">{item.content}</div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Feature