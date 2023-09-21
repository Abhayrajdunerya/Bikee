"use client"

import { useState } from "react";

const BookingFilters = () => {

    const [data, setData] = useState({
        city: '',
        vehicle: '',
        bookingType: '',
        pickingDate: '',
        pickingTime: '',
        droppingDate: '',
        droppingTime: '',
    });

    return (
        // <div className="flex ">
        <div className="filter flex flex-wrap py-8 border flex-1 padding-x justify-center items-center">
            
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-license" type="radio" value="bike" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bike </label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-passport" type="radio" value="car" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Car</label>
                    </div>
                </li>
            </ul>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Select city</label>
                <select id="underline_select" className="">
                    <option selected>Select city</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="gwalior">Gwalior</option>
                    <option value="indore">Indore</option>
                    <option value="sagar">Sagar</option>
                    <option value="jabalpur">Jabalpur</option>
                </select>
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Booking Type</label>
                <select id="underline_select" className="">
                    <option selected>Booking Type</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">City</label>
                <select id="underline_select" value={data.city} className="">
                    <option selected>City</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="gwalior">Gwalior</option>
                    <option value="indore">Indore</option>
                    <option value="sagar">Sagar</option>
                    <option value="jabalpur">Jabalpur</option>
                </select>
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Booking Type</label>
                <select id="underline_select" value={data.bookingType} className="">
                    <option selected>Booking Type</option>
                    <option value="bhopal">Hourly</option>
                    <option value="gwalior">Daily</option>
                    <option value="indore">Weekly</option>
                    <option value="sagar">Monthly</option>
                </select>
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Picking Up Date</label>
                <input type="date" value={data.pickingDate} />
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Picking Time</label>
                <input type="time" value={data.pickingTime} />
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Dropping Off Date</label>
                <input type="date" value={data.droppingDate} />
            </div>
            <div className="m-2">
                <label htmlFor="underline_select" className="sr-only">Dropping Off Time</label>
                <input type="time" value={data.droppingTime} />
            </div>
        </div>
        // </div>

    )
}

export default BookingFilters