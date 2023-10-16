"use client"

import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";


import CustomButton from '@/components/CustomButton'
import CustomSelect from '@/components/CustomSelect'
import {cities, bookingTypes, times} from '@/constants'

const BookingFilters = () => {

    const [city, setCity] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [bookingType, setBookingType] = useState('');
    const [pickingDate, setPickingDate] = useState('');
    const [pickingTime, setPickingTime] = useState('');
    const [droppingDate, setDroppingDate] = useState('');
    const [droppingTime, setDroppingTime] = useState('');

    const handleSubmit = () => {
        if (!city || !vehicle || !bookingType || !pickingDate || !pickingTime || !droppingDate || !droppingTime) {
            window.alert('All fields are required');
            return;
        } else {
            console.log("Home -> Find clicked");

        }

    }

    return (
        // <div className="flex ">
        <div className="filter flex flex-wrap py-16 border flex-1 padding-x justify-center items-center bg-gray-200">
            <div className="flex flex-col">
                <h3 className="mb-8 text-gray-900 dark:text-white text-center text-3xl font-bold">Rentals, Redefined</h3>
                <div className="flex">
                    {/* <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"> */}
                        <div className="custom-filter__btn m-2">
                            <input id="horizontal-list-radio-license" type="radio" onChange={(e) => setVehicle(e.target.value)} value="bike" name="vehicle" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike </label>
                        </div>
                    {/* </li> */}
                    {/* <li className="w-full dark:border-gray-600"> */}
                        <div className="custom-filter__btn m-2">
                            <input id="horizontal-list-radio-passport" type="radio" onChange={(e) => setVehicle(e.target.value)} value="car" name="vehicle" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Car</label>
                        </div>
                    {/* </li> */}
                </div>

                <div className="flex flex-wrap">
                    <div className="flex sm:flex-col">
                        <div className="m-2">
                            <CustomSelect title={'Select City'} options={cities} selected={city} setSelected={setCity} />
                        </div>
                        <div className="m-2">
                            <CustomSelect title={'Booking Type'} options={bookingTypes} selected={bookingType} setSelected={setBookingType} />
                        </div>
                    </div>

                    <div className="flex sm:flex-col">
                        <div className="m-2">
                            <label htmlFor="underline_select" className="sr-only">Picking Up Date</label>
                            {/* <input onChange={(e) => setPickingDate(e.target.value)} name="pickingDate" type="date" value={pickingDate} className="w-fit custom-filter__btn border border-gray-200" placeholder="Picking Date" /> */}
                            <DatePicker selected={pickingDate} onChange={(date) => setPickingDate(date)} placeholderText="Picking Date" minDate={moment().toDate()} dateFormat="dd/MM/yyyy" className="w-fit custom-filter__btn border border-gray-200" />
                        </div>
                        <div className="m-2">
                            <CustomSelect title={'Picking Time'} options={times} selected={pickingTime} setSelected={setPickingTime} />
                        </div>
                    </div>

                    <div className="flex sm:flex-col">
                        <div className="m-2">
                            <label htmlFor="underline_select" className="sr-only">Dropping Off Date</label>
                            <DatePicker selected={droppingDate} onChange={(date) => setDroppingDate(date)} placeholderText="Dropping Date" minDate={moment().toDate()} dateFormat="dd/MM/yyyy" className="w-fit custom-filter__btn border border-gray-200" />
                            {/* <input onChange={(e) => setDroppingDate(e.target.value)} name="droppingDate" type="date" value={droppingDate} className="w-fit custom-filter__btn border border-gray-200" placeholder="Dropping Date" /> */}
                        </div>
                        <div className="m-2">
                            <CustomSelect title={'Dropping Time'} options={times} selected={droppingTime} setSelected={setDroppingTime} />
                        </div>
                    </div>      
                </div>

                <div className="m-2">
                    <CustomButton 
                        title={'Find'}
                        containerStyles={'bg-primary-blue text-white rounded-full shadow-md'}
                        handleClick={() => handleSubmit()}
                    />
                </div>
            </div>
        </div>
        // </div>

    )
}

export default BookingFilters