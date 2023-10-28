"use client"

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays, differenceInMonths, differenceInWeeks, setHours, setMinutes, getHours } from 'date-fns'

import CustomButton from '@/components/CustomButton'
import CustomSelect from '@/components/CustomSelect'
import {cities, bookingTypes, times} from '@/constants'

const BookingFilters = () => {

    const router = useRouter();

    const [city, setCity] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [bookingType, setBookingType] = useState('');
    const [pickingDate, setPickingDate] = useState('');
    const [droppingDate, setDroppingDate] = useState('');

    

    const handleSubmit = () => {
        if (!checkValidation()) {
            console.log('validation false');
            return;
        } else {
            console.log('validation true');
            router.push(`/shop?city=${city?.value}&vehicle=${vehicle}&bookingType=${bookingType?.value}&pickingDate=${pickingDate}&droppingDate=${droppingDate}`);
        }
    }

    const checkValidation = () => {
        if (!city || !vehicle || !bookingType || !pickingDate || !droppingDate) {
            window.alert('All fields are required');
            return false;
        } else if (bookingType === 'hourly' && checkHours(pickingDate, droppingDate) === false) {
            window.alert("Please enter correct picking & dropping time for booking type 'hourly'");
            return false;
        } else if (bookingType === 'daily' && checkDays(pickingDate, droppingDate) === false) {
            window.alert("Please select atleast 1 day for booking type 'daily'");
            return false;
        } else if (bookingType === 'weekly' && checkWeeks(pickingDate, droppingDate) ===false) {
            window.alert("Please select atleast 1 week for booking type 'weekly'");
            return false;
        } else if (bookingType === 'monthly' && checkMonths(pickingDate, droppingDate) === false) {
            window.alert("Please select atleast 1 month for booking type 'monthly'");
            return false;
        }

        return true;
    }

    const checkHours = (pick, drop) => {

        const pickHrs = new Date(pick).getHours();
        const dropHrs = new Date(drop).getHours();

        const hrs = dropHrs-pickHrs;
        
        if (hrs <= 0) {
            return false;
        } else {   
            return true;
        }
    }

    const checkDays = (startDate, endDate) => {
        const startDateInDays = differenceInDays(startDate, new Date(0));
        const endDateInDays = differenceInDays(endDate, new Date(0));

        const dayDiff = (endDateInDays - startDateInDays);

        if (dayDiff <= 0) {
            return false;
        } else {   
            return true;
        }
    }

    const checkWeeks = (startDate, endDate) => {
        const startDateInWeeks = differenceInWeeks(startDate, new Date(0));
        const endDateInWeeks = differenceInWeeks(endDate, new Date(0));

        const weekDiff = (endDateInWeeks - startDateInWeeks);

        if (weekDiff <= 0) {
            return false;
        } else {
            return true;
        }
    }

    const checkMonths = (startDate, endDate) => {
        const startDateInMonths = differenceInMonths(startDate, new Date(0));
        const endDateInMonths = differenceInMonths(endDate, new Date(0));

        const monthDiff = (endDateInMonths - startDateInMonths);

        if (monthDiff <= 0) {
            return false;
        } else {   
            return true;
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
                    <div className="flex">
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
                            <DatePicker selected={pickingDate} 
                                onChange={(date) => setPickingDate(date)} 
                                placeholderText="Picking Date" minDate={moment().toDate()} 

                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="time"

                                // minTime={setHours(setMinutes(new Date(), 0), new Date().getHours())}
                                // maxTime={setHours(setMinutes(new Date(), 30), 23)}

                                // dateFormat="dd/MM/yyyy"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="w-fit custom-filter__btn border border-gray-200" 
                            />
                        </div>
                        {/* <div className="m-2">
                            <CustomSelect title={'Picking Time'} options={times} selected={pickingTime} setSelected={setPickingTime} />
                        </div> */}
                    </div>

                    <div className="flex sm:flex-col">
                        <div className="m-2">
                            <label htmlFor="underline_select" className="sr-only">Dropping Off Date</label>
                            <DatePicker selected={droppingDate} 
                                onChange={(date) => setDroppingDate(date)} 
                                placeholderText="Dropping Date" minDate={moment().toDate()} 

                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={60}
                                timeCaption="time"

                                // minTime={setHours(setMinutes(new Date(), 0), pickingDate)}
                                // maxTime={setHours(setMinutes(new Date(), 30), 23)}

                                // dateFormat="dd/MM/yyyy"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                className="w-fit custom-filter__btn border border-gray-200" 
                            />
                            {/* <input onChange={(e) => setDroppingDate(e.target.value)} name="droppingDate" type="date" value={droppingDate} className="w-fit custom-filter__btn border border-gray-200" placeholder="Dropping Date" /> */}
                        </div>
                        {/* <div className="m-2">
                            <CustomSelect title={'Dropping Time'} options={times} selected={droppingTime} setSelected={setDroppingTime} />
                        </div> */}
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