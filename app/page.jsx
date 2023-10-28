import Hero from '@/components/sections/Hero'
import Feature from '@/components/sections/Feature'
import HowToUse from '@/components/sections/HowToUse'
import BookingFilters from '@/components/sections/BookingFilters'

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
      <BookingFilters />
      <Feature />
      <HowToUse />
      
    </div>
  )
}
