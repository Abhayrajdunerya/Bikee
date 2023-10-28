import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
        <div className='flex flex-col gap-12 items-center'>
            <h1 className='text-5xl'>Access Denied</h1>
            <p className='text-3xl max-w-2xl text-center'>
                You are no longer required access level to view this page.
            </p>
            <Link href={'/'} className='hover:text-primary-blue transition'>Return to home</Link>
        </div>
    </div>
    
  )
}

export default page