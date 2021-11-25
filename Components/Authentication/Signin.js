import React from "react";
import authStore from "../../Stores/authStore";
import { useState } from "react";

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

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    authStore.signin(user, navigation);
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
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Link onPress={() => navigation.navigate("Signup")}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;
