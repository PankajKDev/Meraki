// clerkAppearanceConfig.js
import LightMode from "./LightMode"; // Adjust the path as needed

const clerkTheme = {
  elements: {
    // General background settings
    rootBox: {
      backgroundColor: LightMode.palette.background.default, // Matches the default background
      color: LightMode.palette.text.primary, // Primary text color
    },
    card: {
      backgroundColor: LightMode.palette.background.paper, // Card background
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
      borderRadius: "12px", // Rounded corners
    },
    // Typography
    headerTitle: {
      fontFamily: LightMode.typography.fontFamily,
      fontSize: "30px",
      fontWeight: LightMode.typography.h1.fontWeight,
      color: LightMode.palette.text.primary,
    },
    headerSubtitle: {
      fontFamily: LightMode.typography.fontFamily,
      fontSize: "15px",
      fontWeight: LightMode.typography.h2.fontWeight,
      color: LightMode.palette.text.secondary,
    },
    body: {
      fontFamily: LightMode.typography.fontFamily,
      fontSize: LightMode.typography.body1.fontSize,
      color: LightMode.palette.text.primary,
    },
    // Buttons
    buttonPrimary: {
      backgroundColor: LightMode.palette.action.active,
      color: "#ffffff", // White text for contrast
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: LightMode.palette.action.hover,
      },
    },
    buttonSecondary: {
      backgroundColor: LightMode.palette.action.selected,
      color: LightMode.palette.text.primary,
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: LightMode.palette.action.hover,
      },
    },
    // Input fields
    inputField: {
      backgroundColor: LightMode.palette.background.paper,
      borderColor: LightMode.palette.text.secondary,
      borderRadius: "8px",
      color: LightMode.palette.text.primary,
      "&:focus": {
        borderColor: LightMode.palette.action.active,
      },
    },
    // Links
    footerLink: {
      color: LightMode.palette.action.active,
      fontFamily: LightMode.typography.fontFamily,
      fontWeight: LightMode.typography.fontWeightBold,
      textDecoration: "none",
      "&:hover": {
        color: LightMode.palette.action.hover,
      },
    },
  },
};

export default clerkTheme;
