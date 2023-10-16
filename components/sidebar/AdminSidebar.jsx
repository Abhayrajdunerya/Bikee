import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Link from 'next/link'

const AdminSidebar = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <div className={`z-10 sidebar absolute sm:relative transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} -translate-x-full sm:translate-x-0 bg-white`}>
            <Sidebar>
                <Menu>
                    <MenuItem className='sm:hidden' onClick={() => setSidebarOpen(false)}> <div className="flex justify-end"><AiOutlineCloseCircle className='' size={25} /></div> </MenuItem>
                    <MenuItem component={<Link href={'/admin/dashboard'} />} > Dashboard </MenuItem>
                    <MenuItem component={<Link href={'/admin/centers'} />} > Centers </MenuItem>
                    <MenuItem component={<Link href={'/admin/employees'} />} > Employees </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default AdminSidebar