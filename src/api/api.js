import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
    , headers: { 'API-KEY': '25f6230c-626b-481c-b239-8a01c15f9799' }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getSatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status){
        return instance.put('profile/status',{status})
    }
}

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}