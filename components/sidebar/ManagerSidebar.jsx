import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Link from 'next/link'

const ManagerSidebar = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <div className={`z-20 min-h-[100vh] sidebar absolute sm:relative transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} -translate-x-full sm:translate-x-0 bg-white`}>
            <Sidebar>
                <Menu>
                    <MenuItem className='sm:hidden' onClick={() => setSidebarOpen(false)}> <div className="flex justify-end"><AiOutlineCloseCircle className='' size={25} /></div> </MenuItem>
                    <MenuItem component={<Link href={'/manager/dashboard'} />} > Dashboard </MenuItem>
                    <MenuItem component={<Link href={'/manager/orders'} />} > Orders </MenuItem>
                    <MenuItem component={<Link href={'/manager/registered-users'} />} > Registered Users </MenuItem>
                    <MenuItem component={<Link href={'/manager/avl-bikes'} />} > Avl. Bikes </MenuItem>
                    <MenuItem component={<Link href={'/manager/avl-cars'} />} > Avl. Cars </MenuItem>
                    <MenuItem component={<Link href={'/manager/rented-bikes'} />} > Rented Bikes </MenuItem>
                    <MenuItem component={<Link href={'/manager/rented-cars'} />} > Rented Cars </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default ManagerSidebar