import React from "react";
import { Text, View, Image } from "react-native";
import { HStack, VStack, Button, Pressable } from "native-base";
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation }) => {
  console.log(trip.images[0]);
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TripDetail", { trip: trip });
        console.log("click");
      }}
    >
      <View w="100%" alignItems="center" space="3">
        <Image
          source={{ uri: trip.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{trip.title}</Text>
      </View>
    </Pressable>
  );
};

export default observer(TripItem);
