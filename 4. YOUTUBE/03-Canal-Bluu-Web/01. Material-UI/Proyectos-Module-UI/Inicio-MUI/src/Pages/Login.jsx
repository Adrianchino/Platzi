import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleclick = () => {
    enqueueSnackbar("Suscribete al canal", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  return (
    <>
      <div>Login</div>
      <Button variant="contained" onClick={handleclick}>
        Open
      </Button>
    </>
  );
};
