import { GetItemsType, instance } from "./api";

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetItemsType>(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => {
        return response.data
      });
  },
  follow(userId: number) {
    return instance.post(`follow/${ userId }`,)
      .then(response => {
        return response.data
      });
  },

  unFollow(userId: number) {
    return instance.delete(`follow/${ userId }`,)
      .then(response => {
        return response.data
      });
  },
};
