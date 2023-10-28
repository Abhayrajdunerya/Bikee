'use client'

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import AdminSidebar from '@/components/sidebar/ManagerSidebar'
import UserThumbnail from '@/components/UserThumbnail'

import { getRegisteredUsers } from '@/libs/manager'
import { toast } from 'react-toastify'

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [regUsers, setRegUsers] = useState([])

    useEffect(() => {
        loadRegUsers();
    }, [])

    const loadRegUsers = async () => {
        try {
            const response = await getRegisteredUsers();
            setRegUsers(response);
            if (response.length === 0) {
                toast.error('No renters are there!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to load renters!');
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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Registered users</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {regUsers && regUsers.length && regUsers.map((item, i) => (
                            <Link key={item._id} href={`/manager/registered-users/${item._id}`}><UserThumbnail img={item.user.image} email={item.user.email} name={item.user.name} /></Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page