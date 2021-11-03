import React from "react";
// import {
//   Flex,
//   Box,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   CircularProgress,
//   Text,
//   InputGroup,
//   InputRightElement,
//   Icon,
// } from "@chakra-ui/react";

import { LoginForm } from "../../components/login-form";
// import { useForm } from "react-hook-form";
// import { userLogin } from "../../utils/mockApi";
import { ContentWrapper } from "../../layouts/content-wrapper";
import { Container } from "../../layouts/container";
import NoSsr from "../../utils/NoSsr";

export default function Login() {
  return (
    <NoSsr>
      <Container title="Login Page | Project Init">
        <ContentWrapper>
          <LoginForm />
        </ContentWrapper>
      </Container>
    </NoSsr>
  );
}
