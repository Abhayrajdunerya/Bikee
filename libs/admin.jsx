export const addNewCenter = async (name, email, mobile, address, location) => {
    const response = await fetch(`/api/admin/center`, {
        method: 'POST',
        body: JSON.stringify({
            name, email, mobile, address, location
        })
    })

    if (!response.ok) {
        throw new Error("Failed to add new center!");
    }

    return await response.json();
}

export const removeCenter = async (centerId) => {
    const response = await fetch(`/api/admin/center/${centerId}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error("Failed to remove center!");
    }

    return await response.json();
}

export const updateCenter = async (centerId, name, email, mobile, address, location) => {
    const response = await fetch(`/api/admin/center/${centerId}`, {
        method: 'PUT',
        body: JSON.stringify({
            name, email, mobile, address, location
        })
    })

    if (!response.ok) {
        throw new Error("Failed to update center!");
    }

    return await response.json();
}

// actions on employee
export const addEmployee = async (user, position, center) => {
    const response = await fetch(`/api/admin/employees`, {
        method: 'POST',
        body: JSON.stringify({
            user, position, center 
        })
    })

    if (!response.ok) {
        throw new Error("Failed to add employee!");
    }

    return await response.json();
}

export const getEmployeesByCenter = async (centerId) => {
    const response = await fetch(`/api/admin/employees/center`, {
        method: 'POST',
        body: JSON.stringify(centerId)
    })

    if (!response.ok) {
        throw new Error("Failed to fetch employees!");
    }

    return await response.json();
}

// other img actions
export const getIncomeHistory = async () => {
    const response = await fetch(`/api/`)

    if (!response.ok) {
        throw new Error("Failed to get income history!");
    }

    return await response.json();
}

