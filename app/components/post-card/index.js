import {
  Box,
  Heading,
  Flex,
  VStack,
  HStack,
  Text,
  //Image,
} from "@chakra-ui/react";
// import { Img } from "../next-responsive-img";
import Image from "next/image";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import miscLogo from "../../public/misc-projectLogo.png";

// TODO: fetch project team name from database
const ProjectCard = ({ project }) => {
  const { colorGrey } = useColorModeSwitcher();

  const {
    id,
    createdAt,
    updatedAt,
    projectName,
    catchPhrase,
    description,
    startDate,
    positionTitles,
    keywords,
    timeZone,
    githubLink,
    discordId,
    isChinguVoyage,
    teamId,
  } = project;

  return (
    <HStack
      spacing="4rem"
      w="80%"
      h="200px"
      mx="auto"
      mb="0.5rem"
      p="1rem"
      bgColor="#FFFFFF"
      boxShadow="md"
      borderRadius="7px"
      borderColor={colorGrey}
      // w={{ base: "30em", lg: "57.5rem" }}
    >
      {/* {align="start"} <Text variant="body">{catchPhrase}</Text> */}
      {/* <VStack w="30%" spacing="-0.3rem"> width="40px" height="40px" /> */}
      <HStack w="30%" alignSelf="flex-start">
        <Box alignSelf="flex-start" position="relative" w="40px" h="40px">
          <Image
            src={miscLogo}
            objectFit="cover"
            layout="fill"
            alt="team logo"
          />
        </Box>
        <Box mt="-3.0rem" mb="2rem">
          <Heading textTransform="capitalize" as="h5" variant="h5">
            {projectName}
          </Heading>
          <Text variant="subTitle" mb="0.2rem" p="0.1rem">
            Team name placeholder
          </Text>
        </Box>
      </HStack>
      {/* </VStack> */}

      <Box w="70%" verticalAlign="top" alignSelf="flex-start">
        <Text variant="body" mb="2rem">
          {description}
        </Text>
      </Box>
    </HStack>
  );
};

export default ProjectCard;
