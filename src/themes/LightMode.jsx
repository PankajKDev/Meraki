import { createTheme } from "@mui/material";

const LightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5", // A softer white for the default background
      paper: "#ffffff", // Paper background for cards
      bgx: "#000000",
    },
    text: {
      primary: "#212121", // Darker text for better readability
      secondary: "#757575", // Lighter gray for secondary text
    },
    action: {
      active: "#1976d2", // Primary action color (e.g., buttons)
      hover: "#e3f2fd", // Light hover effect for buttons
      selected: "#bbdefb", // Selected state color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#212121",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#212121",
    },
    body1: {
      fontSize: "1rem",
      color: "#212121",
    },
  },
});

export default LightMode;
