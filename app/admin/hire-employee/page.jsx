'use client'

import UserCard from '@/components/card/UserCard';
import AdminSidebar from '@/components/sidebar/AdminSidebar'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import { addEmployee } from '@/libs/admin';
import { getCentersByCity, getUserByEmail } from '@/libs/user';
import InputField from '@/components/forms/InputField';
import CustomButton from '@/components/CustomButton';
import { centerCities, positions } from '@/constants';

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [city, setCity] = useState('');
    const [centers, setCenters] = useState([]);
    const [email, setEmail] = useState('')

    const [center, setCenter] = useState('');
    const [position, setPosition] = useState('');
    const [user, setUser] = useState('');


    useEffect(() => {
        loadCenters();
    }, [city])

    const loadCenters = async () => {
        try {
            const response = await getCentersByCity(city)
            setCenters(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load centers!')
        }
        
    }

    const searchUser = async () => {
        if (!city || !center || !email) {
            window.alert('All fields are required!');
            return;
        } else {
            try {
                const response = await getUserByEmail(email)
                if (!response) {
                    toast.error('No such user exists!');
                }
                setUser(response);
            } catch (error) {
                console.log(error);   
                toast.error('Failed to fetch user!')
            }

        }
    }

    const createEmployee = async () => {
        if (!city || !center || !email || !user) {
            window.alert('All fields are required');
            return;
        } else {
            try {
                const response = await addEmployee(user._id, position, center)
                toast.success('Successfuly added employee!')
            } catch (error) {
                console.log(error);
                toast.error('Failed to add employee!')
            }
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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Add Employee</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        
                        <div className="w-full">
                            <div className="mb-6">
                                <div className="relative m-2 mb-4 w-full">
                                    <label className="leading-7 text-sm text-gray-700">City</label>
                                    <select value={city} onChange={(e) => setCity(e.target.value)} name="city" placeholder='Select City' className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                                        <option value="">-- Select City --</option>
                                        {centerCities.length && centerCities.map((item, i) => <option value={item} className='capitalize'>{item}</option>)}
                                    </select>
                                </div>
                                <div className="relative m-2 mb-4 w-full">
                                    <label className="leading-7 text-sm text-gray-700">Centers</label>
                                    <select value={center} onChange={(e) => setCenter(e.target.value)} name="center" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                                        <option value="">-- Select center --</option>
                                        {centers && centers.length > 0 && centers.map((item, i) => <option key={item._id} value={item._id}>{item?.address?.address}</option>)}
                                    </select>
                                </div>

                                <div className="relative m-2 mb-4 w-full">
                                    <label className="leading-7 text-sm text-gray-700">Position</label>
                                    <select value={position} onChange={(e) => setPosition(e.target.value)} name="position" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                                        <option value="">-- Select Position --</option>
                                        {positions && positions.length > 0 && positions.map((item, i) => <option key={item} value={item}>{item}</option>)}
                                    </select>
                                </div>

                                <div className="relative mb-4 w-full">
                                    <InputField
                                        title="User email"
                                        type={'email'}
                                        state={email}
                                        placeholder="Enter user email"
                                        setState={setEmail}
                                        containerStyle={'m-2 mb-4 w-full'}
                                    />
                                </div>

                                <CustomButton
                                    title={`Search`}
                                    btnType='button'
                                    containerStyles='text-white rounded-full m-2 bg-primary-blue min-w-[130px] z-10 shadow-md border'
                                    handleClick={() => searchUser()}
                                />
                            </div>

                            <div className="m-2">
                                {user && <UserCard user={user} createEmployee={createEmployee} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page