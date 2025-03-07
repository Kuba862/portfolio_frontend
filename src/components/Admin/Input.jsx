import React from 'react'
import { InputStyled } from '../../assets/styles/Input.styles'

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <InputStyled type={type} placeholder={placeholder} onChange={onChange} value={value} />
  )
}

export default Input