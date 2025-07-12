import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const BluuCard = () => {
  return (
    <Card
			sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
		>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://mx.oceana.org/wp-content/uploads/sites/17/pez-erizo.png"
          height="200"
          alt="Card Image"
        />

        <CardContent>
          <Typography variant="h4">Card Title</Typography>
          <Typography component="p" variant="body4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium iste omnis impedit repellendus nisi recusandae est
            officiis ex magnam a, fuga delectus sit quod laudantium natus ab!
            Asperiores, veniam suscipit.
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
          <Button variant="contained">Add</Button>
          <Button color="error">Remove</Button>
        </CardActions>
    </Card>
  );
};
