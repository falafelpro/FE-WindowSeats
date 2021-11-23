import { Text, Image, View } from "react-native";
import React from "react";
import profileStore from "../../Stores/profileStore";
import { Spinner } from "native-base";
import { baseURL } from "../../Stores/instance";

const ProfileDetail = ({ route }) => {
  if (profileStore.isLoading) return <Spinner />;

  const profile = route.params.profile;
  return (
    <View>
      <Image
        source={{ uri: profile.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{profile.description}</Text>
    </View>
  );
};
export default ProfileDetail;
