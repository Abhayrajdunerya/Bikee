import React from 'react'

const IncomeCard = ({income, type}) => {
    return (
        <div className="col-span-1 bg-white flex justify-center items-center w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <p className='text-2xl font-bold '>₹ {income}</p>
                <p className='text-gray-600'>{type} Revenue</p>
            </div>
            {/* <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p> */}
        </div>
    )
}

export default IncomeCard