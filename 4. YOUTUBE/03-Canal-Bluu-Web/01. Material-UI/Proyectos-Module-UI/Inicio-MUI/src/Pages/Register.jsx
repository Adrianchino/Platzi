import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const Register = () => {
  const [email, setemail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          id="email"
          label="email"
          type="email"
          variant="outlined"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Register
        </Button>
      </Box>
    </>
  );
};
