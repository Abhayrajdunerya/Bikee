import React from 'react'

import { becomeRenterInstructions } from '@/constants/index'

const BecomeRenterInstruct = () => {
  return (
    <div className='flex flex-col'>
        <div className="text-2xl font-bold m-2 my-4">Instructions</div>
        {becomeRenterInstructions.length > 0 && becomeRenterInstructions.map((item, i) => (
            <div key={i} className="font-medium text-base m-2">{'-> '} {item}</div>
        ))}
    </div>
  )
}

export default BecomeRenterInstruct