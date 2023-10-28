'use client'

import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import ShowRenterVehicle from '@/components/ShowRenterVehicle'
import RenterSidebar from '@/components/sidebar/RenterSidebar'
import { getRenterBikes } from '@/libs/bike'
import { getRenterCars } from '@/libs/car'
import { getRenter } from '@/libs/renter'
import { useSession } from 'next-auth/react'

const page = () => {

    const { data: session } = useSession();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [renter, setRenter] = useState('')
    const [bikes, setBikes] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        console.log("session");
        if (session?.user) {
            loadRenter(session?.user?.id);
        }
    }, [session])

    useEffect(() => {
        console.log("vehicles");
        if (renter) {
            loadBikes(renter._id);
            loadCars(renter._id);
        }
    }, [renter])

    const loadRenter =  async (_id) => {
        try {
            const response = await getRenter(_id); 
            setRenter(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load renter!');
        }
    }

    const loadBikes = async(owner) => {
        try {
            const response = await getRenterBikes(owner);
            setBikes(response);
            if (response.length === 0) {
                toast.error('No bikes are available!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load bikes!')
        }
    }

    const loadCars = async(owner) => {
        try {
            const response = await getRenterCars(owner);
            setCars(response);
            if (response.length === 0) {
                toast.error('No cars are available!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load cars!');
        }
    }

    return (
        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Menu
                </div>
            </div>

            <RenterSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            <div className="area w-full md:relative">
                <div className="py-12 padding-x border h-[100vh] overflow-y-scroll scrollbar-hide">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My vehicles</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-col flex-wrap -m-2">
                        {bikes && bikes.length ? <ShowRenterVehicle type={'Bikes'} vehicles={bikes} showDelete={false} /> : <div className='m-2 text-sm font-medium'>No bikes are available</div>}
                        {cars && cars.length ? <ShowRenterVehicle type={'Cars'} vehicles={cars} showDelete={false} /> : <div className='m-2 text-sm font-medium'>No cars are available</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page