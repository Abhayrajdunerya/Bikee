"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaMotorcycle, FaPowerOff, FaRoad } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import CustomButton from '@/components/CustomButton'
import { Tab } from '@headlessui/react'

const page = () => {

    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];


    const [categories, setCategories] = useState({
        Description: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Specifications: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Reviews: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

  return (
    <div className="">

            <div className="flex flex-col md:flex-row justify-center overflow-hidden">
                <div className="w-full md:w-1/2 border m-2">
                    <Carousel showArrows={false} showStatus={false} showThumbs={true} >
                        <div className="">
                            <Image src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'} height={800} width={800} className='w-full' />
                        </div>
                        <div className="">
                            <Image src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'} height={800} width={800} className='w-full' />
                        </div>
                        <div className="">
                            <Image src={'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png'} height={800} width={800} className='w-full' />
                        </div>
                    </Carousel>
                </div>
                <div className="features flex flex-wrap md:flex-col sm:justify-center m-2 border p-2 w-full md:w-fit md:p-4">
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2"><FaPowerOff size={20} /></div>
                        <div> Kick Start</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaGear size={20} /></div>
                        <div>110cc</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaRoad size={20} /></div>
                        <div>Under 4,800 Km</div>
                    </div>
                    <div className="flex items-center md:w-full m-2 p-2">
                        <div className="rounded-full p-4 text-white bg-primary-blue m-2 flex"><FaMotorcycle size={20} /></div>
                        <div>2022</div>
                    </div>
                </div>
            </div>

            <div className="pricing bg-gray-200 p-4 py-6">
                <h3 className="mb-8 text-gray-900 dark:text-white text-center text-3xl font-bold">Price</h3>
                <div className="flex flex-col sm:flex-row">
                    <div className="custom-filter__btn m-2">
                        <input id="horizontal-list-radio-license" type="radio" onChange={(e) => { }} value="390/day" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ 390/day </label>
                    </div>
                    <div className="custom-filter__btn m-2">
                        <input id="horizontal-list-radio-passport" type="radio" onChange={(e) => { }} value="2390/week" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ 2,390/week</label>
                    </div>
                    <div className="custom-filter__btn m-2">
                        <input id="horizontal-list-radio-passpor" type="radio" onChange={(e) => { }} value="7500/month" name="price" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">₹ 7,500/month</label>
                    </div>
                </div>
                <div className="p-2">
                    <CustomButton
                        handleClick={() => { }}
                        title={'Add To Cart'}
                        containerStyles={'bg-primary-blue text-white rounded-full shadow-md'}
                    />
                </div>
            </div>

            <div className="vehicle_details p-2 md:p-4 flex justify-center items-center">

                <div className="w-full max-w-md px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white shadow'
                                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (
                                            <li
                                                key={post.id}
                                                className="relative rounded-md p-3 hover:bg-gray-100"
                                            >
                                                <h3 className="text-sm font-medium leading-5">
                                                    {post.title}
                                                </h3>

                                                <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                    <li>{post.date}</li>
                                                    <li>&middot;</li>
                                                    <li>{post.commentCount} comments</li>
                                                    <li>&middot;</li>
                                                    <li>{post.shareCount} shares</li>
                                                </ul>

                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        'absolute inset-0 rounded-md',
                                                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                    )}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
                {/* </div> */}
            </div>

        </div>
  )
}

export default page