import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./Components/Navigation";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// REVIEW: Remove unused code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
