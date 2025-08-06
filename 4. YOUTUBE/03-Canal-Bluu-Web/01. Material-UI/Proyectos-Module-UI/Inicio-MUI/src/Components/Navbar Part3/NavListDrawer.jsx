import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";


export const NavListDrawer = ({navLinks, setOpen}) => {
  return (
    <Box
      sx={{
        width: 280,
        maxWidth: 340,
      }}
    >
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
