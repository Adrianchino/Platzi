import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import { useState } from "react";
import { AppRegistration, Home, Login, Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "Login",
    path: "login",
    icon: <Login />,
  },
  {
    title: "Register",
    path: "register",
    icon: <AppRegistration />,
  },
];

export const Nabvar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{display: {sx: 'flex', sm: 'none'}}}
            edge="start"
          >
            <Menu />
          </IconButton>
          <Typography variant="h7" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{ display: {xs: "none", sm:"block"}}}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {sx: 'flex', sm: 'none'}}}>
        <NavListDrawer navLinks={navLinks} setOpen={setOpen}/>
      </Drawer>
    </>
  );
};
