"use client"

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Radio, Space } from 'antd'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { compareAsc, format } from 'date-fns'

import { cities, bookingTypes, times } from '@/constants'
import CustomButton from '@/components/CustomButton'
import VehicleCard from '@/components/card/VehicleCard';

import { getAvlVehiclesForUser } from '@/libs/vehicle'
import { toast } from 'react-toastify';

const page = () => {

    const searchParams = useSearchParams();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [filterParams, setFilterParams] = useState({
        city: searchParams.get('city'),
        vehicleType: searchParams.get('vehicle'),
        bookingType: searchParams.get('bookingType'),
        pickingDate: searchParams.get('pickingDate'),
        droppingDate: searchParams.get('droppingDate'),
    })

    const [vehicles, setVehicles] = useState([])
    
    useEffect(() => {
        console.log(filterParams);
        loadVehicles();
    }, [])

    const loadVehicles = async () => {
        try {
            const response = await getAvlVehiclesForUser(filterParams)
            setVehicles(response);
            if (response.length === 0) {
                toast.error('No vehicles are found!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load vehicles!');
        }
    }
    

    const handleChange = (name, value) => {
        setFilterParams({ ...filterParams, [name]: value });
    }

    const handleFilter = () => {
        if (!filterParams.vehicle || !filterParams.city || !filterParams.bookingType || !filterParams.pickingDate || !filterParams.droppingDate) {
            window.alert('All fields are required')
            return;
        } else {
            loadVehicles();
        }
    }

    return (
        <div className='relative flex'>

            <div className="sm:hidden mobile flex absolute border-t justify-center items-center w-full h-10 cursor-pointer z-10 bg-white">
                <div onClick={() => setSidebarOpen(true)} className="flex w-full justify-center items-center border h-full">
                    Filter
                </div>
                {/* <div className="flex w-1/2 justify-center items-center border h-full">
                    Sort
                </div> */}
            </div>

            {/* <div className={`z-10 sidebar absolute sm:relative min-h-full transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} -translate-x-full sm:translate-x-0 bg-white`}>
                <Sidebar className='min-h-full'>
                    <Menu>
                        <MenuItem className='sm:hidden' onClick={() => setSidebarOpen(false)}> Close Sidebar </MenuItem>

                        <SubMenu label="Vehicle">
                            <Radio.Group onChange={(e) => handleChange('vehicle', e.target.value)} value={filterParams.vehicle}>
                                <Space direction='vertical'>
                                    <MenuItem><Radio value={'bike'}>Bike</Radio></MenuItem>
                                    <MenuItem><Radio value={'car'}>Car</Radio></MenuItem>
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Location">
                            <Radio.Group onChange={(e) => handleChange('city', e.target.value)} value={filterParams.city}>
                                <Space direction='vertical'>
                                    {cities.length && cities.map((city, i) => <MenuItem key={city.value}><Radio value={city.value}>{city.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Booking Type">
                            <Radio.Group onChange={(e) => handleChange('bookingType', e.target.value)} value={filterParams.bookingType}>
                                <Space direction='vertical'>
                                    {bookingTypes.length && bookingTypes.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Pick Up Date">
                            
                            <DatePicker onChange={(date) => handleChange('pickingDate', date)} placeholderText="Picking Date" minDate={moment().toDate()} dateFormat="dd/MM/yyyy" className="w-fit custom-filter__btn border border-gray-200" />
                        </SubMenu>

                        <SubMenu label="Pick Up Time" className=''>
                            <Radio.Group onChange={(e) => handleChange('pickingTime', e.target.value)} value={filterParams.pickingTime}>
                                <Space direction='vertical' className='max-h-52 overflow-y-scroll scrollbar-hide' >
                                    {times.length && times.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Drop Off Date">
                            <DatePicker onChange={(date) => handleChange('droppingDate', date)} placeholderText="Picking Date" minDate={moment().toDate()} dateFormat="dd/MM/yyyy" className="w-fit custom-filter__btn border border-gray-200" />
                        </SubMenu>

                        <SubMenu label="Drop Off Time">
                            <Radio.Group onChange={(e) => handleChange('droppingTime', e.target.value)} value={filterParams.droppingTime}>
                                <Space direction='vertical' className='max-h-52 overflow-y-scroll scrollbar-hide' >
                                    {times.length && times.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Sort">
                            <Radio.Group onChange={(e) => handleChange('pickingDate', e.target.value)} value={filterParams.vehicle}>
                                <Space direction='vertical'>
                                    <MenuItem><Radio value={1}>Relevant</Radio></MenuItem>
                                    <MenuItem><Radio value={2}>Popular</Radio></MenuItem>
                                    <MenuItem><Radio value={3}>Price - Low to High</Radio></MenuItem>
                                    <MenuItem><Radio value={4}>Price - High to Low</Radio></MenuItem>
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                    </Menu>
                    <Menu className='mt-4'>
                        <MenuItem>
                            <CustomButton
                                title={'Apply'}
                                handleClick={() => handleFilter()}
                                containerStyles={'bg-primary-blue text-white rounded-full shadow-md'}
                            />
                        </MenuItem>
                        
                        
                    </Menu>
                </Sidebar>
            </div> */}


            <div className="area w-full md:relative h-[100vh] overflow-y-scroll flex justify-evenly items-center flex-wrap pt-14 scrollbar-hide">
                {vehicles && vehicles.length ? vehicles.map((item, i) => <VehicleCard key={item._id} precise={false} vehicle={item} filterParams={filterParams} />)
                : <div className="flex text-2xl font-bold items-center justify-center">
                    No vehicles are found!
                </div>
            }
            </div>
        </div>
    )
}

export default page