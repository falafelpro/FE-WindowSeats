import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ProfileDetail from "../Profile/ProfileDetail";
import ProfileList from "../Profile/ProfileList";

import Welcome from "../Welcome/Welcome";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="ProfileList">
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="ProfileList" component={ProfileList} />
      <Screen name="ProfileDetail" component={ProfileDetail} />
    </Navigator>
  );
};

export default RootNavigator;
