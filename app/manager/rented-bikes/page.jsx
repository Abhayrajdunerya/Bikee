'use client'

import AdminSidebar from '@/components/sidebar/ManagerSidebar'
import React, {useState, useEffect} from 'react'
import { getRentedVehicles } from '@/libs/vehicle'
import VehicalCard from '@/components/card/VehicleCard'
import { toast } from 'react-toastify'

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [bikes, setBikes] = useState([]);

    const filterParams = {
        bookingType: '', 
        pickingDate: '', 
        droppingDate: '', 
        vehicleType: '', 
        city: ''
    }

    useEffect(() => {
        loadBikes();
    }, [])

    const loadBikes = async () => {
        try {
            const response = await getRentedVehicles('bike')
            setBikes(response);
            if (response.length === 0) {
                toast.success('No bikes are rented!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load bikes!');
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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Rented bikes</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {bikes && bikes.length && bikes.map((item, i) => <VehicalCard key={item._id} precise={true} vehicle={item} filterParams={filterParams} showDelete={false} showEdit={false} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page