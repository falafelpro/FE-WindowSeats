import React from "react";
import { View, Text } from "react-native";
import { Button, Title } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Text> Welcome to "Window Seat" </Text>

      <Text>{authStore.user?.username} </Text>

      <Button onPress={() => authStore.logout(navigation)}>Logout</Button>
    </View>
  );
};

export default observer(Welcome);
