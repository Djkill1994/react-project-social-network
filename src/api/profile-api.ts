import { ProfileType } from "../types/types";
import { instance } from "./api";

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data
      });
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
    //try catch прочитать
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/from-data'
      }
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  },
}
