import React from "react";
import { View, Text } from "react-native";
import { VStack, Button, Box } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import TripItem from "./TripItem";
import tripStore from "../../Stores/tripStore";
import styles from "../../styles";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));

  return (
    <View>
      <Box style={styles.authContainer}>
        <Text>Welcome to your </Text>
        <Text style={styles.authTitle}>
          Window Seat {authStore.user?.username}
        </Text>
        <Button onPress={() => navigation.navigate("CreateTrip")}>
          Create Trip
        </Button>
        <View>{tripList} </View>
      </Box>
      <Button onPress={() => authStore.logout(navigation)}> Logout </Button>
    </View>
  );
};

export default observer(TripList);
