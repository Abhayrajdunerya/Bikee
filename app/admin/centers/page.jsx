'use client'

import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import AdminSidebar from '@/components/sidebar/AdminSidebar'
import { getCentersByCity } from '@/libs/user'
import CenterCard from '@/components/card/CenterCard'
import CustomButton from '@/components/CustomButton'

import { centerCities } from '@/constants/index'

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [city, setCity] = useState('');
    const [centers, setCenters] = useState([]);

    const loadCenters = async (city) => {
        try {
            const response = await getCentersByCity(city)
            if (response.length === 0) {
                toast.error('No centers are there!')
            }
            setCenters(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load centers!')
        }
    }

    const serachCity = () => {
        if (!city) {
            window.alert('Select City');
            return;
        } else {
            loadCenters(city);
        }
    }

    return (
        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Menu
                </div>
            </div>

            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            <div className="area w-full md:relative">
                <div className="py-12 padding-x border h-[100vh] overflow-y-scroll scrollbar-hide">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Centers</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        
                        <div className="w-full">
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
                                    handleClick={() => serachCity()}
                                />
                            </div>

                            <div className="m-2">
                                {centers && centers.length && centers.map((item, i) => <CenterCard key={item._id} center={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page