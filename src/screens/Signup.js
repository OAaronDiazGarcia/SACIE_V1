import {
  NativeBaseProvider,
  Image,
  Box,
  Center,
  Heading,
  FormControl,
  Input,
  Button,
  Link,
  Text,
  HStack,
  VStack,
  Row,
  Checkbox,
} from "native-base";
import React from "react";
import BackButton from "../utils/components/BackButton";
import BlueButton from "../utils/components/BlueButton";
import Enf_2 from "../MarcoImages/Enf_2.png";
import FormInput from "../utils/components/FormInput";
import FormInputPass from "../utils/components/FormInputPass";

import ScreenNames from "../utils/ScreenNames";

const Signup = ({ navigation }) => {
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="300" py="8">
        <BackButton />
      </Box>
      <Image
        style={{
          width: 250,
          height: 250,
        }}
        source={Enf_2}
        size="xl"
      />
      <Heading style={{ fontSize: 32 }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading
        mt="1"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
        fontWeight="medium"
        size="xs"
      >
        Sign up to continue!
      </Heading>
      <Box safeArea p="2" py="8" w="90%" maxW="300">
        <VStack space={3} mt="5">
          <FormInput label="Name"></FormInput>
          <FormInput label="Last Name"></FormInput>
          <FormInput label="Email"></FormInput>
          <FormInputPass
            label="Password"
            placeholder={"Minimum Password-lenght 8 Characters"}
          ></FormInputPass>
          <FormInputPass
            label="Confirm Password"
            placeholder={"Password must be identical"}
          ></FormInputPass>

          <BlueButton
            title={"Sign Up"}
            onPress={() => alert("No hay Home")}
          ></BlueButton>
          <HStack space={3}>
            <Link
              _text={{
                fontSize: "m",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
              onPress={() => navigation.navigate(screen.LoginScreen)}
            >
              Already have an account? Login
            </Link>
          </HStack>
          <HStack justifyContent={'center'}>
            <Checkbox  fontSize={10}>I've already read the policy of </Checkbox>
            <Link onPress={()=> navigation.navigate(ScreenNames.TermnsAndConditionsCheckBoxScreen)} my={'auto'} _text={{fontSize: '12', color: 'indigo.500'}}>Terms and Conditions</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;
