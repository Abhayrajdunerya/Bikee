"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { FaMotorcycle, FaPowerOff, FaRoad } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Carousel } from 'react-responsive-carousel'
import { Tabs } from 'antd'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import CustomButton from '@/components/CustomButton'
import CheckoutModel from '@/components/modal/CheckoutModel'
import { calcDailyPrice, calcHourlyPrice, calcMonthlyPrice, calcWeeklyPrice } from '@/utils/priceCalc'
import { makePayment, verifyPayment } from '@/libs/razorpay'
import { createOrder } from '@/libs/user'
import { getVehicleById } from '@/libs/vehicle'
import { toast } from 'react-toastify'

const { TabPane } = Tabs;

const page = ({ params }) => {

    useEffect(() => {
        loadVehicle();
        console.log(filterParams);
    }, [])

    const { data: session } = useSession();
    const searchParams = useSearchParams();

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)
    const [vehicle, setVehicle] = useState('')
    const [filterParams, setFilterParams] = useState({
        city: searchParams.get('city'),
        vehicleType: searchParams.get('vehicle'),
        bookingType: searchParams.get('bookingType'),
        pickingDate: searchParams.get('pickingDate'),
        droppingDate: searchParams.get('droppingDate'),
        price: searchParams.get('price'),
        bookingMode: searchParams.get('bookingMode'),
        amount: searchParams.get('amount'),
        location: searchParams.get('location'),
    })

    
    const { bookingType, pickingDate, droppingDate, vehicleType, city, price, bookingMode, amount, location } = filterParams;

    const handlePay = async () => {
        setIsOpen(false);

        try {
            const rzrPayRes = await makePayment(vehicle._id, vehicleType, bookingType, city, pickingDate, droppingDate);

            if (rzrPayRes.success) {
                initPayment(rzrPayRes.data);
            } else {
                toast.error('Failed to make payment!');
            }
            
        } catch (error) {
            console.log(error);
            toast.error('Failed to make payment!');
        }
        
    }

    const initPayment = (data) => {
        
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: 'Bikee',
            description: 'Test Transaction',
            image: session.user.image,
            order_id: data.id,
            prefill: {
                name: session?.user.name,
                email: session?.user.email,
                // contact: "9999999999"
            },
            theme: {
                color: '#0023FF'
            },
            handler: async (response) => {
                try {
                    const verifyRes = await verifyPayment(response);
    
                    if (verifyRes.success) {
                        try {
                            const createOrderRes = await createOrder(vehicle._id, vehicle.owner.center, filterParams, verifyRes.data);
                            toast.success('Order placed!')
                            router.push('/user/orders');
                        } catch (error) {
                            console.log(error);
                            toast.error('Failed to place order!')
                        }
    
                    } else {
                        toast.error(verifyRes.message);
                    }
                    
                } catch (error) {
                    console.log(error);
                    toast.error('Failed to verify payment!');
                }

            },
        }

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const loadVehicle = async () => {
        try {
            const response = await getVehicleById(params.vehicle);
            setVehicle(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load vehicle!');
        }
    }

    return (
        <div className="">

            <div className="flex flex-col md:flex-row justify-center overflow-hidden">
                {vehicle && <div className="w-full md:w-1/2 border m-2">
                    <Carousel showArrows={true} showStatus={false} >
                        {vehicle.images && vehicle.images.length && vehicle.images.map((item, i) =>
                            <div className='img'>
                                {item && item.url && <Image src={item.url} height={800} width={800} alt='vehicle' className='w-full object-contain max-h-80' />}
                            </div>
                        )}
                    </Carousel>
                </div>}
                {vehicle && <div className="features flex flex-wrap md:flex-col sm:justify-center m-2 border p-2 w-full md:w-fit md:p-4">
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2"><FaPowerOff size={20} /></div>
                        <div> {vehicle.startType}</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaGear size={20} /></div>
                        <div>{vehicle.engineCap} CC</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaRoad size={20} /></div>
                        <div>{vehicle.fuel}</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaMotorcycle size={20} /></div>
                        <div>{vehicle.mfYear}</div>
                    </div>
                </div>}
            </div>

            {vehicle && <div className="pricing bg-gray-200 p-4 py-6">
                <h3 className="mb-8 text-gray-900 dark:text-white text-center text-3xl font-bold">Price</h3>
                <div className="flex flex-col sm:flex-row">
                    <div className="m-2 flex sm:w-1/2">
                        <div className="custom-filter__btn m-2">
                            {/* <input id="horizontal-list-radio-license" type="radio" onChange={(e) => { }} value="390/day" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /> */}
                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ {vehicle.price.hourly}/hour </label>
                        </div>
                        <div className="custom-filter__btn m-2">
                            {/* <input id="horizontal-list-radio-license" type="radio" onChange={(e) => { }} value="390/day" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /> */}
                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ {vehicle.price.daily}/day </label>
                        </div>
                    </div>
                    <div className="m-2 flex sm:w-1/2">
                        <div className="custom-filter__btn m-2">
                            {/* <input id="horizontal-list-radio-passport" type="radio" onChange={(e) => { }} value="2390/week" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /> */}
                            <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ {vehicle.price.weekly}/week</label>
                        </div>
                        <div className="custom-filter__btn m-2">
                            {/* <input id="horizontal-list-radio-passpor" type="radio" onChange={(e) => { }} value="7500/month" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /> */}
                            <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ {vehicle.price.monthly}/month</label>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <CustomButton
                        handleClick={() => setIsOpen(true)}
                        title={'Book now'}
                        containerStyles={'bg-primary-blue text-white rounded-full shadow-md'}
                    />
                </div>
            </div>}

            {vehicle && <div className="vehicle_details p-2 md:p-4 flex items-center">
                {vehicle && <div className='flex justify-start items-start my-4 space-x-2'>
                    <Tabs type='card' className=''>
                        <TabPane tab='Terms' key={'1'} >
                            {vehicle.terms && <div className="sm:m-2 border p-2 w-full">
                                {vehicle.terms}
                            </div>}
                        </TabPane>
                        <TabPane tab='Specifications' >
                            <div className="sm:m-2 border p-2 w-full">
                                <table className="min-w-full">
                                    <tbody className="">
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Brand</td>
                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{vehicle.brand}</td>}
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Model</td>
                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{vehicle.model}</td>}
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Manufacturing Year</td>
                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{vehicle.mfYear}</td>}
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Fuel Type</td>
                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{vehicle.fuel}</td>}
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Engine Capacity</td>
                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{vehicle.engineCap} CC</td>}
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Start Type</td>
                                            {<td className="px-6 py-2 max-w-md text-sm text-gray-800 dark:text-gray-200">{vehicle.startType}</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>}


            </div>}
            <CheckoutModel isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicleName={`${vehicle.brand} ${vehicle.model}`} filterParams={filterParams} price={price} bookingMode={bookingMode} amount={amount} handlePay={handlePay} />
        </div>
    )
}

export default page