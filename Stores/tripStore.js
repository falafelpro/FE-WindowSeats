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
      console.log(response.data);
      this.trips = response.data;
      console.log("hi" + this.trips);

      this.loading = false;
    } catch (error) {
      console.log("tripStore -> fetchTrips -> error", error);
    }
  };

  createTrips = async (newTrip, navigation) => {
    try {
      const response = await instance.post("/trips", newTrip);
      navigation.navigate("CreateTrip");
      this.trips.push(response.data);
      navigation.navigate("TripList");
      //this.loading = false;
    } catch (error) {
      console.log("tripStore -> createTrips -> error", error);
    }
  };
}

// deleteTrips = async () => {
//   try {
//       const response = await instance.delete("/:tripId)

//   } catch (error) {
//     console.log("tripStore -> deleteTrips -> error, error");
//   }
// };

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
