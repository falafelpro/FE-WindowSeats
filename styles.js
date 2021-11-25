import { Center } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tripDetailWrapper: {
    marginTop: 20,
  },

  tripDetailImage: {
    width: 150,
    height: 150,
  },

  tripDetailTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },

  authContainer: {
    flex: 2,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },

  authTitle: {
    fontSize: 24,
    marginBottom: 20,
  },

  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
  },

  AuthOther: {
    marginTop: 15,
    marginBottom: 10,
  },

  ButtonDesign: {
    padding: 10,
    marginTop: 15,
    color: "navy",
  },
});

export default styles;
