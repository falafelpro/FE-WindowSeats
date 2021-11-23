import { Text, Image, View } from "react-native";
import React from "react";
import profileStore from "../../Stores/profileStore";
import { Button, Spinner } from "native-base";
import ProfileUpdate from "./ProfileUpdate";
import { observer } from "mobx-react";

const ProfileDetail = ({ route, navigation }) => {
  if (profileStore.isLoading) return <Spinner />;

  const profile = route.params.profile;
  console.log(profile);

  return (
    <View>
      <Image
        source={{ uri: profile.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{profile.description}</Text>
      <Button
        onPress={() => {
          navigation.navigate("ProfileUpdate", { oldProfile: profile });
        }}
      >
        Update Profile
      </Button>
    </View>
  );
};
export default observer(ProfileDetail);
