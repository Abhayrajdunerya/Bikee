export const getRenterBikes = async (owner) => {
    const response = await fetch(`/api/renter/bikes`, {
        method: 'POST',
        body: JSON.stringify({
            owner
        })
    })

    if (!response.ok) {
        throw new Error("Failed to fetch renter's bikes!");
    }

    return await response.json();
}
