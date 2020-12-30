import React, { useState } from "react";
import Footer from "../components//Footer";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Box,
  ListItemText,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List";
import avatar from "../images/avatar.png";

//CSS styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  listItem: {
    color: "tan",
  },
  portfolioLink: {
    color: "tan",
    cursor: "pointer", 
    fontSize: "1.5rem",
    textDecoration: "none"
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },

  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },

  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },

  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggeleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggeleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Alex Dashevskyi" />
    
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggeleSlider("left", true)}>
              <ListIcon style={{ color: "tomato" }} />
            </IconButton>
            <Link className={classes.portfolioLink} to="/">
              Portfolio
            </Link>
            <MobileRightMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggeleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
