import { Text, Image, View, ScrollView } from "react-native";
import React from "react";
import profileStore from "../../Stores/profileStore";
import { Button, Spinner } from "native-base";
import { observer } from "mobx-react";
import ProfileTripList from "../Trip/ProfileTripList";
import tripStore from "../../Stores/tripStore";

const ProfileDetail = ({ route, navigation }) => {
  if (profileStore.isLoading) return <Spinner />;
  const profile = route.params.owner;
  //trip.owner._id === profile._id
  // console.log(tripStore.trips[9].owner._id);
  // console.log(tripStore.trips[9].owner);
  // console.log(profile);
  // console.log(profile._id);
  const foundProfileTrips = tripStore.trips.filter(
    (trip) => trip.owner?._id === profile?._id
  );
  return (
    <View>
      <Image
        source={{ uri: profile.image }} // Add baseURL later as images in database are string url not a file source={{ uri: baseURL + profile.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{profile.description}</Text>
      <ScrollView>
        <ProfileTripList trips={foundProfileTrips} />
      </ScrollView>
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
