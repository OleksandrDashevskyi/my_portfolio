import React, { useState } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import localCoding from "../images/LocalCoding.png";
import compotProject from "../images/Kompot_CRM.png";
import cocktailDB from "../images/CokctailDB.png";
import reactRedux from "../images/react-redux.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTypescript, SiMongodb } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  iconPosition: {
    textAlign: "left",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
 
 
  const [localCodingExpanded, setLocalCodingExpanded] = useState(false);
  const [compotExpanded, setCompotExpanded] = useState(false);

  const handleExpandClick1 = () => { 
    setLocalCodingExpanded(!localCodingExpanded);
  };

  const handleExpandClick2 = () => { 
    setCompotExpanded(!compotExpanded);;
 };

  return (
    <Box component="div" className={classes.mainContainer} >
      <Navbar />
      <Grid container justify="center">
        {/* Local Coding */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Local Coding"
                height="140"
                image={localCoding}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.iconPosition}
                >
                  Local Coding&nbsp;
                  <FaReact color="DeepSkyBlue" />
                  &nbsp;
                  <SiRedux color="DarkSlateBlue" />
                  &nbsp;
                  <SiTypescript color="blue" />
                  &nbsp;
                  <FaNodeJs color="green" />
                  &nbsp;
                  <SiMongodb color="green" />
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  loremds dsdssdsd sdsdsds dsdsd sdsd sd sdsd sd sd sds ss s s
                  sdssd ssdsdsd sds s dsd sd sdsdsd sds s sd sdsd sd sd sds dsds
                  dsd sd sdsd s sd sd sd sds dsdsss sd sd sd s s dsdss sd sd s
                  sd sdsdsd s sdsd sd s.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: localCodingExpanded,
                })}
                onClick={handleExpandClick1}
                aria-expanded={localCodingExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={localCodingExpanded} timeout="auto" unmountOnExit>
              <CardContent >
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* Compot Project */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Compot Project"
                height="140"
                image={compotProject}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.iconPosition}
                >
                  Kompot project&nbsp;
                  <FaReact color="DeepSkyBlue" />
                  &nbsp;
                  <SiRedux color="DarkSlateBlue" />
                  &nbsp;
                  <SiTypescript color="blue" />
                  &nbsp;
                  <FaNodeJs color="green" />
                  <SiMongodb color="green" />
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  loremds dsdssdsd sdsdsds dsdsd sdsd sd sdsd sd sd sds ss s s
                  sdssd ssdsdsd sds s dsd sd sdsdsd sds s sd sdsd sd sd sds dsds
                  dsd sd sdsd s sd sd sd sds dsdsss sd sd sd s s dsdss sd sd s
                  sd sdsdsd s sdsd sd s.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: compotExpanded,
                })}
                onClick={handleExpandClick2}
                aria-expanded={compotExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={compotExpanded} timeout="auto" unmountOnExit >
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        {/* CocktailsDB Project */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="CocktailsDB Project"
                height="140"
                image={cocktailDB}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.iconPosition}
                >
                  CocktailsDB &nbsp;
                  <FaReact color="DeepSkyBlue" />
                  &nbsp;
                  <SiTypescript color="blue" />
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  loremds dsdssdsd sdsdsds dsdsd sdsd sd sdsd sd sd sds ss s s
                  sdssd ssdsdsd sds s dsd sd sdsdsd sds s sd sdsd sd sd sds dsds
                  dsd sd sdsd s sd sd sd sds dsdsss sd sd sd s s dsdss sd sd s
                  sd sdsdsd s sdsd sd s.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* React Redux */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="React Redux"
                height="140"
                image={reactRedux}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.iconPosition}
                >
                  CocktailsDB &nbsp;
                  <FaReact color="DeepSkyBlue" />
                  &nbsp;
                  <SiTypescript color="blue" />
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  loremds dsdssdsd sdsdsds dsdsd sdsd sd sdsd sd sd sds ss s s
                  sdssd ssdsdsd sds s dsd sd sdsdsd sds s sd sdsd sd sd sds dsds
                  dsd sd sdsd s sd sd sd sds dsdsss sd sd sd s s dsdss sd sd s
                  sd sdsdsd s sdsd sd s.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
