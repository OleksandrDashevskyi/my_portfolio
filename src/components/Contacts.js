import React from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Link,
  Container,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  box: {
    background: "#233",
    height: "100vh",
  },
  root: {
    paddingRight: "1rem",
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "2rem",
      },
    },
  },
  form: {
    background: "#233",
    maxWidth: 800,
    flexGrow: 1,
  },
  formItem: {
    paddingRight: theme.spacing(1),
  },
  formTitle: {
    maxWidth: 600,
    paddingTop: "1rem",
  },
  formSubTitle: {
    color: "tomato",
    paddingTop: "5rem",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  subtitle: {
    width: "100%",
    color: "tan",
    maxWidth: 800,
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "my_portfolio_gmail",
        "my_portfolio_template",
        e.target,
        "user_BmMYVNUKJKeztLt85iPFY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Navbar />
      <Box omponent="div" align="center" className={classes.box}>
        <Container className={classes.formTitle}>
          <Typography variant="h4" style={{ color: "tomato" }}>
            <strong>Contact</strong>
          </Typography>
          <Typography variant="subtitle1" style={{ color: "tan" }}>
            Interested in hiring me for your project or just want to say hi? You
            can fill in the contact form below or send me an email to &nbsp;
            <Link
              href="mailto:odashevskyi@gmail.com"
              style={{ color: "tomato" }}
            >
              odashevskyi@gmail.com
            </Link>
          </Typography>
        </Container>
        <Container style={{ paddingTop: "3rem" }}>
          <Typography variant="subtitle1" style={{ color: "tan" }}>
            Want to get connected? Follow me on the social channels below.
          </Typography>
          <Link
            href="https://www.linkedin.com/in/oleksandr-dashevskyi/"
            className={classes.root}
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="https://github.com/OleksandrDashevskyi"
            className={classes.root}
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.facebook.com/oleksandr.dashevskyi"
            className={classes.root}
          >
            <FacebookIcon />
          </Link>
        </Container>
        <Container className={classes.formSubTitle}>
          <Typography variant="h4">Get In Touch</Typography>
        </Container>

        <Container
          component="form"
          className={classes.form}
          onSubmit={sendEmail}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <InputField
                fullWidth
                className={classes.formItem}
                label="Name"
                name="name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                fullWidth
                className={classes.formItem}
                label="Email"
                name="email"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                fullWidth
                className={classes.formItem}
                label="Subject"
                name="subject"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Message"
                name="message"
                multiline
                rows={10}
                variant="outlined"
                margin="dense"
                fullWidth
                className={classes.formItem}
                inputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth
              endIcon={<SendIcon />}
              type="submit"
            >
              contact me
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contacts;
