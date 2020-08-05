import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers:{"API-KEY": "ed9ff87e-25ab-4b75-a8a6-d22424d524be"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers (pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`, {
            withCredentials: true
        }).then(response => {
            return response.data
        })
    }
};

