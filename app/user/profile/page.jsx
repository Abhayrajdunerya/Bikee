"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import InputField from '@/components/forms/InputField';
import CustomButton from '@/components/CustomButton';

const page = () => {

  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    setName(session?.user.name)
    setEmail(session?.user.email)
    loadProfile();
  }, [session])

  const loadProfile = () => {
    console.log('profile loaded');
  }

  

  const [name, setName] = useState(session?.user.name);
  const [email, setEmail] = useState(session?.user.email);
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState({
    pincode: '',
    state: '',
    city: '',
    area: '',
  })
  const [aadhar, setAadhar] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="my-20 text-3xl font-bold">
        Profile
      </div>

      <div className="w-11/12 p-2">
        <div className="flex flex-col sm:flex-row">
          <InputField
            title={'Name'}
            placeholder={'Enter your name'}
            state={name}
            setState={setName}
            disabled={true}
            containerStyle={'m-2 mb-4 w-full'}
          />
          <InputField
            title={'Email'}
            placeholder={'Enter your email'}
            state={email}
            setState={setEmail}
            disabled={true}
            containerStyle={'m-2 mb-4 w-full'}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <InputField
            title={'Mobile no.'}
            placeholder={'Enter your mobile no.'}
            state={mobile}
            type={'number'}
            setState={setMobile}
            // disabled={true}
            containerStyle={'m-2 mb-4 w-full'}
          />
          <div className="relative m-2 mb-4 w-full">
            <label className="leading-7 text-sm text-gray-700">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} name="gender" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">Pin Code</label>
            <input
              type={"number"}
              placeholder={'Enter your pin code'}
              required={true}
              value={address.pincode}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='pincode'
            />
          </div>
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">State</label>
            <input
              type={"text"}
              placeholder={'Enter your state'}
              required={true}
              value={address.state}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='state'
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">City</label>
            <input
              type={"text"}
              placeholder={'Enter your city'}
              required={true}
              value={address.city}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='city'
            />
          </div>
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">Area</label>
            <textarea
              placeholder={"Enter your local area"}
              value={address.area}
              required={true}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='area'
            />
          </div> 
        </div>
        <div className="flex">
          <CustomButton
            title={`Save`}
            btnType='button'
            containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border'
            handleClick={() => { }}
          />
        </div>
        <div className="flex">
          {/* <FileUpload values={values} setValues={setValues} setLoading={setLoading} /> */}
        </div>
      </div>

    </div>
  )
}

export default page