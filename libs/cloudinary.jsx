export const uploadImgs = async (uri) => {
    const response = await fetch(`/api/cloudinary/upload-images`, {
        method: 'POST',
        body: JSON.stringify({
            image: uri
        })
    })

    if (!response.ok) {
        throw new Error("Failed to upload images!");
    }

    return await response.json();
}

export const removeImgs = async (public_id) => {
    const response = await fetch(`/api/cloudinary/remove-image`, {
        method: 'POST',
        body: JSON.stringify({
            public_id,
        })
    })

    if (!response.ok) {
        throw new Error("Failed to remove images!");
    }

    return await response.json();
}