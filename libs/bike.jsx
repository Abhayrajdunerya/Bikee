const NEXT_SERVER_API = Process.env.SERVER_API

export const getAvailableBikes = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch available bikes!");
    }

    return await response.json();
}

export const getBikeBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch bike!");
    }

    return await response.json();
}

export const getRentedBikes = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch rented bikes!");
    }

    return await response.json();
}

export const getRentedBikesOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get rented bikes of renter!");
    }

    return await response.json();
}

export const getFreeBikesOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get free bikes of renter!");
    }

    return await response.json();
}

export const getAllBikesOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get all bikes of renter!");
    }

    return await response.json();
}

export const addBike = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to add renter's bike!");
    }

    return await response.json();
}

export const removeBikeBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to remove bike!");
    }

    return await response.json();
}

export const updateBikeBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update bike!");
    }

    return await response.json();
}

