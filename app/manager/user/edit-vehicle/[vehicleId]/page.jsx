'use client'

import ManagerSidebar from '@/components/sidebar/ManagerSidebar'
import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import { getVehicleById, updateVehicleById } from '@/libs/vehicle'
import AddProductForm2 from '@/components/forms/AddProductForm2'
import UpdateVehicleForm2 from '@/components/forms/UpdateVehicleForm2'

const page = ({params}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     loadVehicle();
    //     console.log(vehicle);
    // }, [])

    // const loadVehicle = async () => {
    //     try {
    //         const response = await getVehicleById(params.vehicleId)
    //         setVehicle(response);
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //         toast.success('Failed to load vehicle!')
    //     }
    // }

    return (
        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Menu
                </div>
            </div>

            <ManagerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            <div className="area w-full md:relative">
                <div className="py-12 padding-x border h-[100vh] overflow-y-scroll scrollbar-hide">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Edit vehicle</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    {loading && <div className="text-red-600 font-semibold">
                        loading ...
                    </div>}
                    <div className="flex flex-wrap -m-2">
                        <UpdateVehicleForm2 vehicleId={params.vehicleId} setLoading={setLoading} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page