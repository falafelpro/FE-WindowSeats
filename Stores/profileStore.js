import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

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
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
