const NEXT_SERVER_API = Process.env.SERVER_API

export const makeOrderPayment = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to make order's payment!");
    }

    return await response.json();
}

export const verifyOrderPayment = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to verify order's payment!");
    }

    return await response.json();
}