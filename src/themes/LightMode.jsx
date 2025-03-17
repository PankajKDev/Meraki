import { createTheme } from "@mui/material";

const LightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFF8E7",
      paper: "#FFF4E0",
      darkbg: "#000000",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    action: {
      active: "#1976d2",
      hover: "#e3f2fd",
      selected: "#bbdefb",
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
      color: "#ffffff",
    },

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

export default LightMode;
