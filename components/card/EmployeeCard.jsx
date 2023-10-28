import React from 'react'

const EmployeeCard = ({ employee }) => {

    const { user, position, center } = employee;

    return (
        <div className='flex flex-col max-w-sm m-4 p-2 rounded border sm:w-96 text-center hover:shadow-xl'>
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
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Mobile</td>
                                {user && user.mobile && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{user.mobile}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Position</td>
                                {position && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{position}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Center</td>
                                {center && center.name && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{center.name}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Center mobile</td>
                                {center && center.mobile && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{center.mobile}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">City</td>
                                {center && center.address && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{center.address.city}</td>}
                            </tr>
                            <tr>
                                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Address</td>
                                {center && center.address && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{center.address.address}</td>}
                            </tr>    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard