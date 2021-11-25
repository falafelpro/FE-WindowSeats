import React from "react";
import { View, Text } from "react-native";
import { VStack, Button, Box } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import tripStore from "../../Stores/tripStore";
import styles from "../../styles";

const TripList = ({ navigation, trips }) => {
  let tripList = trips ? trips : tripStore.trips;

  const newTransformedTripList = tripList.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));
  console.log(tripList);
  return (
    <View>
      <Box style={styles.authContainer}>
        <Text style={styles.AuthOther}> Welcome to your </Text>
        <Text style={styles.authTitle}>
          Window Seat {authStore.user?.username}
        </Text>
        <Button onPress={() => navigation.navigate("CreateTrip")}>
          Create Trip
        </Button>
        <View>{newTransformedTripList} </View>
      </Box>
      <Button onPress={() => authStore.logout(navigation)}>Logout</Button>
    </View>
  );
};

export default observer(TripList);
