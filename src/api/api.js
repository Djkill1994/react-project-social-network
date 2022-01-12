import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "2bd0f855-9fc5-4119-8b83-b1bafce4fa2b"
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
};

export const buttonFollowAPI = {
    postButton(id) {
        return instance.post(`follow/${id}`,)
            .then(response => {
                return response.data
            });
    }
};

export const buttonUnFollowAPI = {
    deleteButton(id) {
        return instance.delete(`follow/${id}`,)
            .then(response => {
                return response.data
            });
    }
};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response =>{
                return response.data
            });
    }
};
