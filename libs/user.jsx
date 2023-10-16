const NEXT_SERVER_API = Process.env.SERVER_API

// actions on profile
export const getUserDetails = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch user details!");
    }

    return await response.json();
}

export const updateProfile = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update profile!");
    }

    return await response.json();
}

export const makeRenterRequest = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to make request to become renter!");
    }

    return await response.json();
}


// actions on cart
export const userCart = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to cart details!");
    }

    return await response.json();
}

export const getUserCart = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to cart details!");
    }

    return await response.json();
}

export const emptyCart = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to empty cart!");
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

export const createOrder = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to create order!");
    }

    return await response.json();
}






