export const addVehicle = async (brand, model, mfYear, fuel, engineCap, startType, vin, owner, images, vehicleType, price, depositeAmt, preHourCharge, terms) => {
    const response = await fetch(`/api/manager/vehicles`, {
        method: 'POST',
        body: JSON.stringify({
            brand, model, mfYear, fuel, engineCap, startType, vin, owner, images, vehicleType, price, depositeAmt, preHourCharge, terms
        }),
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error("Failed to add vehicle!");
    }

    return await response.json();
}

export const getAvlVehicles = async (vehicleType) => {
    const response = await fetch(`/api/manager/vehicles/avl-vehicles`, {
        method: 'POST',
        body: JSON.stringify({
            vehicleType
        }),
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error("Failed to get available vehicles!");
    }

    return await response.json();
}

export const getRentedVehicles = async (vehicleType) => {
    const response = await fetch(`/api/manager/vehicles/rented-vehicles`, {
        method: 'POST',
        body: JSON.stringify({
            vehicleType
        }),
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error("Failed to get rented vehicles!");
    }

    return await response.json();
}

export const getAvlVehiclesForUser = async (filterParams) => {
    const response = await fetch(`/api/vehicles`, {
        method: 'POST',
        body: JSON.stringify({
            filterParams
        }),
        cache: 'no-store'
    })

    if (!response.ok) {
        throw new Error("Failed to fetch available vehicles!");
    }

    return await response.json();
}

export const updateVehicleById = async (_id, brand, model, mfYear, fuel, engineCap, startType, vin, images, price, depositeAmt, perHourCharge, terms) => {
    const response = await fetch(`/api/manager/vehicles/${_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            brand, model, mfYear, fuel, engineCap, startType, vin, images, price, depositeAmt, perHourCharge, terms
        })
    })
        
    if (!response.ok) {
        throw new Error("Failed to update vehicle!");
    }

    return await response.json();
}

export const deleteVehicleById = async (_id) => {
    const response = await fetch(`/api/manager/vehicles/${_id}`, {
        method: 'DELETE'
    })
        
    if (!response.ok) {
        throw new Error("Failed to delete vehicle!");
    }

    return await response.json();
}
export const getVehicleById = async (_id) => {
    const response = await fetch(`/api/vehicles/${_id}`)
        
    if (!response.ok) {
        throw new Error("Failed to fetch vehicle!");
    }

    return await response.json();
}



