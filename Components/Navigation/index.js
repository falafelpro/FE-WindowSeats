import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

import ProfileDetail from "../Profile/ProfileDetail";
import ProfileList from "../Profile/ProfileList";
import ProfileUpdate from "../Profile/ProfileUpdate";

import TripList from "../Welcome/TripList";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="ProfileList">
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />

      <Screen name="ProfileList" component={ProfileList} />
      <Screen name="ProfileDetail" component={ProfileDetail} />
      <Screen name="ProfileUpdate" component={ProfileUpdate} />

      <Screen name="TripList" component={TripList} />
    </Navigator>
  );
};

export default RootNavigator;
