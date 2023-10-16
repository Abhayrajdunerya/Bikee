'use client'

import React, { useState } from 'react'
import { centerLocation } from '@/constants/index'
import CustomButton from '@/components/CustomButton'
import BecomeRenterInstruct from '@/components/BecomeRenterInstruct'

const page = () => {

    const [city, setCity] = useState('');
    const [location, setLocation] = useState('')

    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div className="relative m-2 mb-4 w-full">
                    <label className="leading-7 text-sm text-gray-700">City</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)} name="city" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                        <option value="">-- Select city --</option>
                        {centerLocation.length > 0 && centerLocation.map((item, i) => <option key={item.city} value={i}> {item.city}</option>)}
                    </select>
                </div>
                <div className="relative m-2 mb-4 w-full">
                    <label className="leading-7 text-sm text-gray-700">Location</label>
                    <select value={location} onChange={(e) => setLocation(e.target.value)} name="location" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                        <option value="">-- Select location --</option>
                        {centerLocation[city] && centerLocation[city].locations.length > 0 && centerLocation[city].locations.map((item, i) => <option key={item} value={i}>{item}</option>)}
                    </select>
                </div>
            </div>
            <CustomButton
                title={`Go`}
                btnType='button'
                containerStyles='text-white rounded-full bg-primary-blue m-2 min-w-[130px] z-10 shadow-md border'
                handleClick={() => { }}
            />

            <div className="">
                <BecomeRenterInstruct />
            </div>
        </div>
    )
}

export default page