"use client"

import { Fragment, useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HiBars3, HiOutlineBell, HiOutlineXMark } from 'react-icons/hi2'
import { MdOutlineLogin } from 'react-icons/md'
import Link from 'next/link'
import Image from "next/image"
import CustomButton from '@/components/CustomButton'
import { logo } from "@/constants/index";

const navigation = [
  // { name: 'Dashboard', href: '#', current: true },
  // { name: 'Contact Us', href: '/contact', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const Navbar = () => {

  const { data: session } = useSession();
  const role = session?.user?.role || 'user'

  const [providers, setProviders] = useState(null);
  // const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }

    setUpProviders();
  }, [])

  return (
    <Disclosure as="nav" className="shadow-md bg-primary-blue-100 z-30">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl padding-x ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineXMark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href={'/'} className="flex flex-shrink-0 items-center">
                  <Image src={logo} alt='logo' className='h-16 w-auto' width={500} height={500} />
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                {session?.user ? (<Menu as="div" className="relative ml-3 z-10">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-10 w-10 rounded-full" src={session?.user.image} width={37} height={37} alt='profileImg'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/user/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/user/orders"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your bookings
                          </Link>
                        )}
                      </Menu.Item>
                      {role === 'user' && <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/user/become-renter"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Become a renter
                          </Link>
                        )}
                      </Menu.Item>}

                      {role === 'admin' && <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/admin/dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Admin dashboard
                          </Link>
                        )}
                      </Menu.Item>}

                      {role === 'manager' && <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/manager/dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Manager dashboard
                          </Link>
                        )}
                      </Menu.Item>}

                      {role === 'renter' && <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/renter/dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Renter dashboard
                          </Link>
                        )}
                      </Menu.Item>}
                      
                      <Menu.Item>
                        {({ active }) => (
                          <button type='button'
                            onClick={(e) => {
                              e.preventDefault();
                              signOut();
                            }}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>) : (
                  <>
                    {providers && Object.values(providers).map((provider, i) => (
                      // <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='bg-white z-10' >
                      //   Sign In
                      // </button>
                      <CustomButton
                      key={i}
                      title='Sign In'
                      btnType='button'
                      containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] z-10 shadow-md border'
                      handleClick={() => signIn(provider.id)}
                    />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Navbar;