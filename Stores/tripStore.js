import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  trips = [];
  loading = true;

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      // REVIEW: Remove console logs
      console.log(response.data);
      this.trips = response.data;
      // REVIEW: Remove console logs
      console.log("hi" + this.trips);

      this.loading = false;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };

  createTrips = async (newTrip, navigation) => {
    try {
      const response = await instance.post("/trips", newTrip);
      // REVIEW: Why do you go back to the Create List? How about gpoing to the list opf trips?
      // REVIEW: push then navigate
      navigation.navigate("CreateTrip");
      this.trips.push(response.data);

      //this.loading = false;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
