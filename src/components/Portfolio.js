import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
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
import projectInProgress from "../images/project in progress.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTypescript, SiMongodb, SiJavascript } from "react-icons/si";
import SendIcon from "@material-ui/icons/Send";

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
  header: {
    color: "white",
    padding: "0",
    marginTop: "2rem",
  },
  subheader: {
    width: "100%",
    color: "tan",
    maxWidth: 800,
    align: "center",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  linkButton: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
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
    setCompotExpanded(!compotExpanded);
  };

  return (
    <Box component="div" className={classes.mainContainer} align="center">
      <Navbar />
      <Box component="div" className={classes.subheader}>
        <Typography variant="h4" align="center">
          <strong>Portfolio</strong>
        </Typography>
        <Typography variant="h6">
          Welcome to my online portfolio. I have experience in developing Full
          Stack Web apps - MERN Stack and focus on Front End Side using React /
          Redux. <br /> Want some help building your software?
        </Typography>
        <Link to="/contacts" style={{ textDecoration: "none" }}>
          <Button
            className={classes.linkButton}
            variant="outlined"
            endIcon={<SendIcon />}
          >
            contact me
          </Button>
        </Link>
      </Box>
      <Grid container justify="center">
        {/* Local Coding */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
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
                  Educational project for IT Academy. The platform built to
                  teach QA Engineers and Front End Developers programming
                  lanuages such as JavaScript and Python
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://localcoding.us/"
              >
                Website
              </Button>
              <Button disabled>Learn More</Button>
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
              <CardContent>
                <Typography paragraph>
                  Web application built for students to learn JavaScript and
                  Python programming languages. The application consists of
                  video training material and practical tasks (Data Structure)
                  on JavaScript and Python languages. Progress monitor developed
                  to assist students to monitor progress on every task done The
                  application developed used: React / Redux-Saga / TypeScript on
                  Frond End Side (UMI JS framework) and Nodejs (Express) on Back
                  End Side. DataBase use: MongoDB. Deployed; front end - Heroku
                  and server on Amazon.)
                </Typography>
                <Typography variant="h6">
                  <strong>My accomplishment</strong>
                </Typography>
                <Typography paragraph>
                  I developed a user interface module named as Progress monitor.
                  With the module, the student can tract own progress with
                  progress graph and adding daily reports. So, a teacher can
                  tract student progress and assist if necessary. After the
                  implementation of the module, increase positive feedback from
                  customers and increase the quantity of new and potential
                  customers (therefore increase the revenue of the company)
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
                  CRM Software is a software system that manages a company’s
                  interactions and relationships with both current and potential
                  customers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://kompot.us/">
                Website
              </Button>
              <Button disabled>Learn More</Button>
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
            <Collapse in={compotExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  CRM software (customer relationship management software)
                  enhances the customer relationship through managing customer
                  interaction, tracking leads, and streamlining processes. CRM’s
                  overall goal is to increase sales by improving business
                  relationships.
                  <Typography paragraph>
                    The app currently in progress. Front End is developing on
                    React / TypeScript / Redux-Saga (UMI JS). Back End on NodeJs
                    (Express). DataBase - MongoDB. App deployed on Amazon cloud
                    platform, both front end and server as well.
                  </Typography>
                </Typography>
                <Typography paragraph>
                  CRM (customer relationship management) software is mainly used
                  to increase business revenue through the improvement of a
                  business’s relationship with its customers. A robust, modern
                  CRM is also used for the following: To consolidate all company
                  data into one central space. CRM acts as a hub for all team
                  members to access needed information including, contact
                  information, communication history and customer history. With
                  the ability to update data in real-time, the chances of
                  duplicate data entry and inaccurate information dwindles.
                  Increase sales opportunities.
                </Typography>
                <Typography variant="h6">
                  <strong>My accomplishment</strong>
                </Typography>
                <Typography paragraph>
                  Developed various user interfaces such as Invoice and Payment
                  system on Front end side. Implemented messaging system using
                  Twillio API service. Result, user can connect by sms with
                  customer (set up auto messaging) and vise versa
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
                  <SiJavascript color="orange" />
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Personal project developed on React using 3rd party API to
                  fetch list of cotails with an information. Implemented search
                  bar using React hooks such as UseRef. For state / props
                  management, used useContext react hook. For design used CSS3
                  componensts.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://empire-of-cocktails.netlify.app/"
              >
                Website
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
                image={projectInProgress}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.iconPosition}
                >
                  Great Places &nbsp;
                  <FaReact color="DeepSkyBlue" />
                  &nbsp;
                  <SiJavascript color="orange" />
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
                  Full Stack application use MERN stack (MongoDB / Express /
                  React / NodeJs) Main idea of application to allow users to
                  share places (with images & location) with other users.
                  Currently in progress. Demo is coming soon!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button disabled>
                WEBSITE
              </Button>
              <Button size="small" disabled>
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
