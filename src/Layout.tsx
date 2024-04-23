import React from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
  logo: {
    maxWidth: 100,
    height: "auto",
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={require("./assets/logo.jpeg")}
              alt="Logo"
              className={classes.logo}
            />
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;