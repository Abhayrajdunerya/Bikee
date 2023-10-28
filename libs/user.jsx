// actions on profile
export const getUserDetails = async () => {
    const response = await fetch(`/api/user/profile`)

    if (!response.ok) {
        throw new Error("Failed to fetch user details!");
    }

    return await response.json();
}

export const updateProfile = async (mobile, gender, address, aadhar, drivingLicense) => {
    const response = await fetch(`/api/user/profile`, {
        method: 'PUT',
        body: JSON.stringify({
            mobile, gender, address, aadhar, drivingLicense
        })
    })

    if (!response.ok) {
        throw new Error("Failed to update profile!");
    }

    return await response.json();
}

export const getUserByEmail = async (email) => {
    const response = await fetch(`/api/user/email/${email}`)

    if (!response.ok) {
        throw new Error("Failed to fetch user details!");
    }

    return await response.json();
}



// actions on become renter
export const makeRenterRequest = async (center) => {
    const response = await fetch(`/api/user/become-renter`, {
        method: 'POST',
        body: JSON.stringify(center)
    })

    if (!response.ok) {
        throw new Error("Failed to make request to become renter!");
    }

    return await response.json();
}

export const getAllCenters = async () => {
    const response = await fetch(+`/api/user/centers`)

    if (!response.ok) {
        throw new Error("Failed to fetch all centers!");
    }

    return await response.json();
}

export const getCentersByCity = async (city) => {
    const response = await fetch(`/api/user/centers/${city}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch centers in ${city}!`);
    }

    return await response.json();
}


// actions on orders
export const getOrders = async () => {
    const response = await fetch(`/api/user/orders`);

    if (!response.ok) {
        throw new Error("Failed to fetch orders!");
    }

    return await response.json();
}

export const createOrder = async (vehicleId, centerId, bookingInfo, razorpayResponse) => {
    const response = await fetch(`/api/user/orders`, {
        method: 'POST',
        body: JSON.stringify({
            vehicleId, centerId, bookingInfo, razorpayResponse
        })
    })

    if (!response.ok) {
        throw new Error("Failed to create order!");
    }

    return await response.json();
}








