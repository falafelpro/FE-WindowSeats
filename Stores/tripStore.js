import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  trips = [
    {
      title: "France Weekend",
      description: "best weekend ever, so much love",
    },
  ];

  loading = true;

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      // console.log(response.data);
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
