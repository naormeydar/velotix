import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  navigate: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: "1.2rem",
    fontWeight: "bold",
  }
}));

interface INavigateProps {
  path: string;
  pageName: string;
}

const Navigate = ({ path, pageName }: INavigateProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box>
        <Link to={path} className={classes.navigate}>
          <IconButton size="small" edge="end" aria-label="navigate" color="inherit" >
            <ArrowBackIcon />
          </IconButton>
          Navigate to {pageName} page
        </Link>
      </Box>
    </Container>
  );
};

export default Navigate;