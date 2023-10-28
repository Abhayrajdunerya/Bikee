export const getRenterCars = async (owner) => {
    const response = await fetch(`/api/renter/cars`, {
        method: 'POST',
        body: JSON.stringify({
            owner
        })
    })

    if (!response.ok) {
        throw new Error("Failed to fetch renter's cars!");
    }

    return await response.json();
}
