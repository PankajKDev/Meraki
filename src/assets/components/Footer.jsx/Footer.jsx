import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

function Footer() {
  const SiteMap = [
    {
      linkName: "Github",
      src: "https://github.com/PankajKDev",
      icon: GitHub,
    },
    {
      linkName: "LinkedIn",
      src: "https://www.linkedin.com/in/pankajkdev/",
      icon: LinkedIn,
    },
    {
      linkName: "Email",
      src: "mailto:pankajk.dev0000@gmail.com",
      icon: Email,
    },
  ];

  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: "40px",
        width: "100%",
        height: "80px",
        background: theme.palette.background.darkbg,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Typography fontSize="20px" variant="logo">
          Meraki
        </Typography>
        <Box>
          {SiteMap.map((item) => (
            <Tooltip title={item.linkName} key={item.linkName}>
              <IconButton href={item.src}>
                <SvgIcon component={item.icon} />
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
