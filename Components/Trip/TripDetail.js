import React from "react";
import { Text, Image, View } from "react-native";
import tripStore from "../../Stores/tripStore";
import { Button, Spinner } from "native-base";
import { observer } from "mobx-react";
import TripList from "../Welcome/TripList";
import styles from "../../styles";

const TripDetail = ({ route, navigation }) => {
  if (tripStore.isLoading) return <Spinner />;

  const trip = route.params.trip;
  console.log(route);
  console.log(trip);

  return (
    <View style={styles.tripDetailWrapper}>
      <Text style={styles.tripDetailTitle}> {trip.title}</Text>
      <Image
        source={{ uri: trip.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{trip.description}</Text>

      <Text>Season: {trip.season}</Text>
      <Text>Highlights: {trip.highlights}</Text>
      <Text>Rate: {trip.rating}/5</Text>
      <Button
        onPress={() => {
          navigation.navigate("ProfileDetail");
        }}
      >
        Update Trip
      </Button>
    </View>
  );
};
export default observer(TripDetail);
