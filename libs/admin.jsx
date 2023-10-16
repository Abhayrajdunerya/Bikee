const NEXT_SERVER_API = Process.env.SERVER_API

// actions on center
export const getCenter = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch center!");
    }

    return await response.json();
}

export const getCenters = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to fetch centers!");
    }

    return await response.json();
}

export const addNewCenter = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to add new center!");
    }

    return await response.json();
}

export const removeCenter = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to remove center!");
    }

    return await response.json();
}

export const updateCenter = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update center!");
    }

    return await response.json();
}

// actions on employee
export const addEmployee = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to add employee!");
    }

    return await response.json();
}

export const removeEmployee = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to remove employee!");
    }

    return await response.json();
}

export const updateEmployee = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to update employee!");
    }

    return await response.json();
}

// other img actions
export const getIncomeHistory = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get income history!");
    }

    return await response.json();
}

