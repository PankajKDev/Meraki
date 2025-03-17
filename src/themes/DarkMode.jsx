import { createTheme } from "@mui/material";

const DarkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1A1A2E", // Deep navy base
      paper: "#16213E", // Darker navy for cards
      darkbg: "#000000", // Rich accent navy
    },
    text: {
      primary: "#E6E6FA", // Soft lavender white
      secondary: "#A0A0C0", // Muted periwinkle
    },
    action: {
      active: "#4CAF50", // Vibrant green for actions
      hover: "#2E7D32", // Darker green hover
      selected: "#1B5E20", // Deep green selection
    },
    accents: {
      coral: "#FF6B6B", // Warm coral for highlights
      teal: "#64FFDA", // Bright teal for contrast
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
      color: "#E6E6FA", // Matching text.primary
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    h1: {
      fontFamily: "Bebas Neue",
      fontSize: "2rem",
      letterSpacing: ".10rem",
      fontWeight: 700,
      color: "#E6E6FA", // Matching text.primary
      marginTop: "40px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    h2: {
      fontFamily: "Roboto Slab",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#64FFDA", // Using accent teal
      textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    },
    body1: {
      fontSize: "1rem",
      color: "#E6E6FA", // Primary text color
      fontFamily: "Noto Sans",
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Roboto Slab",
      fontSize: "1rem",
      fontWeight: 200,
      color: "#A0A0C0", // Secondary text color
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
