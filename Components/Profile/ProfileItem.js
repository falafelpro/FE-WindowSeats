import React from "react";

import { Text, Image, View } from "react-native";

import { Button } from "native-base";
import { baseURL } from "../../Stores/instance";
import ProfileUpdate from "./ProfileUpdate";
import ProfileDetail from "./ProfileDetail";
// REVIEW: Remove unused imports

const ProfileItem = ({ profile, navigation }) => {
  console.log(profile);
  // REVIEW: Remove console logs

  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: baseURL + profile.image }}
      />

      <Text> {profile.description} </Text>
      <Button
        onPress={() =>
          navigation.navigate("ProfileDetail", { profile: profile })
        }
      >
        Details
      </Button>
    </View>
  );
};

export default ProfileItem;
