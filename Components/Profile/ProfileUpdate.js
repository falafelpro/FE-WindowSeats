import React, { useState } from "react";

import profileStore from "../../Stores/profileStore";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  Link,
} from "native-base";

const ProfileUpdate = ({ oldProfile, navigation }) => {
  const [profile, setProfile] = useState({
    description: oldProfile.description,
    image: oldProfile.image,
  });

  const handleSubmit = async () => {
    await profileStore.updateProfiles(profile, navigation);
  };

  return (
    <Center>
      <Box safeArea p="2" py="8" w="90%" maxW="500">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Update Your Profile!
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
          Tell us about yourself!
        </Heading>

        <VStack space={5} mt="5">
          <FormControl>
            <FormControl.Label>Description</FormControl.Label>
            <Input
              onChangeText={(description) =>
                setProfile({ ...profile, description })
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Upload your image</FormControl.Label>
            <Input
              type="password"
              onChangeText={(image) => setProfile({ ...profile, image })}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Update
          </Button>
          <HStack mt="6" justifyContent="center"></HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default ProfileUpdate;
