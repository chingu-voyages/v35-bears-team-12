import React, { useEffect } from "react";
import NextLink from "next/link";
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
import { useColorModeSwitcher } from "../hooks/useColorModeSwitcher";
import { useUserStore } from "../context/useUserStore";
import { useAsync } from "../hooks/useAsync";
import { client } from "../utils/api-client";
import prisma from "../lib/prisma";

// try {
//   const data = await client("projects");
//   if (data) {
//     console.log(data);
//     res.status(200).json(data);
//   }
// } catch (e) {
//   throw new Error(`Error occured: ${e.message}`);
// }

export default function Home({ allProjects }) {
  const projects = JSON.parse(allProjects);

  // const mapMembers = () => {
  //   projects.map((project) => {
  //     project.team.members.map((member) => {
  //       console.log(member);
  //     });
  //   });
  // };
  // if (projects) mapMembers();

  // const [session, loading] = useSession();
  // const { session } = useUserStore();
  // const { data, error, run, isLoading, isError, isSuccess } = useAsync();

  // TODO: put initial fetch into getServerSideProps() call.
  // React.useEffect(() => {
  //   run(client("d/projects"));
  // }, [run]);
  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        {/* {!session && (
          <>
            Not signed in
            <br />
          </>
        )}

        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Text color="roseRed.900">{error.message}</Text>
        ) : null}

        {isSuccess ? (
          data ? (
            <Box>
              {data.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </Box>
          ) : (
            <Text>No records were found</Text>
          )
        ) : null} */}
        {projects ? (
          <Box>
            {projects.map((p) => (
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
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      team: {
        include: {
          members: {
            select: {
              // id: true,
              username: true,
              avatarUrl: true,
              github: true,
            },
          },
        },
      },
    },
  });
  const allProjects = await JSON.stringify(projects);
  // console.log(allProjects);
  return { props: { allProjects } };
};
