"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {toast} from 'react-toastify'

import AddProductForm2 from '@/components/forms/AddProductForm2'
import ManagerSidebar from '@/components/sidebar/ManagerSidebar'

import { getRegisteredUser } from '@/libs/manager'
import ShowRenterVehicle from '@/components/ShowRenterVehicle'
import { getRenterBikes } from '@/libs/bike'
import { getRenterCars } from '@/libs/car'

const page = ({params}) => {

    const [loading, setLoading] = useState(false);
    const [vehicle, setVehicle] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [renter, setRenter] = useState('')
    const [bikes, setBikes] = useState([]);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        loadRenter(params.renterId);
        loadBikes(params.renterId);
        loadCars(params.renterId);
    }, [])

    const loadRenter =  async (_id) => {
        try {
            const response = await getRegisteredUser(_id);
            setRenter(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load renter!');
        }
    }

    const loadBikes = async(owner) => {
        try {
            const response = await getRenterBikes(owner);
            setBikes(response);
            if (response.length === 0) {
                toast.error('No bikes are available!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load bikes!')
        }
    }

    const loadCars = async(owner) => {
        try {
            const response = await getRenterCars(owner);
            setCars(response);
            if (response.length === 0) {
                toast.error('No cars are available!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load cars!');
        }
    }

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
                                    {renter && renter.user && renter.user.image && <Image alt="userImg" className="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border" src={renter.user.image} height={200} width={200} />}
                                </div>

                                <div className="sm:m-2 border">
                                    <table className="min-w-full">
                                        <tbody className="">
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Name</td>
                                                {renter && renter.user && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{renter.user.name}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Email</td>
                                                {renter && renter.user && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{renter.user.email}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Mobile no.</td>
                                                {renter && renter.user && renter.user.mobile && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{renter.user.mobile}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Gender</td>
                                                {renter && renter.user && renter.user.gender && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{renter.user.gender}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Address</td>
                                                {renter && renter.user && renter.user.address && <td className="px-6 py-2 max-w-md text-sm text-gray-800 dark:text-gray-200">{renter.user.address.address}</td>}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex relative justify-center items-center">
                                        <a target='_blank' href={renter.user ? renter.user.aadhar[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomgehRWSWCDN0p7QY_I5YRv3BN7KoWt5LkA&usqp=CAU'} className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Aadhar Card
                                        </a>
                                        <a target='_blank' href={renter.user ? renter.user.drivingLicense[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomgehRWSWCDN0p7QY_I5YRv3BN7KoWt5LkA&usqp=CAU'} className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Driving License
                                        </a>
                                    </div>
                                </div>
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
                                    {loading ? <div className="text-lg text-red-600 font-semibold my-2">Adding {vehicle} ...</div> : <div className="text-lg font-semibold my-2">Add {vehicle}</div>}
                                    <AddProductForm2 type={vehicle} renterId={params.renterId} setLoading={setLoading} />
                                </div>}
                            </div>

                            
                            {bikes && bikes.length && <ShowRenterVehicle type={'Bikes'} vehicles={bikes} />}
                            {cars && cars.length && <ShowRenterVehicle type={'Cars'} vehicles={cars} />}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default page