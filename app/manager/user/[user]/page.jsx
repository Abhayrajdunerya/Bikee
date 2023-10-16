"use client"

import { useState } from 'react'
import Image from 'next/image'

import AddProductForm2 from '@/components/forms/AddProductForm2'
import CustomButton from '@/components/CustomButton'
import VehicleCard from '@/components/card/VehicleCard'
import ManagerSidebar from '@/components/sidebar/ManagerSidebar'

const page = () => {

    const [vehicle, setVehicle] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer bg-white z-10">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Menu
                </div>
            </div>

            <ManagerSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            <div className="area w-full md:relative">
                <div className="py-12 sm:padding-x border h-[100vh] overflow-y-scroll scrollbar-hide">
                    {/* <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Available bikes</h1>
                    </div> */}
                    <div className="">
                        <div className="">
                            <div className="user-details border p-2 sm:p-4 m-2 sm:m-4 flex flex-col justify-center items-center">
                                <div className="m-2">
                                    <Image alt="userImg" className="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png" height={40} width={40} />
                                </div>

                                <div className="sm:m-2 border">
                                    <table className="min-w-full">
                                        <tbody className="">
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Name</td>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Abhay Raj Dinerya</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Email</td>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Abhay@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Mobile no.</td>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">3101256893</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Gender</td>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Male</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Address</td>
                                                <td className="px-6 py-2 max-w-md text-sm text-gray-800 dark:text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A culpa libero, numquam totam, commodi maiores nesciunt nisi nemo veritatis cum ab iusto, dolor eaque odio assumenda natus impedit accusantium non. Esse recusandae a, velit dolorum neque distinctio nisi ducimus dolor?</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex relative justify-center items-center">
                                        <div className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Aadhar Card
                                        </div>
                                        <div className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Driving License
                                        </div>
                                    </div>
                                </div>

                                <CustomButton
                                    title={`Verify User`}
                                    btnType='button'
                                    containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border my-4'
                                    handleClick={() => { }}
                                />
                            </div>

                            <div className="add-vehicle border p-2 sm:p-4 m-2 sm:m-4 flex flex-col">
                                <div className="text-xl font-semibold m-2 mb-10">Add Vehicle</div>
                                <div className="m-2">
                                    <div className="flex flexStart w-full sm:gap-4 my-4">
                                        <div className="custom-filter__btn m-1">
                                            <input id="horizontal-list-radio-license" type="radio" onChange={(e) => setVehicle(e.target.value)} value="bike" name="vehicle" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike </label>
                                        </div>
                                        <div className="custom-filter__btn m-1">
                                            <input id="horizontal-list-radio-passport" type="radio" onChange={(e) => setVehicle(e.target.value)} value="car" name="vehicle" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Car</label>
                                        </div>
                                    </div>
                                </div>

                                {vehicle && <div className="m-2">
                                    <div className="text-lg font-semibold my-2">Add {vehicle}</div>
                                    <AddProductForm2 type={vehicle} />
                                </div>}
                            </div>

                            <div className="all-bikes border p-2 sm:p-4 m-2 sm:m-4 flex flex-col">
                                <div className="text-xl font-semibold mb-10">All Bikes</div>
                                <div className="area border w-full md:relative max-h-[100vh] overflow-y-scroll flex justify-evenly items-center flex-wrap pt-14 scrollbar-hide">
                                    {/* <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  /> */}
                                </div>
                            </div>

                            <div className="all-cars border p-2 sm:p-4 m-2 sm:m-4 flex flex-col">
                                <div className="text-xl font-semibold mb-10">All Cars</div>
                                <div className="area border w-full md:relative max-h-[100vh] overflow-y-scroll flex justify-evenly items-center flex-wrap pt-14 scrollbar-hide">
                                    {/* <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  />
                    <VehicleCard precise={true}  /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default page