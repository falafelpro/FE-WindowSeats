import React from "react";
import { Text, View, Image } from "react-native";
import { observer } from "mobx-react";

const TripItem = ({ trip }) => {
  console.log(trip.images[0]);
  return (
    <View w="100%" alignItems="center" space="3">
      <Text>{trip.title}</Text>
      {/* <Image source={trip.images[0]} style={ }></Image> */}
    </View>
  );
};

export default observer(TripItem);
