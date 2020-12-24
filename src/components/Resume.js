import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    marging: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container>
        <Box component="header" className={classes.mainContainer}>
          <Box component="div">
            <Typography variant="h5" align="center" style={{ color: "tomato" }}>
              SUMMARY
            </Typography>
            <Typography variant="body1" align="center" style={{ color: "tan" }}>
              • React / JavaScript Developer with 3+ years of hands-on
              experience in application development
              <br />
              • Experience in all phases of software life cycle including
              requirements gathering, project planning development
              <br />
              • Strong knowledge of software development life cycle
              methodologies such as Agile / SCRUM
              <br />• Experience with Git, continuous integration / development
            </Typography>
          </Box>
          <br />
          <Box component="div">
            <Typography variant="h5" align="center" style={{ color: "tomato" }}>
              TECHNICAL SKILLS
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>Languages:</strong>&nbsp;JavaScript (ES5, ES6),
              TypeScript, HTML, CSS, JSON
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>Libraries:</strong>&nbsp;React, Redux, Bootstrap, Ant
              Design, Material UI
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>Testing Tools:</strong>&nbsp;Browser DevTools, Redux
              DevTools, Postman,
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>IDE:</strong>&nbsp;VS Code, WebStorm, Mongo Compass,
              Postman
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>Backend:</strong>&nbsp;NodeJs, Express
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>Other:</strong>&nbsp;UmiJs, Git/GitHub , JIRA
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              <strong>DBMS:</strong>&nbsp;MongoDB
            </Typography>
          </Box>
          <Typography variant="h5" align="center" className={classes.heading}>
            WORK EXPERIENCE
          </Typography>

          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h3"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2017 - Now
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
              <Typography variant="h6" className={classes.subHeading}>
                Front-End Web Developer
              </Typography>

              <Typography variant="body1" style={{ color: "tomato" }}>
                PASV
              </Typography>

              <Typography variant="subtitle1" style={{ color: "tan" }}>
                • Developed full-stack web applications which processed,
                analyzed, and rendered data visually using React + Redux
                technology stack
                <br />
                • Collaborated with Development team, Product Owner and QA team
                discussing product requirements.
                <br />
                • Utilized JIRA for assigning tasks, tracked the status of filed
                issues, followed upon them to resolve any arising discrepancies.
                <br />
                • Developed and deployed multiple project modules and components
                including a back-end server application.
                <br />• Managed time-sensitive updates, including content
                changes and database upgrades.
              </Typography>
            </Box>
          </Box>
          <Box component="div">
            <Typography variant="h5" align="center" style={{ color: "tomato" }}>
              EDUCATION
            </Typography>
            <Typography variant="body2" align="center" style={{ color: "tan" }}>
              Kherson State Maritime Industry <br />
              Bachelor’s degree of Navigation <br />
              Vessel Navigator Computer technologies in Maritime industry <br />
              2009-2011
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Resume;
