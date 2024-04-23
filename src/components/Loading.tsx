import React from "react";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: theme.spacing(2),
  },
  message: {
    marginLeft: theme.spacing(2),
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <CircularProgress color="primary" />
      <Typography variant="h6" className={classes.message}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;