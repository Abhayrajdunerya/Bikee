export const getRenter = async () => {
    const response = await fetch(`/api/renter`);

    if (!response.ok) {
        throw new Error("Failed to fetch user details!");
    }

    return await response.json();
}


