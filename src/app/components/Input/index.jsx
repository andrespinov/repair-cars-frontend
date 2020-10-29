import React from 'react'
import TextField from '@material-ui/core/TextField'
import { InputContainer } from './styles'

const Input = ({ onChange, name, ...props}) => {
  const handleChange = (event) => {
    console.log(event.target.value)
    onChange(name, event.target.value)
  }
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
