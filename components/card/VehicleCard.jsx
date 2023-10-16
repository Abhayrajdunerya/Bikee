import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye, AiOutlineFileText, AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'

const VehicleCard = ({precise}) => {
    return (
        <div className="flex flex-col max-w-sm m-4 border sm:w-96 text-center hover:shadow-xl">
            <div className="">
                <div className="img h-56">
                    <Image src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'} height={800} width={800} className='w-full' />
                </div>
                <div className="p-2 m-2 font-semibold text-2xl">
                    TVS Sport
                </div>
                <div className="m-2 mb-4">
                    Ratings
                </div>
                {precise && <div className="m-2 mb-4 text-red-600 flex justify-center items-center">
                    <AiOutlineDelete size={25} />
                </div>}
            </div>
            {!precise && <div className="flex flex-col text-center justify-center items-center relative">
                <div className="p-2 m-2 text-2xl font-semibold">
                    ₹ 339.00 <span className='text-sm text-gray-500'>/day</span>
                </div>
                <div className="flex justify-center items-center p-2 bg-primary-blue-100 w-full">
                    Dealer Timings: <div className=""> 09:00 AM</div> - <div className=""> 09:00 PM</div>
                </div>
                <div className="flex flex-col w-full justify-center items-center relative">
                    <div className="flex justify-center items-center flex-row border-b h-full w-full">
                        <div className="p-4 border-r h-full w-1/2">
                            Annapurna Road
                        </div>
                        <div className="p-4 h-full w-1/2">
                            Deposite  ₹ 2000
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-row border-b h-full w-full">
                        <div className="p-4 border-r h-full w-1/2">
                            2021
                        </div>
                        <div className="p-4 w-1/2 h-full flex justify-center items-center cursor-pointer hover:text-primary-blue">
                            <AiOutlineFileText size={25} className='m-2' /> Terms
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full p-1 sm:p-2">
                    <div className="w-1/2 p-4 m-1 sm:m-2 flex justify-center items-center cursor-pointer border rounded-full hover:text-primary-blue">
                        <AiOutlineEye size={25} className='m-1 sm:m-2' /> View Details
                    </div>
                    <div className="w-1/2 p-4 m-1 sm:m-2 flex justify-center items-center border rounded-full cursor-pointer hover:bg-primary-blue hover:text-white hover:shadow-md transition">
                        <AiOutlineShoppingCart size={25} className='m-1 sm:m-2' /> Add To Cart
                    </div>
                </div>
                <div className="p-2 border-t text-primary-blue flex justify-center w-full items-center">
                    <Link href={'/'} className="flex justify-center items-center">
                        <FiMapPin size={25} className='m-2' /> Show Location On Map
                    </Link>
                </div>
            </div>}
        </div>
    )
}

export default VehicleCard