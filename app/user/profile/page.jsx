"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import InputField from '@/components/forms/InputField';
import CustomButton from '@/components/CustomButton';

import { getUserDetails, updateProfile } from '@/libs/user'
import FileUpload from '@/components/forms/FileUpload';
import { toast } from 'react-toastify';

const page = () => {

  const {data: session} = useSession();

  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  // const [user, setUser] = useState({})
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    mobile: '',
    gender: '',
    address: {
      pincode: '',
      state: '',
      city: '',
      area: '',
      address: '',
    },

    aadhar: [],
    drivingLicense: [],
    role: ''
  })

  useEffect(() => {
    setName(session?.user.name)
    setEmail(session?.user.email)
  }, [session])

  useEffect(() => {
    loadProfile();
    console.log(user);
  }, [])

  const loadProfile = async () => {
    try {
      const response = await getUserDetails();
      setUser(response);

      setMobile(response?.mobile);
      setGender(response?.gender);
      setAddress(response?.address);
      setAadhar(response?.aadhar);
      setDrivingLicense(response?.drivingLicense);
    } catch (error) {
      console.log(error);
      toast.error('Failed to load profile!');
    }

  }

  const updateUser = async () => {
    try {
      const response = await updateProfile(mobile, gender, address, aadhar, drivingLicense);
      toast.success('Profile updated');
    } catch (error) {
      console.log(error);
      toast.error('Failed to update profile!');
    }
  }

  const [name, setName] = useState(session?.user.name);
  const [email, setEmail] = useState(session?.user.email);
  const [mobile, setMobile] = useState(user.mobile);
  const [gender, setGender] = useState(user.gender);
  const [address, setAddress] = useState(user.address)
  const [aadhar, setAadhar] = useState(user.aadhar);
  const [drivingLicense, setDrivingLicense] = useState(user.drivingLicense);

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
            required={true}
            type={'number'}
            setState={setMobile}
            containerStyle={'m-2 mb-4 w-full'}
          />
          <div className="relative m-2 mb-4 w-full">
            <label className="leading-7 text-sm text-gray-700">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} name="gender" required={true} className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="">-- Select gender --</option>
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
              value={address && address.pincode}
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
              value={address && address.state}
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
              value={address && address.city}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='city'
            />
          </div>
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">Area</label>
            <input
              placeholder={"Enter your local area"}
              value={address && address.area}
              required={true}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='area'
            />
          </div> 
          <div className={`relative m-2 mb-4 w-full`}>
            <label className="leading-7 text-sm text-gray-700">Address</label>
            <textarea
              placeholder={"Enter your full address"}
              value={address && address.address}
              required={true}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleAddressChange}
              name='address'
            />
          </div> 
        </div>
        
        <div className="flex flex-col m-2 my-8">
          <div className="">Upload Aadhar Card {loading1 &&  <span className='text-red-600 font-semibold'> {' '} Uploadind Aadhar</span>} </div>
          <FileUpload values={aadhar} setValues={setAadhar} setLoading={setLoading1} />
        </div>
        <div className="flex flex-col m-2 mb-8">
          <div className="">Upload Driving License {loading2 &&  <span className='text-red-600 font-semibold'> {' '} Uploadind Driving License</span>}</div>
          <FileUpload values={drivingLicense} setValues={setDrivingLicense} setLoading={setLoading2} />
        </div>

        <div className="flex">
          <CustomButton
            title={`Save`}
            btnType='button'
            containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border'
            handleClick={() => updateUser()}
          />
        </div>
      </div>

    </div>
  )
}

export default page