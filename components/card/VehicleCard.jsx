import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineFileText, AiOutlineShoppingCart, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import CheckoutModel from '@/components/modal/CheckoutModel'
import TermsModal from '@/components/modal/TermsModel'
import { calcDailyPrice, calcHourlyPrice, calcMonthlyPrice, calcWeeklyPrice } from '@/utils/priceCalc'
import { makePayment, verifyPayment } from '@/libs/razorpay'
import { createOrder } from '@/libs/user'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { deleteVehicleById } from '@/libs/vehicle'

const VehicleCard = ({ precise, vehicle, filterParams, showDelete = true, showEdit = true }) => {

    const { data: session } = useSession();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenTerms, setIsOpenTerms] = useState(false)

    const location = vehicle?.owner?.center?.location;

    let price = 0;
    let amount = 0;
    let bookingMode = 'hour';

    const { hourly, daily, weekly, monthly } = vehicle.price;
    const { bookingType, pickingDate, droppingDate, vehicleType, city } = filterParams;

    switch (bookingType) {
        case 'hourly':
            price = hourly;
            bookingMode = 'hour'
            amount = calcHourlyPrice(pickingDate, droppingDate, hourly);
            break;

        case 'daily':
            price = daily;
            bookingMode = 'day'
            amount = calcDailyPrice(pickingDate, droppingDate, daily);
            break;

        case 'weekly':
            price = weekly;
            bookingMode = 'week'
            amount = calcWeeklyPrice(pickingDate, droppingDate, weekly);
            break;

        case 'monthly':
            price = monthly;
            bookingMode = 'month'
            amount = calcMonthlyPrice(pickingDate, droppingDate, monthly)
            break;

        default:
            break;
    }

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
                            const createOrderRes = await createOrder(vehicle._id, vehicle.owner.center, filterParams, verifyRes.data)
                            toast.success('Order placed!');

                            router.push('/user/orders');
                        } catch (error) {
                            console.log(error);
                            toast.error('Failed to place order!');
                        }
    
                    } else {
                        toast.error(verifyRes.message);
                    }
                } catch (error) {
                    console.log(error);
                    toast.error('Failed to make payment!');
                }

            },
        }

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    const handleDelete = async () => {
        if (window.confirm('Are you really want to delete?')) {
            try {
                const response = await deleteVehicleById(vehicle._id)
                toast.success('Vehicle is deleted!');
                window.location.reload();
            } catch (error) {
                console.log(error);
                toast.error('Failed to delete vehicle!')
            }
        }
    }

    const handleEdit = () => {
        router.push(`/manager/user/edit-vehicle/${vehicle._id}`)
    }

    return (
        <div className="flex flex-col max-w-sm m-4 border sm:w-96 text-center hover:shadow-xl">
            <div className="">
                <Link href={!precise ? `/vehicle/${vehicle._id}?&vehicle=${vehicleType}&city=${city}&bookingType=${bookingType}&pickingDate=${pickingDate}&droppingDate=${droppingDate}&price=${price}&bookingMode=${bookingMode}&amount=${amount}&location=${location}` : ''} className="img h-56">
                    {vehicle && vehicle.images && vehicle.images.length && <Image src={vehicle.images[0].url} alt='vehicleImg' height={800} width={800} className='object-contain max-h-56' />}
                </Link>
                <Link href={!precise ? `/vehicle/${vehicle._id}?&vehicle=${vehicleType}&city=${city}&bookingType=${bookingType}&pickingDate=${pickingDate}&droppingDate=${droppingDate}&price=${price}&bookingMode=${bookingMode}&amount=${amount}&location=${location}` : ''} className="p-2 m-2 font-semibold text-2xl">
                    {vehicle && vehicle.brand} {' '} {vehicle && vehicle.model}
                </Link>
                {/* <div className="m-2 mb-4"> */}
                <div className="m-2">
                    {/* Ratings */}
                </div>
                <div className="m-2 mb-4 flex">
                    {precise && showDelete && <div className="text-red-600 w-1/2 p-2 flex justify-center items-center ">
                        <AiOutlineDelete className='cursor-pointer' onClick={handleDelete} size={25} />
                    </div>}
                    {precise && showEdit && <div className="text-yellow-400 w-1/2 p-2 flex justify-center items-center ">
                        <AiOutlineEdit className='cursor-pointer' onClick={handleEdit} size={25} />
                    </div>}
                </div>
            </div>
            {!precise && <div className="flex flex-col text-center justify-center items-center relative">
                <div className="p-2 m-2 text-2xl font-semibold">
                    ₹ {price} <span className='text-sm text-gray-500'>/{bookingMode}</span>
                </div>
                <div className="flex justify-center items-center p-2 bg-primary-blue-100 w-full">
                    Center Timings: <div className="">{' '} 24x7</div>
                </div>
                <div className="flex flex-col w-full justify-center items-center relative">
                    <div className="flex justify-center items-center flex-row border-b h-full w-full">
                        {/* <div className="p-4 border-r h-full w-1/2">
                            Annapurna Road
                        </div> */}
                        <div className="p-4 h-full w-full font-medium">
                            Deposite  ₹ {vehicle.depositeAmt ? vehicle.depositeAmt : 'NA'}
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-row border-b h-full w-full">
                        <div className="p-4 border-r h-full w-1/2">
                            {vehicle.mfYear}
                        </div>
                        <div className="p-4 w-1/2 h-full flex justify-center items-center cursor-pointer">
                            {vehicle.terms && <div onClick={() => setIsOpenTerms(true)} className="flex justify-center items-center hover:text-primary-blue">
                                <AiOutlineFileText size={25} className='m-2' /> <div className="flex justify-center items-center">Terms</div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full p-1 sm:p-2">
                    <Link href={`/vehicle/${vehicle._id}?city=${city}&vehicle=${vehicleType}&bookingType=${bookingType}&pickingDate=${pickingDate}&droppingDate=${droppingDate}&price=${price}&bookingMode=${bookingMode}&amount=${amount}&location=${location}`} className="w-1/2 p-4 m-1 sm:m-2 flex justify-center items-center cursor-pointer border rounded-full hover:text-primary-blue">
                        <AiOutlineEye size={25} className='m-1 sm:m-2' /> View Details
                    </Link>
                    <div onClick={() => setIsOpen(true)} className="w-1/2 p-4 m-1 sm:m-2 flex justify-center items-center border rounded-full cursor-pointer hover:bg-primary-blue hover:text-white hover:shadow-md transition">
                        <AiOutlineShoppingCart size={25} className='m-1 sm:m-2' /> Book Now
                    </div>
                </div>
                {location && <div className="p-2 border-t text-primary-blue flex justify-center w-full items-center">
                    <a 
                        href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noreferrer"            
                        className="flex justify-center items-center">
                            <FiMapPin size={25} className='m-2' /> Show Location On Map
                    </a>
                </div>}
            </div>}
            {!precise && vehicle.terms && <TermsModal isOpen={isOpenTerms} terms={vehicle.terms} closeModal={() => setIsOpenTerms(false)} />}
            {!precise && <CheckoutModel isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicleName={`${vehicle.brand} ${vehicle.model}`} filterParams={filterParams} price={price} bookingMode={bookingMode} amount={amount} handlePay={handlePay} />}
        </div>
    )
}

export default VehicleCard