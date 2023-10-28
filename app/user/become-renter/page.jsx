'use client'

import React, { useState } from 'react'
import { getCentersByCity, makeRenterRequest } from '@/libs/user'
import CenterCard from '@/components/card/CenterCard'
import CustomButton from '@/components/CustomButton'

import { centerCities, becomeRenterInstructions } from '@/constants/index'
import { toast } from 'react-toastify'

const page = () => {

    const [city, setCity] = useState('');
    const [centers, setCenters] = useState([]);
    const [center, setCenter] = useState('')

    const loadCenters = async (city) => {
        try {
            const response = await getCentersByCity(city)
            setCenters(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load centers!');
        }
    }

    const serachCenters = () => {
        if (!city) {
            window.alert('Select City');
            return;
        } else {
            loadCenters(city);
        }
    }

    const makeRequest = async (centerId) => {
        if (!city || !centerId) {
            window.alert('All fields are required!');
            return;
        } else {
            try {
                const response = await makeRenterRequest(centerId);
                if (response?.profile) {
                    toast.success('You have successfuly requested!')
                } else {
                    toast.error(response?.message)
                }
            } catch (error) {
                console.log(error);
                toast.error('Failed to make request!');
            }
        }
    }

    return (
        <div className='relative min-h-[100vh]'>
            {/* <div className="bg-orange-500 text-sm text-white rounded-md p-4 my-4 mx-4" role="alert">
                <span className="font-bold">Warning</span> Please complete your profile first!
            </div> */}
            <div className="flex flex-col py-8 text-center w-full mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Find Center</h1>
                {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
            </div>
            <div className="w-full padding-x">
                <div className="my-8 p-4 bg-blue-100 rounded border border-blue-600">
                    <div className="text-lg font-semibold my-4">Instructions: </div>
                    {becomeRenterInstructions && becomeRenterInstructions.length && becomeRenterInstructions.map((item, i) => 
                        <div key={item}>
                            {'-> '} {item}
                        </div>
                    )}
                </div>
                <div className="mb-6">
                    <div className="relative m-2 mb-4 w-full">
                        {/* <label className="leading-7 text-sm text-gray-700">City</label> */}
                        <select value={city} onChange={(e) => setCity(e.target.value)} name="city" placeholder='Select City' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                            <option value="">-- Select City --</option>
                            {centerCities.length && centerCities.map((item, i) => <option value={item} className='capitalize'>{item}</option>)}
                        </select>
                    </div>

                    <CustomButton
                        title={`Search`}
                        btnType='button'
                        containerStyles='text-white rounded-full m-2 bg-primary-blue min-w-[130px] z-10 shadow-md border'
                        handleClick={() => serachCenters()}
                    />
                </div>

                <div className="m-2 max-h-[100vh] overflow-y-scroll scrollbar-hide">
                    {centers && centers.length && centers.map((item, i) => <CenterCard key={item._id} center={item} isUser={true} makeRequest={makeRequest} />)}
                </div>

                {/* <div className="">
                    <div className="text-lg font-semibold my-4">Instructions: </div>
                    {becomeRenterInstructions && becomeRenterInstructions.length && becomeRenterInstructions.map((item, i) => 
                        <div key={item}>
                            {'-> '} {item}
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default page