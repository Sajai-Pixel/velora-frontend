import api from './axios'

export const registerUser = async (name, email, password,phone) => {
    const response = await api.post('/users/register', {
        name,
        email,
        phone,
        password,
    })
    return response.data
}

export const loginUser = async (email, password) => {
    const response = await api.post('/users/login', {
        email,
        password,
    })

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    return response.data
}

export const updatePassword = async (currentPassword, newPassword, confirmNewPassword) => {
    const response = await api.post('/users/update-password', {
        currentPassword, newPassword, confirmNewPassword
    })
    return response.data
}

export const adminLogin = async (username, password) => {
    const response = await api.post('/admin', {
        username,
        password
    })

    localStorage.setItem('admintoken', response.data.admintoken)
    return response.data
}


export const getAllUsers = async () => {
    const response = await api.get('/users')
    return response.data
}
