import React, { useState } from 'react';
import { DataBaseType, IFormData } from '../types';
import { makeStyles } from '@mui/styles';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  input: {
    width: '100%',
  },
  inputLabel: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(1),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

interface IAddDatabaseDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: IFormData) => void;
}

const AddDatabaseDialog = ({ open, onClose, onSubmit }: IAddDatabaseDialogProps) => {
  const classes = useStyles();
  const initialFormData: IFormData = {
    name: '',
    url: '',
    username: '',
    password: '',
    type: DataBaseType.Snowflake,
  }
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const isFormValid = Object.values(formData).every((value) => Boolean(value));

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value as string });
  };

  const handleTypeChange = (e: SelectChangeEvent<DataBaseType>) => {
    const value = e.target.value as DataBaseType;
    setFormData({ ...formData, type: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
      setFormData(initialFormData);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Database Connection</DialogTitle>
      <DialogContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            label="Database Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            label="URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.input}
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormControl className={classes.input}>
            <InputLabel className={classes.inputLabel}>Type *</InputLabel>
            <Select
                name="type"
                value={formData.type}
                onChange={handleTypeChange}
                required
            >
                {Object.values(DataBaseType).map((type) => (
                <MenuItem key={type} value={type}>
                    {type}
                </MenuItem>
                ))}
            </Select>
        </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} disabled={!isFormValid}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDatabaseDialog;