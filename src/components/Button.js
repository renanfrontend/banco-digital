import React from 'react';
import Button from '@mui/material/Button';

function CustomButton({ children, ...props }) {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
}

export default CustomButton;