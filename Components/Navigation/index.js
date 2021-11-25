import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import CreateTrip from "../Trip/CreateTrip";
import ProfileDetail from "../Profile/ProfileDetail";
import ProfileList from "../Profile/ProfileList";
import ProfileUpdate from "../Profile/ProfileUpdate";
import UpdateTrip from "../Trip/UpdateTrip";
import TripList from "../Welcome/TripList";
import test from "../Trip/test";
import TripDetail from "../Trip/TripDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Signin">

      <Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign up",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="ProfileList"
        component={ProfileList}
        options={{
          title: "Sign in",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        options={{
          title: "Update Profile",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          title: "My Feed",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="CreateTrip"
        component={CreateTrip}
        options={{
          title: "Window Seat: Create Trip",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="UpdateTrip"
        component={UpdateTrip}
        options={{
          title: "Window Seat: Create Trip",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{
          title: "Window Seat: Trip",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Sign in",
          headerStyle: {
            backgroundColor: "#2a21a5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Screen name="test" component={test} />
    </Navigator>
  );
};

export default RootNavigator;
