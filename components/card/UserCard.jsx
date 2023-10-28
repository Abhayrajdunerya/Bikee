import React from 'react'
import CustomButton from '@/components/CustomButton';

const UserCard = ({user, createEmployee}) => {
  return (
    <div className='flex flex-col max-w-sm m-4 border sm:w-96 hover:shadow-xl'>
            <div className="mt-3 flex flex-wrap gap-4">
                <div className="overflow-scroll scrollbar-hide">
                    <table className="min-w-full ">
                        <tbody className="">
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Name</td>
                                {user && user.name && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{user.name}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Email</td>
                                {user && user.email && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{user.email}</td>}
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="m-2 my-4">
                        <CustomButton
                            title={`Add`}
                            btnType='button'
                            containerStyles='text-white rounded-full m-2 bg-primary-blue min-w-[130px] z-10 shadow-md border'
                            handleClick={() => createEmployee()}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default UserCard