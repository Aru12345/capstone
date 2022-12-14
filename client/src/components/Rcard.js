import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

function Rcard({ restaurant }) {
  const {
    id,
    name,
    cuisine,
    image,
    cost,
    address,
    hours,
    closed,
    phone,
    must_try,
    category,
    website,
  } = restaurant;
  return (
    <>
      <Card>
        <CardMedia component="img" height="190" src={image} alt="resto" />
        <CardContent width="90">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category} | {cuisine} | {cost}
            <br />
            {address}
            <br />
            Hours : {hours}
            <br />
            {closed}
            <br />
            {phone}
            <br />
            Popular dishes: {must_try}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="share" href={`/restaurants/${id}`}>
            <RestaurantMenuIcon />
          </IconButton>
          <IconButton aria-label="share" href={website} target="_blank">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
export default Rcard;
