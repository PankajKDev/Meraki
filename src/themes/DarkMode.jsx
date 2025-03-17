import { createTheme } from "@mui/material";

const DarkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1A1A2E",
      paper: "#16213E",
      darkbg: "#000000",
    },
    text: {
      primary: "#E6E6FA",
      secondary: "#A0A0C0",
    },
    action: {
      active: "#4CAF50",
      hover: "#2E7D32",
      selected: "#1B5E20",
    },
    accents: {
      coral: "#FF6B6B",
      teal: "#64FFDA",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightBold: 700,
    logo: {
      fontFamily: "Bebas Neue",
      fontSize: "2rem",
      letterSpacing: ".10rem",
      fontWeight: 700,
      color: "#E6E6FA",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    h1: {
      fontFamily: "Bebas Neue",
      fontSize: "2rem",
      letterSpacing: ".10rem",
      fontWeight: 700,
      color: "#E6E6FA",
      marginTop: "40px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    h2: {
      fontFamily: "Roboto Slab",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#64FFDA",
      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    },
    body1: {
      fontSize: "1rem",
      color: "#E6E6FA",
      fontFamily: "Noto Sans",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Roboto Slab",
      fontSize: "1rem",
      fontWeight: 200,
      color: "#A0A0C0",
      letterSpacing: "0.03rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          },
        },
      },
    },
  },
});

export default DarkMode;
