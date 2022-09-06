import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Blogs() {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  return (
    <>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={4}>
          <Box m={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="It’s a cocktail o’clock."
                subheader="May 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?w=2000"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Beat The Heat With Chilled Cocktails At The Best Bars In New
                  York.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded1}
                  onClick={handleExpandClick1}
                  aria-expanded={expanded1}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    To a foodie, summer means one thing and one thing only –
                    DRINKS!
                  </Typography>
                  <Typography paragraph>
                    Yes people, we know it’s hot out there and the only way to
                    quench your thirst is by guzzling down a bunch of ice-cold
                    cocktails
                  </Typography>
                  <Typography paragraph>
                    <h4>1.The Bar Room at The Beekman</h4>
                    Visit the beautiful Bar Room in the historic Beekman Hotel
                    for high-key romance that really wows. Do try the whiskey
                    sour.One of the best drinks available.
                    <h4>2.Dublin House</h4>
                    You can never go wrong with Sláinte! Margarita,Pot O'Gold, &
                    Irish Old Fashioned
                    <h4>3.Russian Samovar</h4>
                    Alpensahne,Amarula Cream Liqueur, Caribou,Feni
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box m={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Winner Winner Pizza Dinner"
                subheader="May 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://cdn.shopify.com/s/files/1/0624/9853/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1660843558&width=800"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  5 Most Popular Types of Pizza in NYC.
                </Typography>
                <Typography>🍕🍕🍕</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded2}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    New York–style pizza is pizza made with a characteristically
                    large hand-tossed thin crust, often sold in wide slices to
                    go. The crust is thick and crisp only along its edge, yet
                    soft, thin, and pliable enough beneath its toppings to be
                    folded in half to eat.
                  </Typography>

                  <Typography paragraph>
                    <h4>1. Cheese Pizza</h4>
                    <h4>. BBQ Chicken Pizza</h4>

                    <h4>Pepperoni Pizza</h4>
                    <h4>4. Meat Pizza</h4>
                    <h4>5. Margherita Pizza</h4>
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box m={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="3 Most Unique Restaurant Concepts in NYC"
                subheader="January 2 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://media-cdn.tripadvisor.com/media/photo-p/09/83/d2/91/bolster.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Want to have a unique dinning experience?
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded3}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    To compete in the City That Never Sleeps, restaurateurs are
                    facing more pressure than ever to come up with some pretty
                    crazy themed restaurant ideas.
                  </Typography>
                  <Typography paragraph>🗽🚕</Typography>
                  <Typography paragraph>
                    <h4>1.River Café</h4>
                    Your meal will be accompanied by a beautiful view of the New
                    York skyline as well as the soothing sound of waves lapping
                    against the bow.
                    <h4>2. The Beauty Bar</h4>
                    Want to be pampered? Get a manicure while sipping a martini
                    . Whether you want a girls’ night out or a bachelorette
                    party experience, Beauty Bar’s old-time salon/saloon feel is
                    sure to appeal to everyone in your squad.
                    <h4>3.Ninja </h4>
                    In this underground restaurant, you’ll enter a ninja village
                    and sample a selection of Japanese dishes … but watch out
                    for flying nunchucks and surprise attacks!
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box m={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Boo-hoo, I ain't sharing my desserts!"
                subheader="March 10, 2020"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT69DonQovQXKOIi9VjksLJmKUWhnSDbIbPQ&usqp=CAU"
                alt="Cake"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  10 desserts that are almost too pretty to eat.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded4}
                  onClick={handleExpandClick4}
                  aria-expanded={expanded4}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded4} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph></Typography>
                  <Typography paragraph>Delight in every bite.</Typography>
                  <Typography paragraph>
                    <h4>Blueberry Lemon Trifle🫐</h4>
                    <h4>Marvelous Marble Cake🍰</h4>
                    <h4>German Apple Strudel🇩🇪</h4>
                    <h4>Old-Fashioned Banana Cream Pie🍌</h4>
                    <h4>Lemon Whirligigs with Raspberries🍋</h4>
                    <h4>Amaretto Ricotta Cheesecake🧀</h4>
                    <h4>Brown Sugar Pound Cake🤎</h4>
                    <h4>Juicy Peach & Strawberry Crumb Pie🍓</h4>
                    <h4>Chocolate-Dipped Strawberry Meringue Roses🌹</h4>
                    <h4>Cherry Cola Cake🍒</h4>
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box m={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Fun Facts of Coffee"
                subheader="May 14, 2021"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.pinimg.com/originals/e3/fe/d7/e3fed76f1f5edb25a7c1d3ab590d134b.jpg"
                alt="Coffee"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Beat The Heat With Chilled Cocktails At The Best Bars In New
                  York.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded5}
                  onClick={handleExpandClick5}
                  aria-expanded={expanded5}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded5} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph> It's a brew-tiful day.</Typography>
                  <Typography paragraph>
                    Hocus pocus! You need coffee to focus!
                  </Typography>
                  <Typography paragraph>
                    <h4>1. THE NETHERLANDS CONSUME THE MOST COFFEE ☕</h4>
                    <h4>2. PEOPLE HAVE TRIED TO BAN COFFEE ☕</h4>
                    <h4>3.COFFEE WAS DISCOVERED BY A GOAT HERDER ☕</h4>
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Blogs;
