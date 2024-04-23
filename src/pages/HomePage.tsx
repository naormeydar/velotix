import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableComponent from '../components/TableComponent';
import AddButton from '../components/AddButton';
import AddDatabaseDialog from '../components/AddDatabaseDialog';
import Loading from '../components/Loading';
import { Box, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { IDatabase, IFormData } from '../types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  tableActions: {
    display: 'flex',
    justifyContent: 'end',
  }
}));

const HomePage = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [databases, setDatabases] = useState<IDatabase[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<IDatabase[]>('http://localhost:4000/databases');
        setDatabases(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddDatabase = async (formData: IFormData) => {
    try {
      const newDatabaseData = await axios.post<IDatabase>('http://localhost:4000/databases', formData);
      setDatabases(prevDatabases => [...prevDatabases, {...newDatabaseData.data}]);
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error adding database:', error);
    }
  };

  if(isLoading) {
    return <Loading />
  }

  return (
    <Box className={classes.container}>
      <Typography variant='h3' className={classes.header}>Database Connection List</Typography>
      <Box className={classes.content}>
        <Box className={classes.tableActions}><AddButton onClick={() => setIsDialogOpen(true)} /></Box>
        <TableComponent databases={databases} />
        <AddDatabaseDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSubmit={handleAddDatabase} />
      </Box>
    </Box>
  );
};

export default HomePage;