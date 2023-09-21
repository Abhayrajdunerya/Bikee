import Image from 'next/image'
import React from 'react'

const CircleCard = ({img}) => {
  return (
    <div className='flex rounded-full p-5 bg-[#ffff] hover:shadow-md m-1 justify-center items-center max-w-fit'>
        <Image src={img} alt="img" height={100} width={100} className='h-16 w-16 md:h-24 md:w-24' />
    </div>
  )
}

export default CircleCard
