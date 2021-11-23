import React, { useState } from "react";
//rimport { View, Text } from "react-native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  Link,
} from "native-base";
import tripStore from "../../Stores/tripStore";
const CreateTrip = () => {
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
    owner: null,
  });
  const handleCreate = async () => {
    await tripStore.createTrips(trip);
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
          Sign in now!
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
            <Input onChangeText={(title) => setTrip({ ...trip, title })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Input
              onChangeText={(description) => setTrip({ ...trip, description })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Purpose</FormControl.Label>
            <Input onChangeText={(purpose) => setTrip({ ...trip, purpose })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Season</FormControl.Label>
            <Input onChangeText={(season) => setTrip({ ...trip, season })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Highlights</FormControl.Label>
            <Input
              onChangeText={(highlights) => setTrip({ ...trip, highlightsr })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>departure</FormControl.Label>
            <Input
              onChangeText={(departure) => setTrip({ ...trip, departure })}
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
