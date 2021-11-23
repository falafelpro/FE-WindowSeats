import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import profileStore from "../../Stores/profileStore";
import ProfileItem from "./ProfileItem";

const ProfileList = ({ navigation }) => {
  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile._id} navigation={navigation} />
  ));

  console.log(profileList);
  console.log(profileStore.profiles);

  return <ScrollView>{profileList}</ScrollView>;
};

export default observer(ProfileList);
