// TODO add more fonts
export const fonts = {
  heading: "Crimson Text",
  body: "IBM Plex Sans",
  // link: "Laila",
};

export const Heading = {
  sizes: null,
  variants: {
    h1: {
      textStyle: "h1",
    },
    h2: {
      textStyle: "h2",
    },
    h3: {
      textStyle: "h3",
    },
    h4: {
      textStyle: "h4",
    },
    subtitle: {
      textStyle: "subtitle",
    },
  },
};

export const Text = {
  sizes: null,
  variants: {
    preTitle: (props) => ({
      textStyle: "preTitle",
      color: props.colorMode === "light" ? "neutral.600" : "neutral.100",
    }),
    subtitle: (props) => ({
      textStyle: "subtitle",
      color: props.colorMode === "light" ? "neutral.600" : "neutral.100",
    }),
    gentleTitle: (props) => ({
      textStyle: "gentleTitle",
      color: props.colorMode === "light" ? "neutral.700" : "neutral.100",
    }),
    body: (props) => ({
      textStyle: "body",
      color: props.colorMode === "light" ? "neutral.600" : "neutral.200",
    }),
    bodyLight: (props) => ({
      textStyle: "bodyLight",
      color: props.colorMode === "light" ? "neutral.700" : "neutral.200",
    }),
    small: {
      textStyle: "small",
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export const textStyles = {
  h1: {
    fontSize: { base: "32px", lg: "56px" },
    fontWeight: 600,
    lineHeight: { base: "140%", lg: "125%" },
  },
  h2: {
    fontSize: { base: "24px", xl: "36px" },
    fontWeight: 600,
    lineHeight: { base: "150%", lg: "130%" },
  },
  h3: {
    fontSize: { base: "20px", xl: "28px" },
    fontWeight: 600,
    lineHeight: { base: "150%", lg: "140%" },
  },
  h4: {
    fontSize: { base: "14px", xl: "20px" },
    fontWeight: 600,
    lineHeight: { base: "150%", lg: "140%" },
  },
  subtitle: {
    fontSize: { base: "18px", xl: "24px" },
    fontWeight: 400,
    lineHeight: { base: "24px", lg: "140%" },
  },
  preTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    casing: "uppercase",
    lineHeight: "150%",
  },
  gentleTitle: {
    fontFamily: "Laila",
    fontSize: { base: "16px", lg: "18px" },
    fontWeight: 600,
    casing: "uppercase",
    lineHeight: "140%",
  },
  body: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "140%",
  },
  bodyLight: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "140%",
  },
  small: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "160%",
  },
};
