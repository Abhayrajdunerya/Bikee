"use client"

import React, { useEffect, useState } from 'react'
import OrderCard from '@/components/card/OrderCard';
import ManagerSidebar from '@/components/sidebar/ManagerSidebar';
import {toast} from 'react-toastify'
import { getOrders } from '@/libs/manager';

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        loadOrders();
    }, [])

    const loadOrders = async () => {
        try {
            const response = await getOrders()
            if (response.length === 0) {
                toast.error('No bookings available!');
            }
            setOrders(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load bookings!')
        }
    }

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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Bookings</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">

                        {orders && orders.length && orders.map((item, i) => <OrderCard key={item._id} order={item} precise={false} />)}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page