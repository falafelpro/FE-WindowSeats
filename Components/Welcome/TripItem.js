import React from "react";
import { Text, View, Image } from "react-native";
import { HStack, VStack, Button, Pressable, Link } from "native-base";
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation }) => {
  console.log(trip.owner);
  console.log(trip.images[0]);
  return (
    <View w="100%" alignItems="center" space="3">
      <Image
        source={{ uri: trip.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
        style={{ width: 100, height: 100 }}
      />
      <Link onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
        {trip.title}
      </Link>
      <Link
        onPress={() =>
          navigation.navigate("ProfileDetail", { owner: trip.owner })
        }
      >
        <Text>owener: {trip.owner?.username}</Text>
      </Link>
    </View>
  );
};

export default observer(TripItem);
