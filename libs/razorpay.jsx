export const makePayment = async (vehicleId, vehicleType, bookingType, city, pickingDate, droppingDate) => {
    const response = await fetch(`/api/payment/order`, {
        method: 'POST',
        body: JSON.stringify({
            pickingDate, droppingDate, vehicleId, city, vehicleType, bookingType
        })
    })

    if (!response.ok) {
        throw new Error("Failed to make payment!");
    }

    return await response.json();
}

export const verifyPayment = async (res) => {
    const response = await fetch(`/api/payment/verify`, {
        method: 'POST',
        body: JSON.stringify(res)
    })

    if (!response.ok) {
        throw new Error("Failed to verify payment!");
    }

    return await response.json();
}