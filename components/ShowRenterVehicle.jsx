import React from 'react'
import VehicalCard from '@/components/card/VehicleCard'

const ShowRenterVehicle = ({type, vehicles, showDelete = true, showEdit = true}) => {

    const filterParams = {
        bookingType: '', 
        pickingDate: '', 
        droppingDate: '', 
        vehicleType: '', 
        city: ''
    }

    return (
        <div className="all-cars border p-2 sm:p-4 m-2 sm:m-4 flex flex-col">
            <div className="text-xl font-semibold mb-10">All {type}</div>
            <div className="area border w-full md:relative max-h-[100vh] overflow-y-scroll flex justify-evenly items-center flex-wrap pt-14 scrollbar-hide">
                {vehicles && vehicles.length && vehicles.map((item, i) => <VehicalCard key={item._id} precise={true} vehicle={item} filterParams={filterParams} showDelete={showDelete} showEdit={showEdit} />)}
                
            </div>
        </div>

    )
}

export default ShowRenterVehicle