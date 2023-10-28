"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import BookingStatus from '@/components/badge/BookingStatus'
import OrderDetails from '@/components/modal/OrderDetails'
import UserThumbnail from '@/components/UserThumbnail'
import { calcDailyPrice, calcHourlyPrice, calcMonthlyPrice, calcWeeklyPrice } from '@/utils/priceCalc'
import { FiMapPin } from 'react-icons/fi'
import { updateOrderStatus } from '@/libs/manager'
import { toast } from 'react-toastify'

const OrderCard = ({ order, precise }) => {

    const [isOpen, setIsOpen] = useState(false);
    const { bookingInfo, vehicle, orderStatus, orderedBy, center, _id } = order;
    const { bookingType, city, vehicleType, pickingDate, droppingDate } = bookingInfo;
    const { hourly, daily, weekly, monthly } = vehicle.price;

    const [status, setStatus] = useState(orderStatus)

    let bookingMode = 'hour'
    let price = 1;
    let amount = 1;

    let color = 'pink'

    switch (status) {
        case 'not processed':
            color = 'pink'
            break;

        case 'booked':
            color = 'blue'
            break;

        case 'cancelled':
            color = 'red'
            break;

        case 'returned':
            color = 'green'
            break;

        default:
            break;
    }

    switch (bookingType) {
        case 'hourly':
            price = vehicle.price.hourly;
            bookingMode = 'hour'
            amount = calcHourlyPrice(pickingDate, droppingDate, hourly);
            break;

        case 'daily':
            price = vehicle.price.daily;
            bookingMode = 'day'
            amount = calcDailyPrice(pickingDate, droppingDate, daily);
            break;

        case 'weekly':
            price = vehicle.price.weekly;
            bookingMode = 'week'
            amount = calcWeeklyPrice(pickingDate, droppingDate, weekly);
            break;

        case 'monthly':
            price = vehicle.price.monthly;
            bookingMode = 'month'
            amount = calcMonthlyPrice(pickingDate, droppingDate, monthly)
            break;

        default:
            break;
    }

    const handleStatus = async (newStatus) => {
        
        try {
            const response = await updateOrderStatus(_id, newStatus)
            setStatus(newStatus);
            toast.success('Status updated!');
        } catch (error) {
            console.log(error);
            toast.error('Failed to update order status!')
        }
    }

    return (
        // <div className="">
        <div className="order-card flex flex-col max-w-sm m-4 border sm:w-96 text-center hover:shadow-xl justify-center items-center">
            <div className="">
                <div className="img h-56">
                    {vehicle.images && vehicle.images.length && <Image src={vehicle.images[0].url} alt='vehicleImg' height={800} width={800} className='w-full object-contain max-h-56' />}
                </div>
                <div className="p-2 m-2 font-semibold text-2xl">
                    {vehicle.brand} {' '} {vehicle.model}
                </div>
                <div className="m-2 mb-4">
                    <BookingStatus color={color} text={status} />
                </div>


            </div>
            {!precise && <UserThumbnail img={orderedBy.image} name={orderedBy.name} />}
            <button onClick={() => setIsOpen(true)} className="m-2 mb-4 p-2 px-6 bg-primary-blue text-white text-base font-semibold shadow-md rounded-full max-w-fit">
                View Order Details
            </button>
            {center && center.location && precise && <div className="p-2 my-4 border-t text-primary-blue flex justify-center w-full items-center">
                <a
                    href={`https://maps.google.com/?q=${center.location.lat},${center.location.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center">
                    <FiMapPin size={25} className='m-2' /> Show pick-up location
                </a>
            </div>}
            {!precise && <div className='my-2'>
                <div className="relative m-2 mb-4 w-full">
                    {/* <label className="leading-7 text-sm text-gray-700">Brand</label> */}
                    <select value={status} onChange={(e) => handleStatus(e.target.value)} name="brand" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                        <option value="not processed">Not processed</option>
                        <option value="booked">Booked</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="returned">Returned</option>
                    </select>
                </div>
            </div>}
            <OrderDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} bookingInfo={bookingInfo} price={price} amount={amount} bookingMode={bookingMode} />
        </div>
        // </div>
    )
}

export default OrderCard