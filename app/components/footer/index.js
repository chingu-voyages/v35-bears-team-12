import { Box, Stack } from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./socialMedia";
import CompanyRoutes from "./CompanyRoutes";

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{
        base: "4",
        md: "8",
      }}
    >
      <CompanyRoutes />
      <Stack direction="row" spacing="3" align="center" justify="space-around">
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: "center",
          sm: "start",
        }}
      />
    </Box>
  );
}

export default Footer;
