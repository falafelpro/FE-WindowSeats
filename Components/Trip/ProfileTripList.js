import React from "react";
import { View, Text } from "react-native";
import { VStack, Button, Box } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";
import TripItem from "../Welcome/TripItem";
import tripStore from "../../Stores/tripStore";
import styles from "../../styles";

const TripList = ({ navigation, trips }) => {
  //let tripList = trips ? trips : tripStore.trips;

  const newTransformedTripList = trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));
  //console.log(tripList);
  return (
    <View>
      <Box style={styles.authContainer}>
        <Text>Welcome {authStore.user?.username} to my page </Text>
        {/* <Text style={styles.authTitle}>
           {authStore.user?.username}
        </Text> */}
        <View>{newTransformedTripList} </View>
      </Box>
    </View>
  );
};

export default observer(TripList);
