import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "2bd0f855-9fc5-4119-8b83-b1bafce4fa2b"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId){
        return instance.post(`follow/${userId}`,)
            .then(response => {
                return response.data
            });
    },

    unFollow(userId){
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response =>{
                return response.data
            });
    },
};

export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    },
}

