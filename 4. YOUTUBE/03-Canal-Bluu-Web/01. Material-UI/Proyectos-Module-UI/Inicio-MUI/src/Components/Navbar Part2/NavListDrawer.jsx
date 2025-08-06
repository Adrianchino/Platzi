import { Drafts, Inbox } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const NavListDrawer = () => {
  return (
    <Box
      sx={{
        width: 280,
        maxWidth: 340,
      }}
    >
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Dradfts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />

      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#trash">
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#span">
              <ListItemText>Span</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
