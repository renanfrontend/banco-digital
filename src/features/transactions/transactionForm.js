import React from 'react';
import TextField from '@mui/material/TextField';

function CustomInput({ label, ...props }) {
  return (
    <TextField label={label} variant="outlined" fullWidth margin="normal" {...props} />
  );
}

export default CustomInput;