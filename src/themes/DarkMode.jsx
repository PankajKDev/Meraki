import { createTheme } from "@mui/material";

const DarkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // A deep, dark background for the app
      paper: "#1e1e1e", // Slightly lighter paper background for cards
      bgx: "#000000",
    },
    text: {
      primary: "#ffffff", // Bright white for primary text
      secondary: "#b0b0b0", // Softer gray for secondary text
    },
    action: {
      active: "#bb86fc", // Vibrant color for active elements (buttons)
      hover: "#3700b3", // Darker shade for hover effects
      selected: "#6200ea", // Selected state color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#ffffff",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff",
    },
  },
});

export default DarkMode;
