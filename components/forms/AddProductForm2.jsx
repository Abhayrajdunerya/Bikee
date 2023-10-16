"use client"

import React, { useState } from 'react'
import { bikeBrand, carBrand } from '@/constants/index'
import CustomButton from '@/components/CustomButton'
import InputField from '@/components/forms/InputField'

const AddProductForm2 = ({ type }) => {

  const [brandOptions, setBrandOptions] = useState(type === 'car' ? carBrand : bikeBrand);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [mfYear, setMfYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [engineCap, setEngineCap] = useState('');
  const [startType, setStartType] = useState('');


  return (
    <div>
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {'Upload Images'}
        </label>
        <input
          id="image"
          type="file"
          accept='image/*'
          required={type === "create" ? true : false}
          className="form_image-input"
          onChange={(e) => {}}
        />
        {/* {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20" alt="image"
            fill
          />
        )} */}
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
        <CustomButton
          title={`Add ${type}`}
          btnType='button'
          containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] z-10 shadow-md border'
          handleClick={() => { }}
        />
      </div>
    </div>
  )
}

export default AddProductForm2