import { Container } from "@mui/material";
import { Nabvar } from "./Components/Navbar Part3/Nabvar";
import { Login } from "./Pages/login"
import { Home } from "./Pages/home"
import { Register } from "./Pages/Register"
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Nabvar />
      <Container sx={{ mt: 5 }}>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>

      </Container>
    </>
  );
};
