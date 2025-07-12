import { Container } from "@mui/material";
import { Product } from "./Components/Product";
import { BluuCard } from "./Components/BluuCard";
export const App = () => {
  return (
    <Container sx={{mt: 5}}>
      <BluuCard />
    </Container>
  );
};
