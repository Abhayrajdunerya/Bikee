"use client"

import React, { useEffect, useState } from 'react'
import OrderCard from '@/components/card/OrderCard';
import { getOrders } from '@/libs/user';
import { toast } from 'react-toastify';


const page = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, [])

    const loadOrders = async () => {
        try {
            const response = await getOrders();
            setOrders(response);
            if (response.length === 0) {
                toast.error('No orders are there!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load orders!');
        }
    }

  return (
    <div>
        <div className="">
            <h1 className='font-bold text-2xl text-center p-2 my-10'>Order history</h1>

            <div className="sm:p-2 flex flex-wrap">
                {orders && orders.length && orders.map((item, i) => <OrderCard key={item._id} order={item} precise={true} />)}
            </div>

        </div>
    </div>
  )
}

export default page