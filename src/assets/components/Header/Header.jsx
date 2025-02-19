import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";
import { AuthButtons, Links } from "../../constants";
import { NavLink } from "react-router";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
function Header() {
  const [anchorElNav, setAnchorElNav] = useState(false);

  const theme = useTheme();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.bgx,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="h6"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              style={{ color: "inherit", textDecoration: "none" }}
              to="/"
            >
              Meraki
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <SignedIn>
                {Links.map((item) => (
                  <MenuItem key={item.linkName} onClick={handleCloseNavMenu}>
                    <NavLink to={item.src}>
                      <Typography sx={{ textAlign: "center" }}>
                        {item.linkName}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </SignedIn>
            </Menu>
            <SignedOut>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {AuthButtons.map((item) => (
                  <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                    <NavLink style={{ textDecoration: "none" }} to={item.src}>
                      <Typography sx={{ textAlign: "center" }}>
                        {item.name}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </SignedOut>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              style={{ color: "inherit", textDecoration: "none" }}
              to="/"
            >
              Meraki
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* //Links */}
            <SignedIn>
              {Links.map((item) => (
                <Button onClick={handleCloseNavMenu} key={item.linkName}>
                  <NavLink
                    to={item.src}
                    style={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {item.linkName}
                  </NavLink>
                </Button>
              ))}
            </SignedIn>
            <SignedOut>
              {AuthButtons.map((item) => (
                <Button key={item.id} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={item.src}
                    style={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </NavLink>
                </Button>
              ))}
            </SignedOut>
          </Box>
          <SignedIn>
            <Box sx={{ flexGrow: 0, backgroundColor: "black" }}>
              <Tooltip title="User">
                <IconButton sx={{ backgroundColor: "black" }}>
                  <UserButton />
                </IconButton>
              </Tooltip>
            </Box>
          </SignedIn>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
