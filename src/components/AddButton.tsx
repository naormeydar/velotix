import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  addButton: {
    borderRadius: '50%',
    minWidth: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
}));

interface IAddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: IAddButtonProps) => {
  const classes = useStyles();

  return (
    <Box>
      <Button variant="contained" color="primary" className={classes.addButton} onClick={onClick}>
        Add +
      </Button>
    </Box>
  );
};

export default AddButton;