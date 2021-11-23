import React from "react";
import { View, Text } from "react-native";
import { Button, VStack } from "native-base";
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
      {/* make sure to send the navigator so you can navigate back to triplist */}
      <Button onPress={() => navigation.navigate("CreateTrip")}>
        Create A Trip
      </Button>
      <View>{tripList}</View>
      <Button onPress={() => authStore.logout(navigation)}>Logout</Button>
    </View>
  );
};

export default observer(TripList);
