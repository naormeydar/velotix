import React from 'react';
import { IDatabase } from '../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import StorageIcon from '@mui/icons-material/Storage';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const useStyles = makeStyles((theme) => ({
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  headerCell: {
    display: 'flex',
  },
  iconCell: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
  },
}));

interface ITableComponentProps {
  databases: IDatabase[];
}

const TableComponent = ({ databases }: ITableComponentProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Box className={classes.headerCell}><BookmarkIcon className={classes.iconCell} /><Typography>Database Name</Typography></Box></TableCell>
            <TableCell><Box className={classes.headerCell}><PersonIcon className={classes.iconCell} /><Typography>User Name</Typography></Box></TableCell>
            <TableCell><Box className={classes.headerCell}><StorageIcon className={classes.iconCell} /><Typography>Database Type</Typography></Box></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {databases.map((db) => (
            <TableRow key={db.id} className={classes.tableRow} onClick={() => navigate(`/database/${db.id}`)}>
              <TableCell>{db.name}</TableCell>
              <TableCell>{db.username}</TableCell>
              <TableCell>{db.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;