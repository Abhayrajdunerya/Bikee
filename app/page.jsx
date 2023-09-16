import Image from 'next/image'

import Hero from '@/components/Hero'
import VehicalCard from '@/components/VehicalCard'

export default function Home() {

  const car = {
    city_mpg: '', 
    year: 2013, 
    make: 'Lamborgini', 
    model: 'M50', 
    transmission: 'Yes', 
    drive: 'Yes',
  }

  return (
    <div className="">
      <Hero />
      <div className="home__cars-wrapper p-4">
        <VehicalCard car={car} />
        <VehicalCard car={car} />
        <VehicalCard car={car} />
        <VehicalCard car={car} />
        <VehicalCard car={car} />
        
      </div>
    </div>
  )
}
