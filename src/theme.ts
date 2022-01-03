import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Mountains of Christmas",
    body: "Open Sans",
  },
  styles: {
    global: {
      body: {
        style: "@media",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        outline: ({colorScheme = "red"}) => ({
          color: `${colorScheme}.600`,
          _hover: {
            backgroundColor: `${colorScheme}.500`,
            color: "white",
            borderColor: `${colorScheme}.600`,
          },
        }),
      },
    },
  },
});

export default theme;
