import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "../styles/Navbar.css";
import { Badge } from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="appBar-container">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "gray", display: "block" }}
            >
              NARWHAL
            </Button>
            <Button
              className="navbar-button"
              sx={{ my: 2, color: "gray", display: "block" }}
            >
              Teams
            </Button>
          </Box>

          <div className="navbar-right">
            <Badge
              badgeContent={props.currentUser.notifications_count}
              color="primary"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M4 11V1H20V11"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 15V23H1V15H8V18H16V15H23Z"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    d="M9 6H15"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    d="M9 10H15"
                    stroke="#444444"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </g>
              </svg>
            </Badge>

            <p>Hello {props.currentUser.name}</p>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={props.currentUser.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
