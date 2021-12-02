import React, { useEffect } from "react";
import axios from "axios";
import queryClient from "../lib/react-query";
import ProjectCard from "../components/post-card";
import { useMediaQuerySSR } from "../hooks/useMediaQuerySsr";
import { dehydrate, useQuery } from "react-query";
import { Container } from "../layouts/container";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Box, Text, Spinner } from "@chakra-ui/react";

const getHomepageData = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/`);

  return res.data;
};

const getMe = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/me`);

  return res.data;
};

export default function Home() {
  const { status, data, error } = useQuery("projects", getHomepageData);
  const [isMobile] = useMediaQuerySSR("(max-width: 620px)");

  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        {error && <Text>{error.message}</Text>}
        {status === "loading" ? (
          <Spinner size="lg" />
        ) : (
          <Box>
            {data.map((p) => (
              <ProjectCard key={p.id} isMobile={isMobile} project={p} />
            ))}
          </Box>
        )}
      </ContentWrapper>
    </Container>
  );
}

export const getServerSideProps = async () => {
  // query all projects with particular team data relevant to the use case on this page
  // sorts the data in descending order by the date of creation
  await queryClient.prefetchQuery("projects", getHomepageData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
