import { createTheme } from "@mui/material/styles";

const DarkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8AB4F8", // Light blue variant of the original primary
      light: "#A6C8FF",
      dark: "#6691E3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF8A7C", // Soft coral for accent
      light: "#FFA899",
      dark: "#E66C5C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#121212", // Deep dark background
      paper: "#1E1E1E", // Slightly lighter for cards
      darkbg: "#000000", // Pure black for accents
    },
    text: {
      primary: "#E0E0E0", // Soft white for primary text
      secondary: "#B0B0B0", // Medium gray for secondary
      disabled: "#6C6C6C", // Subtle disabled text
    },
    action: {
      active: "#8AB4F8",
      hover: "rgba(138, 180, 248, 0.16)",
      selected: "rgba(138, 180, 248, 0.24)",
      disabled: "rgba(255, 255, 255, 0.3)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    error: {
      main: "#CF6679",
      light: "#E67C8D",
      dark: "#B04F62",
    },
    warning: {
      main: "#FFB347",
      light: "#FFC26B",
      dark: "#E69D3C",
    },
    info: {
      main: "#4FC3F7",
      light: "#6BE6FF",
      dark: "#29B6F6",
    },
    success: {
      main: "#81C784",
      light: "#A5D6A7",
      dark: "#66BB6A",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#E0E0E0", // Matches primary color
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#E0E0E0",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      color: "#E0E0E0",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      color: "#B0B0B0",
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // Removes default MUI paper texture
        },
      },
    },
  },
});

export default DarkMode;
