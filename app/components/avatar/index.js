import React from "react";
import { Avatar as ChakraAvatar, Flex, Text } from "@chakra-ui/react";

// same as chakra props for now
export const Avatar = ({ ...props }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      // border="1px solid"
    >
      <ChakraAvatar {...props} />
      <Text ml="0.4rem" variant="preTitle">
        {props.name}
      </Text>
    </Flex>
  );
};
