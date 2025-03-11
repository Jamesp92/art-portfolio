import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const logoUrl =
    "https://media.tenor.com/KMsB7QyXaAAAAAAi/john-dee-head-spinning-head-spinning.gif";

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ minHeight: 80, justifyContent: "center", position: "relative" }}>
          <Box sx={{ textAlign: "center" }}>
            <img src={logoUrl} alt="Logo" style={{ height: 40, marginBottom: 4, marginTop: 15 }} />
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 300, color: "black" }}
            >
              Micheal Nugent
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", right: 16 }}>
            <IconButton
              size="large"
              edge="end"
              sx={{ color: "black" }}
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Shop" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
