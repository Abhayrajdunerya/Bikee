import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import CustomButton from '@/components/CustomButton'

const CenterCard = ({ center, makeRequest, isUser }) => {

    const { name, email, mobile, address, location, _id } = center;


    // const googleMapsUrl = `https://maps.google.com/?q=${lat},${lng}`;

    return (
        <div className='border p-2 m-2 sm:p-4 flex flex-col shadow'>
            <div className="overflow-scroll scrollbar-hide">
                {center && <table className="min-w-full ">
                    <tbody className="">
                        <tr>
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Name</td>
                            {name && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{name}</td>}
                        </tr>
                        <tr>
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Email</td>
                            {email && <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{email}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">Mobile</td>
                            {mobile && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{mobile}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">State</td>
                            {address && address.state && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{address.state}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">City</td>
                            {address && address.city && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{address.city}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">Pin</td>
                            {address && address.pincode && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{address.pincode}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">Area</td>
                            {address && address.area && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{address.area}</td>}
                        </tr>
                        <tr className="">
                            <td className="px-6 py-2 whitespace-nowrap  text-gray-800 dark:text-gray-200 ">Address</td>
                            {address && address.address && <td className="px-6 py-2 whitespace-nowrap   text-gray-800 dark:text-gray-200 capitalize">{address.address}</td>}
                        </tr>
                    </tbody>
                </table>}
                {isUser && <div className="my-2">
                    <CustomButton
                        title={`Make Request`}
                        btnType='button'
                        containerStyles='text-white rounded-full m-2 mb-4 bg-primary-blue min-w-[130px] z-10 shadow-md border'
                        handleClick={() => makeRequest(_id)}
                    />
                </div>}
                {location && <div className="border flex justify-center hover:text-primary-blue items-center my-2">
                    <a
                        href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
                        target="_blank"
                        rel="noreferrer"
                        className='flex'
                    >
                        <FiMapPin size={25} className='m-2' /> <div className="flex justify-center items-center">Show location on map</div>
                    </a>

                </div>}



                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10519.69790791128!2d77.41975477409395!3d23.255236028702107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d7cf48696f%3A0xddbc57014db35da2!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1698153549229!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            </div>
        </div>
    )
}

export default CenterCard