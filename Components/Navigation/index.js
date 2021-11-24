import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import CreateTrip from "../Trip/CreateTrip";
import ProfileDetail from "../Profile/ProfileDetail";
import ProfileList from "../Profile/ProfileList";
import ProfileUpdate from "../Profile/ProfileUpdate";
import TripList from "../Welcome/TripList";
import test from "../Trip/test";

import TripDetail from "../Trip/TripDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Singin">
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="ProfileList" component={ProfileList} />
      <Screen name="ProfileDetail" component={ProfileDetail} />
      <Screen name="ProfileUpdate" component={ProfileUpdate} />
      <Screen name="TripList" component={TripList} />
      <Screen name="CreateTrip" component={CreateTrip} />
      <Screen name="test" component={test} />
      <Screen name="TripDetail" component={TripDetail} />
    </Navigator>
  );
};

export default RootNavigator;
