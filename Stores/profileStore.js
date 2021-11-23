import { makeAutoObservable } from "mobx";
import { baseURL, instance } from "./instance";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }

  profiles = [];

  isLoading = true;

  fetchProfiles = async () => {
    try {
      const res = await instance.get("/profiles");
      this.profiles = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfiles = async (updatedProfile, profileId) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      const res = await instance.put(`/profiles/${profileId}`);
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
