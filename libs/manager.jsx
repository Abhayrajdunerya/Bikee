// actions on users
export const getNewUserRequests = async () => {
    const response = await fetch(`/api/manager/new-request`)

    if (!response.ok) {
        throw new Error("Failed to fetch new user's request!");
    }

    return await response.json();
}

export const getNewUserRequest = async (reqId) => {
    const response = await fetch(`/api/manager/new-request/${reqId}`)

    if (!response.ok) {
        throw new Error("Failed to fetch user request!");
    }

    return await response.json();
}

export const getRegisteredUsers = async () => {
    const response = await fetch(`/api/manager/registered-users`)

    if (!response.ok) {
        throw new Error("Failed to fetch registered users!");
    }

    return await response.json();
}

export const getRegisteredUser = async (renterId) => {
    const response = await fetch(`/api/manager/registered-users/${renterId}`)

    if (!response.ok) {
        throw new Error("Failed to fetch renter!");
    }

    return await response.json();
}

export const verifyUser = async (reqId, user, center) => {
    const response = await fetch(`/api/manager/verify-user`, {
        method: 'POST',
        body: JSON.stringify({
            reqId, user, center
        })
    })

    if (!response.ok) {
        throw new Error("Failed to verify user!");
    }

    return await response.json();
}


// actions on orders
export const getOrders = async () => {
    const response = await fetch(`/api/manager/orders`)

    if (!response.ok) {
        throw new Error("Failed to fetch orders!");
    }

    return await response.json();
}

export const updateOrderStatus = async (orderId, newStatus) => {
    const response = await fetch(`/api/manager/orders/${orderId}`, {
        method: 'PUT',
        body: JSON.stringify(newStatus)
    })

    if (!response.ok) {
        throw new Error("Failed to update booking status!");
    }

    return await response.json();
}