import React from "react";
import { Text, View, Image } from "react-native";
import { HStack, VStack, Button } from "native-base";
import { observer } from "mobx-react";

const TripItem = ({ trip }) => {
  return (
    <View w="100%" alignItems="center" space="3">
      <Text>{trip.title}</Text>
    </View>
  );
};

export default observer(TripItem);
