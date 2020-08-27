import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "ed9ff87e-25ab-4b75-a8a6-d22424d524be"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data
            })
    },
    getProfile(userId){
        console.warn("Outdated method. Please, use getProfile from profileAPI")
        return  profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/${userId}`)
            .then(response => { return response.data})
    },
    getStatus(userId){
        return  instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return  instance.put(`profile/status`, {status})
            .then(response => { return response.data})
    }
};

export const authAPI={
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
};

