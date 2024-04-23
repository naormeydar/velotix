import React from "react";
import { Link } from "react-router-dom";
import Navigate from '../components/Navigate';
import { makeStyles } from "@mui/styles";
import { Typography, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  navigate: {
    marginTop: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
}));

const NoPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Navigate path="/" pageName="home" />
      <Typography variant="h5" className={classes.message}>No page found...</Typography>
    </Container>
  );
};

export default NoPage;