import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  const [iconActions, setIconAction] = useState({
    isLinkedInClicked: false,
    isGitHubClicked: false,
  });

  const urlClicked = (action, value) => () => {
      console.log(action)
    setIconAction({ ...iconActions, [action]: value });
  };

  if (
    iconActions.isLinkedInClicked === true ||
    iconActions.isGitHubClicked === true
  ) {
    const linkedInUrl = "https://www.linkedin.com/in/oleksandr-dashevskyi/";
    const gitHubUrl = "https://github.com/OleksandrDashevskyi";

    window.location.href =
      iconActions && iconActions.isGitHubClicked
        ? gitHubUrl
        : iconActions.isLinkedInClicked
        ? linkedInUrl
        : "/";
  }

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        onClick={urlClicked("isLinkedInClicked", true)}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        onClick={urlClicked("isGitHubClicked", true)}
      />
    </BottomNavigation>
  );
};

export default Footer;
