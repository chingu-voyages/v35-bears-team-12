/**
 *  This hook is responsible for change in colors when
 *  you switch between themes.
 */
import { useColorModeValue } from "@chakra-ui/react";

function useColorModeSwitcher() {
  const colorLight = useColorModeValue("default.light", "default.dark");
  const colorDark = useColorModeValue("default.dark", "default.light");

  const themed = useColorModeValue("primary.500", "secondary.500");
  const secondaryThemed = useColorModeValue("secondary.700", "secondary.500");
  const authThemed = useColorModeValue("primary.500", "primary.200");

  const colorGrey = useColorModeValue("neutral.100", "neutral.200");

  const successColor = useColorModeValue(
    "accent.successDark",
    "accent.successLight"
  );

  const errorColor = useColorModeValue("accent.errorDark", "accent.errorLight");

  return {
    colorLight,
    colorDark,
    colorGrey,
    themed,
    secondaryThemed,
    authThemed,
    successColor,
    errorColor,
  };
}

export { useColorModeSwitcher };
