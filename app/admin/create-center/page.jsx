'use client'

import AdminSidebar from '@/components/sidebar/AdminSidebar'
import React, { useState } from 'react'
import {toast} from 'react-toastify'
import CustomButton from '@/components/CustomButton'
import InputField from '@/components/forms/InputField'

import { centerCities } from '@/constants/index'
import { addNewCenter } from '@/libs/admin'

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [address, setAddress] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    const resetState = () => {
        setName('');
        setEmail('');
        setMobile('');
        setPincode('');
        setState('');
        setCity('');
        setArea('');
        setAddress('');
        setLat('');
        setLng('');
    }

    const addCenter = async () => {
        if (!name || !email || !mobile || !pincode || !state || !city || !area || !address || !lat || !lng) {
            window.alert('All fields are required!')
            return;
        } else {
            try {
                const response = await addNewCenter(name, email, mobile, {pincode, state, city, area, address}, {lat, lng});
                toast.success('Added new center!');
                resetState();
            } catch (error) {
                console.log(err);
                toast.error('Failed to create center!')
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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Create center</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2 flex-col">

                        <div className="m-2 mb-6">
                            <div className="flex flex-col sm:flex-row">
                                <InputField
                                    title="Name"
                                    state={name}
                                    type={'text'}
                                    placeholder="Enter center name"
                                    setState={setName}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                                <InputField
                                    title="Email"
                                    state={email}
                                    type={'email'}
                                    placeholder="Enter center email"
                                    setState={setEmail}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <InputField
                                    title="Mobile no."
                                    state={mobile}
                                    type={'number'}
                                    placeholder="Enter center mobile no."
                                    setState={setMobile}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                                <div className="relative m-2 mb-4 w-full">
                                    <label className="leading-7 text-sm text-gray-700">City</label>
                                    <select value={city} onChange={(e) => setCity(e.target.value)} name="city" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                                        <option value="">-- Select City --</option>
                                        {centerCities && centerCities.length && centerCities.map((item, i) => <option value={item} className='capitalize'>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row">
                                <InputField
                                    title="State"
                                    state={state}
                                    type={'text'}
                                    placeholder="Enter state"
                                    setState={setState}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                                <InputField
                                    title="Pin code"
                                    state={pincode}
                                    type={'number'}
                                    placeholder="Enter pin code"
                                    setState={setPincode}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <InputField
                                    title="Area"
                                    state={area}
                                    type={'text'}
                                    placeholder="Enter area"
                                    setState={setArea}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <InputField
                                    title="Address"
                                    state={address}
                                    isTextArea={true}
                                    type={'text'}
                                    placeholder="Enter full address"
                                    setState={setAddress}
                                    containerStyle={'m-2 mb-4 w-full'}
                                />
                            </div>

                            <div className="map mb-4">
                                <div className="flex flex-col sm:flex-row">
                                    <InputField
                                        title="Latitide"
                                        state={lat}
                                        type={'text'}
                                        placeholder="Enter latitude"
                                        setState={setLat}
                                        containerStyle={'m-2 mb-4 w-full'}
                                    />
                                    <InputField
                                        title="Longitude"
                                        state={lng}
                                        type={'text'}
                                        placeholder="Enter longitude"
                                        setState={setLng}
                                        containerStyle={'m-2 mb-4 w-full'}
                                    />
                                </div>
                            </div>

                            <CustomButton
                                title={`Add`}
                                btnType='button'
                                containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border'
                                handleClick={() => addCenter()}
                            />
                        </div>

                    

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page