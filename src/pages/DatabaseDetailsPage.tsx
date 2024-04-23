import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IDatabase } from '../types';
import Loading from '../components/Loading';
import Navigate from '../components/Navigate';
import { Box, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  detailsWrapper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

const DatabaseDetailsPage = () => {
  const classes = useStyles();
  const { id } = useParams<"id">();
  const [isLoading, setIsLoading] = useState(false);
  const [database, setDatabase] = useState<IDatabase | null>(null);
  
  useEffect(() => {
    const fetchDatabase = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<IDatabase>(`http://localhost:4000/databases/${id}`);
        setDatabase(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching database:', error);
        setIsLoading(false);
      }
    };

    fetchDatabase();
  }, [id]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Navigate path="/" pageName="Home" />
      <Paper elevation={3} className={classes.detailsWrapper}>
        <Box className={classes.title}>
          <Typography variant="h4" className={classes.heading}>Database Details</Typography>
        </Box>
        <Box className={classes.details}>
          {database && Object.entries(database).map(([key, value]) => {
            const keyPascalCase = key.charAt(0).toUpperCase() + key.slice(1);
            return (
              <Typography key={key} variant="body1">
                <Typography component="span" fontWeight="bold">{keyPascalCase}:</Typography> {value}
              </Typography>
            );
          })}
        </Box>
      </Paper>
    </Container>
  );
};

export default DatabaseDetailsPage;