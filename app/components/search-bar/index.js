import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "../icons/search-icon";
import { useForm } from "react-hook-form";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";

const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

function SearchBar() {
  const { authThemed } = useColorModeSwitcher();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  // const onSubmit = async ({ query }, e) => {
  //   try {
  //     const data = await client("search", {
  //       data: {
  //         query,
  //       },
  //     });
  // 		 e.target.reset();
  //   } catch (e) {
  //     throw new Error(`Error occured: ${e.message}`);
  //   }
  // };
  const onSubmit = async ({ search }, e) => {
    delay(
      function (search) {
        console.log(search);
      },
      3000,
      search
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup size="md" w={{ base: "20rem", md: "40rem" }}>
        <InputLeftElement>
          <IconButton
            aria-label="search"
            borderRadius="4px"
            variant="unstyled"
            type="submit"
            isLoading={isSubmitting}
            icon={<SearchIcon />}
          />
        </InputLeftElement>
        <Input
          bg="accent.simpleWhite"
          borderRadius="4px"
          placeholder="Search"
          type="text"
          {...register("search", {
            minLength: 1,
            maxLength: 20,
          })}
        />
        {errors.search && (
          <Text color="red" variant="small">
            {errors.search.message}
          </Text>
        )}
      </InputGroup>
    </form>
  );
}

export { SearchBar };
