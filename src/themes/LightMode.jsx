import { createTheme } from "@mui/material";

const LightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFF8E7", // A softer white for the default background
      paper: "#FFF4E0", // Paper background for cards
      darkbg: "#000000",
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
    fontWeightRegular: 400,
    fontWeightBold: 700,

    h1: {
      fontFamily: "Bebas Neue",
      fontSize: "2rem",
      letterSpacing: ".10rem",
      fontWeight: 700,
      color: "#000000",
      marginTop: "40px",
    },
    h2: {
      fontFamily: "Roboto Slab",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#000000",
    },
    body1: {
      fontSize: "1rem",
      color: "#000000",
      fontFamily: "Noto Sans",
    },
    body2: {
      fontFamily: "Roboto Slab",
      fontSize: "1rem",
      fontWeight: 200,
      color: "#000000",
    },
  },
});

export default LightMode;
