import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const test = ({ route, navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  //   const showMode = (currentMode) => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  //   const showDatepicker = () => {
  //     showMode("date");
  //   };

  //   const showTimepicker = () => {
  //     showMode("time");
  //   };

  return (
    <View>
      <View>
        <Button onPress={() => setShow(true)} title="Show date picker!" />
      </View>
      <View>
        <Button title="Show time picker!" />
      </View>

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    </View>
  );
};

export default test;
