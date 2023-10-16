const NEXT_SERVER_API = Process.env.SERVER_API

export const getAvailableCars = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch available cars!");
    }

    return await response.json();
}

export const getCarBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch car!");
    }

    return await response.json();
}

export const getRentedCars = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch rented cars!");
    }

    return await response.json();
}

export const getRentedCarsOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get rented cars of renter!");
    }

    return await response.json();
}

export const getFreeCarsOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get free cars of renter!");
    }

    return await response.json();
}

export const getAllCarsOfRenterByEmail = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get all cars of renter!");
    }

    return await response.json();
}

export const addCar = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to add renter's car!");
    }

    return await response.json();
}

export const removeCarBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to remove car!");
    }

    return await response.json();
}

export const updateCarBySlug = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update car!");
    }

    return await response.json();
}