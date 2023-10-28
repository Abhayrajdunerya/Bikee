'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomButton from '@/components/CustomButton'
import ManagerSidebar from '@/components/sidebar/ManagerSidebar'
import { useRouter } from 'next/navigation'

import { getNewUserRequest, verifyUser } from '@/libs/manager'
import { toast } from 'react-toastify'

const page = ({params}) => {

    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [request, setRequest] = useState('');

    useEffect(() => {
        loadRequest(params.reqId);
    }, [])

    const loadRequest = async(reqId) => {
        try {
            const response = await getNewUserRequest(reqId);
            // console.log(response);
            setRequest(response);
        } catch (error) {
            console.log(error);
            toast.error('Failed to load user request!');
        }
    }

    const handleClick = async () => {
        const {_id, user, center} = request;
        if (window.confirm('Is user verified?')) {
            try {
                const res = await verifyUser(_id, user, center)
                toast.success('User is verified!');
                router.push('/manager/dashboard');
            } catch (error) {
                console.log(error);
                toast.error('Failed to verify user!');
            }
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
                    <div className="">
                        <div className="">
                            <div className="user-details border p-2 sm:p-4 m-2 sm:m-4 flex flex-col justify-center items-center">
                                <div className="m-2">
                                    {request && request.user.image && <Image alt="userImg" className="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full border" src={request.user.image} height={200} width={200} />}
                                </div>

                                <div className="sm:m-2 border">
                                    <table className="min-w-full">
                                        <tbody className="">
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Name</td>
                                                {request && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{request.user.name}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Email</td>
                                                {request && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{request.user.email}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Mobile no.</td>
                                                {request && request.user && request.user.mobile && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{request.user.mobile}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Gender</td>
                                                {request && request.user &&  request.user.gender && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{request.user.gender}</td>}
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Address</td>
                                                {request && request.user && request.user.address && <td className="px-6 py-2 max-w-md text-sm text-gray-800 dark:text-gray-200">{request.user.address.address}</td>}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex relative justify-center items-center">
                                        <a target='_blank' href={request.user ? request.user.aadhar[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomgehRWSWCDN0p7QY_I5YRv3BN7KoWt5LkA&usqp=CAU'} className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Aadhar Card
                                        </a>
                                        <a target='_blank' href={request.user ? request.user.drivingLicense[0].url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomgehRWSWCDN0p7QY_I5YRv3BN7KoWt5LkA&usqp=CAU'} className="hover:text-primary-blue border p-2 flex justify-center items-center font-medium w-1/2 sm:text-base">
                                            View Driving License
                                        </a>
                                    </div>
                                </div>

                                <CustomButton
                                    title={`Verify User`}
                                    btnType='button'
                                    containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border my-4'
                                    handleClick={() => handleClick()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page