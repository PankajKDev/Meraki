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
import { AuthButtons, Links } from "../../constants";
import { NavLink } from "react-router";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
function Header() {
  const [anchorElNav, setAnchorElNav] = useState(false);
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
        backgroundColor: "#000000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="body1"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "20px",
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
                    <NavLink sx={{ textDecoration: "none" }} to={item.src}>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
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
                    <NavLink to={item.src}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: "center", textDecoration: "none" }}
                      >
                        {item.name}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </SignedOut>
          </Box>

          <Typography
            variant="body1"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
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
                    <Typography
                      variant="body1"
                      sx={{
                        color: "white",
                        fontSize: "14px",
                      }}
                    >
                      {item.linkName}
                    </Typography>
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
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User">
                <IconButton>
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
