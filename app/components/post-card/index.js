/**
 * TODO:
 * 	1) fetching team data from database
 *  2) mobile design for the project card
 *  3) make it expand on action click
 *  4) fetch real keywords from database
 *  5) pagination in index page by 8 projects per page
 */
import {
  Box,
  Badge,
  Button,
  Heading,
  Flex,
  VStack,
  HStack,
  Text,
  useBoolean,
  //Image,
} from "@chakra-ui/react";
import { SocialLink } from "../styled-link/social-link";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import Image from "next/image";
import miscLogo from "../../public/misc-projectLogo.png";
import { github, discord } from "../../content/socials";

// TODO: fetch project team name from database
const ProjectCard = ({ project }) => {
  // temp static data
  const keywords = {
    data: ["js", "django", "react", "nextjs", "figma"],
  };
  const [isExpanded, setExpanded] = useBoolean();
  const { colorGrey, secondaryThemed } = useColorModeSwitcher();

  const {
    id,
    createdAt,
    updatedAt,
    projectName,
    catchPhrase,
    description,
    startDate,
    positionTitles,
    // keywords,
    timeZone,
    githubLink,
    discordId,
    isChinguVoyage,
    teamId,
  } = project;

  return (
    <VStack mx="auto" w="80%" spacing="0rem" mb="2rem" pb={0}>
      <HStack
        spacing="4rem"
        w="inherit"
        h="200px"
        // mx="auto"
        mb="0.2rem"
        p="1rem"
        bgColor="accent.simpleWhite"
        boxShadow="md"
        borderRadius="7px"
        borderColor={colorGrey}
        // w={{ base: "30em", lg: "57.5rem" }}
      >
        <VStack w="30%" h="90%" alignSelf="flex-start">
          <HStack>
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

          <HStack
            w="200px"
            // alignContent="flex-end"
            justifyContent="center"
            flexWrap="wrap"
            mt="3.5rem"
          >
            {keywords.data.map((keyword) => (
              <Badge variant="primary" mt="0.5rem" mb="0.5rem">
                {keyword}
              </Badge>
            ))}
          </HStack>

          <HStack w="70%" spacing={{ base: "1px" }}>
            <SocialLink
              color={discord.color}
              icon={discord.icon}
              href="/broken_link_fetch_fethc_this_info"
              name={discord.name}
            />
            <SocialLink
              color={github.color}
              icon={github.icon}
              href="/broken_link_fetch_fethc_this_info"
              name={github.name}
            />
          </HStack>
        </VStack>
        <VStack w="70%" h="inherit" alignSelf="flex-start" verticalAlign="top">
          <Text variant="body" mb="2rem">
            {description}
          </Text>
          <Button
            pt="0.3rem"
            pr="2rem"
            alignSelf="flex-end"
            // justifySelf="flex-end"
            size="xs"
            variant="link"
            onClick={setExpanded.toggle}
          >
            Read More
          </Button>
        </VStack>
      </HStack>
      <ExpandableWrapper
        isVisible={isExpanded}
        w="inherit"
        bgColor="accent.simpleWhite"
        boxShadow="lg"
        borderRadius="7px"
      >
        <p>Boolean state: {isExpanded.toString()}</p>
      </ExpandableWrapper>
    </VStack>
  );
};

const ExpandableWrapper = ({ children, isVisible, ...other }) => {
  return (
    <Box display={isVisible ? "block" : "none"} {...other}>
      This Is Expandable Section
      {children}
    </Box>
  );
};

export default ProjectCard;
