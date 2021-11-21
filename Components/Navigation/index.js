import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";

import Signup from "../Authentication/Signup";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Signin">
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};

export default RootNavigator;
