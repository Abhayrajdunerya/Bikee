import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import CustomButton from '@/components/CustomButton'

import { calcDailyPrice, calcHourlyPrice, calcMonthlyPrice, calcWeeklyPrice } from '@/utils/priceCalc'


const OrderDetails = ({ isOpen, closeModal, vehicleName, filterParams, price, bookingMode, amount, handlePay }) => {

    const { vehicleType, city, bookingType, pickingDate, droppingDate } = filterParams;
    const pick = new Date(pickingDate);
    const drop = new Date(droppingDate);

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                    <button
                                        type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src='/close.svg'
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>

                                    {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}

                                    {/* <div className='flex-1 flex flex-col gap-3'>
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'} alt='car model' fill priority className='object-contain' />
                                        </div>
                                    </div> */}

                                    <div className='flex-1 flex flex-col gap-2'>
                                        {vehicleName && <h2 className='font-semibold text-xl capitalize'>
                                            {/* {car.make} {car.model} */}
                                            {vehicleName}
                                        </h2>}

                                        {filterParams && <div className="mt-3 flex flex-wrap gap-4">
                                            <div className="overflow-scroll scrollbar-hide">
                                                <table className="min-w-full ">
                                                    <tbody className="">
                                                        <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Booking Type</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{bookingType}</td>}
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">City</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">{city}</td>}
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">From</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                                <div className="">
                                                                    {pick.getUTCDate()}/{pick.getUTCMonth()}/{pick.getUTCFullYear()}
                                                                </div>
                                                                <div className="">
                                                                    {pick.getUTCHours()}:00
                                                                </div>
                                                            </td>}
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">To</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                                <div className="">
                                                                    {drop.getUTCDate()}/{drop.getUTCMonth()}/{drop.getUTCFullYear()}
                                                                </div>
                                                                <div className="">
                                                                    {drop.getUTCHours()}:00
                                                                </div>
                                                            </td>}
                                                        </tr>
                                                        <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Charge</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">₹ {price}/{bookingMode}</td>}
                                                        </tr>
                                                        {/* <tr>
                                                            <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Billing</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 capitalize">₹1000</td>}
                                                        </tr> */}
                                                        <tr className="border">
                                                            <td className="px-6 py-2 whitespace-nowrap font-bold text-gray-800 dark:text-gray-200 text-base">Total</td>
                                                            {<td className="px-6 py-2 whitespace-nowrap text-base font-semibold text-gray-800 dark:text-gray-200 capitalize">₹ {amount}</td>}
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>}
                                    </div>

                                    <div className="m-2">
                                        <CustomButton
                                            title={'Place Order'}
                                            containerStyles={'bg-primary-blue text-white rounded-full shadow-md'}
                                            handleClick={() => handlePay()}
                                        />
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default OrderDetails