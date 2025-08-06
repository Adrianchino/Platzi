import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  Snackbar,
} from "@mui/material";
import { useState } from "react";

export const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>Home</div>

      <Box sx={{ display: "Grid", gap: "1rem" }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — check it out!
        </Alert>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Open
        </Button>

        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};
