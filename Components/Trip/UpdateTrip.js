import React, { useState } from "react";
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

const UpdateTrip = ({ route, navigation, props }) => {
  const [trip, setTrip] = useState({
    title: props.trip.title,
    description: props.trip.description,
    purpose: props.trip.purpose,
    season: props.trip.season,
    highlights: props.trip.highlights,
    images: props.trip.images,
    departure: props.trip.departure,
    destination: props.trip.destination,
    rating: props.trip.rating,
    owner: props.trip.owner,
  });
  //   const handleChange = (event) => {
  //     setTrip({ ...trip, [event.target.name]: event.target.value });
  //   };

  const handleUpdate = async () => {
    await tripStore.updateTrip(trip);
    navigation.navigate("TripList");
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
          <Button mt="2" colorScheme="indigo" onPress={handleUpdate}>
            Update Trip
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default UpdateTrip;
