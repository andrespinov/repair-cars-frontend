import TextField from '@material-ui/core/TextField';
import React from 'react'

import { InputContainer } from './styles'

const Input = ({ onChange, name, ...props}) => {
  const handleChange = (event) => {
    onChange(name, event.target.value);
  };
  return (
    <InputContainer>
      <TextField
        className='input'
        variant='outlined'
        onChange={handleChange}
        name={name}
        {...props}
      />
    </InputContainer>
  )
}

export default Input
