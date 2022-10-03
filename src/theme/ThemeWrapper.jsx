import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { green } from "@mui/material/colors";
console.log(green);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5046e6",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        label: {
          color: "white",
        },
        root: ({ ownerState }) => {
          return {
            ...(ownerState.variant === "outlined" && {
              backgroundColor: "#282f5d",
              ":hover": {
                outlineColor: "#282f5d",
              },
            }),
          };
        },
      },
    },
  },
});

function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
