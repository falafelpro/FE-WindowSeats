import React from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import tripStore from "../../Stores/tripStore";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} />
  ));

  return (
    <View>
      <Text> Welcome to your Window Seat {authStore.user?.username} </Text>
      <View>{tripList} </View>
      <Button onPress={() => navigation.navigate("CreateTrip")}>
        Create Trip
      </Button>
      <Button onPress={() => authStore.logout(navigation)}> Logout </Button>
    </View>
  );
};

export default observer(TripList);

// make sure to send the navigator so you can navigate back to trip list
// make on press for add trip to navigate back to trip list
