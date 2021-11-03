import React, { useState, useEffect } from "react";
import {
  VStack,
  Input,
  Button,
  HStack,
  Flex,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { NavLink } from "../styled-link/nav-link";
import { useRouter } from "next/router";

// import * as auth from "../../utils/auth-provider";
import { signIn, signOut, useSession } from "next-auth/client";
import { client } from "../../utils/api-client";
// import { client } from "../../utils/api-client";

// import { useAsync } from "../../hooks/useAsync";

import { useForm } from "react-hook-form";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { useUserStore } from "../../context/useUserStore";

// async function getUser() {
//   let user = null;

//   const token = await auth.getToken();
//   if (token) {
//     const data = await client("me", { token });
//     user = data.user;
//   }

//   return user;
// }
/* Validator Example */
const validatePassword = (value) => {
  if (value.length < 6) {
    return "Password should be at-least 6 characters.";
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
  ) {
    return "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.";
  }
  return true;
};

function LoginForm() {
  const router = useRouter();
  const [session, loading] = useSession();
  // I know two logins in one file are quite confusing, will work on it later
  // when I make sure everything is linked and works
  const { login } = useUserStore();
  // TODO: Styles
  const { themed, authThemed, colorGrey } = useColorModeSwitcher();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  // const onSubmit = (data) => console.log(data);
  // values { username, password }
  const onSubmit = async ({ username, password }) => {
    // const user = await auth.login({ username, password });
    try {
      const user = await client("login", {
        data: {
          username,
          password,
        },
      });
      // how do you gracefully handle submit data in this library?
      // for now I don't understand, Formikkkkk ?
      // if (user.errors) alert(user.errors.message);
      // learn how to deal with onSubmit error in this library..
      if (user.data) {
        login(user.data.token, user.data.userId);
        router.push("/");
      }
    } catch (error) {
      throw new Error(`Error occured: ${error.message}`);
    }
  };
  // const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Okey this is how you would deal with the error, simply show the spinner if isSubmitting */}
      {isSubmitting ? <div>Submitting</div> : null}
      <VStack
        border="1px solid"
        borderRadius="md"
        m="auto"
        p="1.5rem"
        spacing="1rem"
      >
        <Text variant="subtitle">Login</Text>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          placeholder="Username"
          type="text"
          {...register("username", {
            required: "Please enter username",
            minLength: 3,
            maxLength: 20,
          })}
        />
        {errors.username && (
          <Text color="red" variant="small">
            {errors.username.message}
          </Text>
        )}
        {/* Add fancy, proper error handling */}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Please enter Password",
            minLength: { value: 8, message: "Too short" },
            validate: validatePassword,
          })}
        />
        {errors.password && (
          <Text maxW="inherit" color="red" variant="small">
            {errors.password.message}
          </Text>
        )}
        {/* Add fancy, proper error handling */}
        <HStack spacing="1rem">
          <Button
            bg={authThemed}
            borderRadius="sm"
            type="submit"
            // variant="ghost"
          >
            Login
          </Button>
          <Button
            bg={authThemed}
            borderRadius="sm"
            type="submit"
            // variant="ghost"
          >
            Register
          </Button>
        </HStack>
        <Flex mt={2}>
          <NavLink href="/auth/forgot-password" ml="auto">
            Forgot Password?
          </NavLink>
        </Flex>
      </VStack>
    </form>
  );
}

export { LoginForm };
