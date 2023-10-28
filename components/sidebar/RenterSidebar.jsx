import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Link from 'next/link'

const RenterSidebar = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <div className={`z-20 min-h-[100vh] sidebar absolute sm:relative transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} -translate-x-full sm:translate-x-0 bg-white`}>
            <Sidebar>
                <Menu>
                    <MenuItem className='sm:hidden' onClick={() => setSidebarOpen(false)}> <div className="flex justify-end"><AiOutlineCloseCircle className='' size={25} /></div> </MenuItem>
                    <MenuItem component={<Link href={'/renter/dashboard'} />} > Dashboard </MenuItem>
                    <MenuItem component={<Link href={'/renter/vehicles'} />} > My vehicles </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default RenterSidebar