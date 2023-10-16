"use client"

import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Radio, Space } from 'antd'

import { cities, bookingTypes, times } from '@/constants'
import CustomButton from '@/components/CustomButton'
import VehicleCard from '@/components/card/VehicleCard';

const page = () => {

    const car = {
        city_mpg: '',
        year: 2013,
        make: 'Lamborgini',
        model: 'M50',
        transmission: 'Yes',
        drive: 'Yes',
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [fliterParams, setFliterParams] = useState({
        vehicle: '',
        city: '',
        bookingType: '',
        pickingDate: '',
        pickingTime: '',
        droppingDate: '',
        droppingTime: '',
    })

    let [plan, setPlan] = useState('startup')

    const handleChange = (e) => {
        setFliterParams({ ...fliterParams, [e.target.name]: e.target.value });
    }

    const handleFilter = () => {
        if (!fliterParams.vehicle || !fliterParams.city || !fliterParams.bookingType || !fliterParams.pickingDate || !fliterParams.pickingTime || !fliterParams.droppingDate || !fliterParams.droppingTime) {
            window.alert('All fields are required')
            return;
        } else {
            console.log("Sidebar -> Find clicked");
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

            <div className={`z-10 sidebar absolute sm:relative min-h-full transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} -translate-x-full sm:translate-x-0 bg-white`}>
                <Sidebar className='min-h-full'>
                    <Menu>
                        <MenuItem className='sm:hidden' onClick={() => setSidebarOpen(false)}> Close Sidebar </MenuItem>

                        <SubMenu label="Vehicle">
                            <Radio.Group onChange={handleChange} value={fliterParams.vehicle}>
                                <Space direction='vertical'>
                                    <MenuItem><Radio value={1}>Bike</Radio></MenuItem>
                                    <MenuItem><Radio value={2}>Car</Radio></MenuItem>
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Location">
                            <Radio.Group onChange={handleChange} value={fliterParams.city}>
                                <Space direction='vertical'>
                                    {cities.length && cities.map((city, i) => <MenuItem key={city.value}><Radio value={city.value}>{city.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Booking Type">
                            <Radio.Group onChange={handleChange} value={fliterParams.bookingType}>
                                <Space direction='vertical'>
                                    {bookingTypes.length && bookingTypes.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <MenuItem> Pick Up Date </MenuItem>


                        <SubMenu label="Pick Up Time" className=''>
                            <Radio.Group onChange={handleChange} value={fliterParams.pickingTime}>
                                <Space direction='vertical' className='max-h-52 overflow-y-scroll scrollbar-hide' >
                                    {times.length && times.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <MenuItem> Drop Off Date </MenuItem>

                        <SubMenu label="Drop Off Time">
                            <Radio.Group onChange={handleChange} value={fliterParams.droppingTime}>
                                <Space direction='vertical' className='max-h-52 overflow-y-scroll scrollbar-hide' >
                                    {times.length && times.map((item, i) => <MenuItem key={item.value}><Radio value={item.value}>{item.name}</Radio></MenuItem>)}
                                </Space>
                            </Radio.Group>
                        </SubMenu>

                        <SubMenu label="Sort">
                            <Radio.Group onChange={handleChange} value={fliterParams.vehicle}>
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
                        {/* <MenuItem>
                        
                        </MenuItem> */}
                        
                    </Menu>
                </Sidebar>
            </div>


            <div className="area w-full md:relative h-[100vh] overflow-y-scroll flex justify-evenly items-center flex-wrap pt-14 scrollbar-hide">
                <VehicleCard />
                <VehicleCard />
                <VehicleCard />
                <VehicleCard />
            </div>
        </div>
    )
}

export default page