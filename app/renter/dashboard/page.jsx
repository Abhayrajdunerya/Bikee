'use client'

import IncomeCard from '@/components/card/IncomeCard'
import IncomeChart from '@/components/chart/IncomeChart'
import RenterSidebar from '@/components/sidebar/RenterSidebar'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'



const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Menu
                </div>
            </div>

            <RenterSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


            <div className="area w-full md:relative">
                <div className="py-12 p-2 sm:padding-x border h-[100vh] overflow-y-scroll scrollbar-hide">
                    <div className="">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Dashboard</h1>
                            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                        </div>
                        <div className="flex flex-col gap-2 md:flex-row flex-wrap">
                            <div className="mb-4">
                                <IncomeChart />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <IncomeCard income={77700} type={'Total'} />
                                <IncomeCard income={6900} type={'Monthly'} />
                            </div>
                        </div>
                    </div>
                    <div className="my-4 flex flex-col">
                        <h3 className='text-2xl font-bold mb-4'>Credit History</h3>
                        <div className="border rounded-lg p-2">
                            <table className="min-w-full ">
                                <tbody className="">
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-gray-800 dark:text-gray-200">Date</td>
                                        {<td className="px-6 py-2 whitespace-nowrap text-lg font-bold text-green-600 dark:text-green-300">₹ 1000</td>}
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page