const NEXT_SERVER_API = Process.env.SERVER_API

export const uploadImgs = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to upload images!");
    }

    return await response.json();
}

export const removeImgs = async () => {
    const response = await fetch(NEXT_SERVER_API+`/api/`)

    if (!response.ok) {
        throw new Error("Failed to remove images!");
    }

    return await response.json();
}