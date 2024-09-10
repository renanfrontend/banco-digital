import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomInputContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center', // Centraliza horizontalmente
  width: '100%', // Ocupa toda a largura do container
  marginBottom: '16px', // Espaçamento inferior
});

const DarkTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Borda branca no modo dark
    },
    '&:hover fieldset': {
      borderColor: 'gray', // Borda cinza ao passar o mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: 'lightblue', // Borda azul claro quando focado
    },
    '& .MuiInputBase-input': {
      color: 'white', // Texto branco no modo dark
    },
    '& label': {
      color: 'gray', // Cor do label em cinza
    },
    '& label.Mui-focused': {
      color: 'lightblue', // Cor do label em azul claro quando focado
    },
  },
});

function CustomInput({ label, ...props }) {
  return (
    <CustomInputContainer> 
      <DarkTextField 
        label={label} 
        variant="outlined" 
        fullWidth 
        {...props} 
      />
    </CustomInputContainer>
  );
}

export default CustomInput;