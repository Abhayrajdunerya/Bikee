"use client"

import React, { useEffect, useState } from 'react'
import { bikeBrand, carBrand } from '@/constants/index'
import CustomButton from '@/components/CustomButton'
import InputField from '@/components/forms/InputField'
import FileUpload from '@/components/forms/FileUpload'
import { addVehicle, getVehicleById, updateVehicleById } from '@/libs/vehicle'
import { toast } from 'react-toastify'

const UpdateVehicleForm2 = ({ vehicleId, setLoading }) => {

    // const [loading, setLoading] = useState(false)

  const [brandOptions, setBrandOptions] = useState(bikeBrand);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [mfYear, setMfYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [engineCap, setEngineCap] = useState('');
  const [startType, setStartType] = useState('');
  const [images, setImages] = useState('');
  const [vin, setVin] = useState('');

  const [hourly, setHourly] = useState('');
  const [daily, setDaily] = useState('');
  const [weekly, setWeekly] = useState('');
  const [monthly, setMonthly] = useState('');
  const [depositeAmt, setDepositeAmt] = useState('');
  const [preHourCharge, setPreHourCharge] = useState('');
  const [terms, setTerms] = useState('');

  useEffect(() => {
    loadVehicle();
    console.log(vehicleId);
  }, [])

  const loadVehicle = async () => {
    try {
        const response = await getVehicleById(vehicleId)
        console.log(response);
        
        setBrandOptions(response.vehicleType === 'car' ? carBrand : bikeBrand);
        setBrand(response.brand);
        setModel(response.model);
        setMfYear(response.mfYear);
        setFuel(response.fuel);
        setEngineCap(response.engineCap);
        setStartType(response.startType);
        setVin(response.vin);
        setImages(response.images);
        setHourly(response.price.hourly);
        setDaily(response.price.daily);
        setWeekly(response.price.weekly);
        setMonthly(response.price.monthly);
        setDepositeAmt(response.depositeAmt);
        setPreHourCharge(response.perHourCharge);
        setTerms(response.terms)

    } catch (error) {
        console.log(error);
        toast.error('Failed to load vehicle!')
    }
}

  const setDefault = () => {
    setBrand('');
    setModel('');
    setMfYear('');
    setFuel('');
    setEngineCap('');
    setStartType('');
    setImages([]);
    setVin('');
    setLoading(false);
  }

  const handleClick = async () => {
    if (!vin || !brand || !model || !mfYear || !fuel || !engineCap || !startType || !images.length ||
          !hourly || !daily || !weekly || !monthly || !depositeAmt || !preHourCharge || !terms) {
      window.alert('All fields are required!');
      return;
    } else {
      try {
        const response = await updateVehicleById(vehicleId, brand, model, mfYear, fuel, engineCap, startType, vin, images, {hourly, daily, weekly, monthly}, depositeAmt, preHourCharge, terms)
        toast.success('Vehicle updated!');
        // window.location.reload();
        
      } catch (error) {
        console.log(error);
        toast.error('Failed to update vehicle!');
      }

    }
  }

  return (
    <div>
      <div className="m-2 mb-4">
        <FileUpload values={images} setValues={setImages} setLoading={setLoading} />
      </div>
      <div className="">
        <div className="flex flex-col sm:flex-row">
          <div className="relative m-2 mb-4 w-full">
            <label className="leading-7 text-sm text-gray-700">Brand</label>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} name="brand" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="">-- Select Brand --</option>
              {brandOptions.length > 0 && brandOptions.map((item, i) => <option key={item.name} value={item.value}>{item.name}</option>)}
            </select>
          </div>
          <InputField
            title="Model name"
            state={model}
            placeholder="Model Name"
            setState={setModel}
            containerStyle={'m-2 mb-4 w-full'}
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <InputField
            title="Manufacturing Year"
            state={mfYear}
            type={'number'}
            placeholder="Manufacturing Year"
            setState={setMfYear}
            containerStyle={'m-2 mb-4 w-full'}
          />
          <div className="relative m-2 mb-4 w-full">
            <label className="leading-7 text-sm text-gray-700">Fuel Type</label>
            <select value={fuel} onChange={(e) => setFuel(e.target.value)} name="fuel" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="">-- Select Fuel --</option>
              <option value="PATROL">Patrol</option>
              <option value="DIESEL">Diesel</option>
              <option value="ELECTRIC">Electric</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <InputField
            title="Engine Capacity (in CC)"
            state={engineCap}
            type={'number'}
            placeholder="Engine Capacity (in CC)"
            setState={setEngineCap}
            containerStyle={'m-2 mb-4 w-full'}
          />
          <div className="relative m-2 mb-4 w-full">
            <label className="leading-7 text-sm text-gray-700">Start Type</label>
            <select value={startType} onChange={(e) => setStartType(e.target.value)} name="startType" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="">-- Select Start Type --</option>
              <option value="SELF">Self</option>
              <option value="KICK">Kick</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <InputField
            title="Vehicle Identification Number"
            state={vin}
            type={'text'}
            placeholder="Enter VIN "
            setState={setVin}
            containerStyle={'m-2 mb-4 w-full'}
          />
        </div>

        <div className="flex flex-col my-2">
          <div className="text-base font-bold">Pricing</div>
          <div className="">

            <div className="flex flex-col sm:flex-row">
              <InputField
                title="Hourly"
                state={hourly}
                type={'number'}
                placeholder="Enter hourly price"
                setState={setHourly}
                containerStyle={'m-2 mb-4 w-full'}
              />
              <InputField
                title="Daily"
                state={daily}
                type={'number'}
                placeholder="Enter daily price"
                setState={setDaily}
                containerStyle={'m-2 mb-4 w-full'}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <InputField
                title="Weekly"
                state={weekly}
                type={'number'}
                placeholder="Enter weekly price"
                setState={setWeekly}
                containerStyle={'m-2 mb-4 w-full'}
              />
              <InputField
                title="Monthly"
                state={monthly}
                type={'number'}
                placeholder="Enter monthly price"
                setState={setMonthly}
                containerStyle={'m-2 mb-4 w-full'}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <InputField
                title="Deposite amount"
                state={depositeAmt}
                type={'number'}
                placeholder="Enter deposite amount"
                setState={setDepositeAmt}
                containerStyle={'m-2 mb-4 w-full'}
              />
              <InputField
                title="Per hour charge (late fee)"
                state={preHourCharge}
                type={'number'}
                placeholder="Enter per hour charge (late fee)"
                setState={setPreHourCharge}
                containerStyle={'m-2 mb-4 w-full'}
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <InputField
                title="Terms & Conditions"
                state={terms}
                isTextArea={true}
                type={'text'}
                placeholder="Write terms & conditions"
                setState={setTerms}
                containerStyle={'m-2 mb-4 w-full'}
              />
            </div>

          </div>
        </div>

        <CustomButton
          title={`Update`}
          btnType='button'
          containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border'
          handleClick={() => handleClick()}
        />
      </div>
    </div>
  )
}

export default UpdateVehicleForm2