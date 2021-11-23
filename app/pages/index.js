import React, { useEffect } from "react";
import axios from "axios";
import queryClient from "../lib/react-query";
import { dehydrate, useQuery } from "react-query";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import {
  Box,
  Link,
  Heading,
  Flex,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import ProjectCard from "../components/post-card";
// import { useColorModeSwitcher } from "../hooks/useColorModeSwitcher";
// import { useUserStore } from "../context/useUserStore";
// import { useAsync } from "../hooks/useAsync";
// import { client } from "../utils/api-client";
// import prisma from "../lib/prisma";

const getHomepageData = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/`);

  return res.data;
};

export default function Home() {
  const { data } = useQuery("projects", getHomepageData);

  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        {data ? (
          <Box>
            {data.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </Box>
        ) : (
          <Text>No records were found</Text>
        )}
      </ContentWrapper>
    </Container>
  );
}
export const getStaticProps = async () => {
  // query all projects with particular team data relevant to the use case on this page
  // sorts the data in descending order by the date of creation
  await queryClient.prefetchQuery("projects", getHomepageData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
