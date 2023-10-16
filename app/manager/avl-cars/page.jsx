'use client'

import AdminSidebar from '@/components/sidebar/ManagerSidebar'
import AddProductForm from '@/components/forms/AddProductForm'
import AddProductForm2 from '@/components/forms/AddProductForm2'
import { Radio, Space } from 'antd'
import React, {useState, useEffect} from 'react'
import UserThumbnail from '@/components/UserThumbnail'

const page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Available cars</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                        <UserThumbnail img={"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"} email={'xyz@gmail.com'} name={'XYZ'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page