import React, { useState } from "react";
import authStore from "../../Stores/authStore";
import { View, Text } from "react-native";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
} from "native-base";
import tripStore from "../../Stores/tripStore";

const CreateTrip = ({ route, navigation, props }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    purpose: "",
    season: "",
    highlights: "",
    images: [],
    departure: "",
    destination: "",
    rating: 0,
    owner: authStore.user._id,

  });
  const handleCreate = async () => {
    //console.log(authStore.user);
    //setTrip({ ...trip, owner: authStore.user._id });
    await tripStore.createTrips(trip, navigation);
  };
  return (
    <Center>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Create your trip:
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Your Window Seat awaits!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input
              placeholder="E.g. Dubai Girls Trip"
              onChangeText={(title) => setTrip({ ...trip, title })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Input
              placeholder="E.g. It was an unforgettable weekend!"
              onChangeText={(description) => setTrip({ ...trip, description })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Purpose</FormControl.Label>
            <Input
              placeholder="E.g. Fun"
              onChangeText={(purpose) => setTrip({ ...trip, purpose })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Season</FormControl.Label>
            <Input
              placeholder="E.g. Summer"
              onChangeText={(season) => setTrip({ ...trip, season })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Highlights</FormControl.Label>
            <Input
              placeholder="E.g. Shopping and food"
              onChangeText={(highlights) => setTrip({ ...trip, highlights })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Ratings</FormControl.Label>
            <Input
              placeholder="Enter number between 1 and 5"
              type="number"
              maxLength="5"
              onChangeText={(rating) => setTrip({ ...trip, rating })}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleCreate}>
            Create Trip
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default CreateTrip;
