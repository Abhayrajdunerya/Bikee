const NEXT_SERVER_API = Process.env.SERVER_API

// actions on users
export const getNewUserRequests = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch new user's request!");
    }

    return await response.json();
}

export const getRegisteredUsers = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch registered users!");
    }

    return await response.json();
}

export const verifyUser = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to verify user!");
    }

    return await response.json();
}



// actions on bikes
export const getBikeStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch bike status!");
    }

    return await response.json();
}

export const updateBikeStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update bike status!");
    }

    return await response.json();
}


// actions on cars
export const getCarStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch car status!");
    }

    return await response.json();
}

export const updateCarStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update car status!");
    }

    return await response.json();
}

// actions on orders
export const getOrders = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch orders!");
    }

    return await response.json();
}

export const getOrderStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch order status!");
    }

    return await response.json();
}

export const updateOrderStatus = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update order status!");
    }

    return await response.json();
}