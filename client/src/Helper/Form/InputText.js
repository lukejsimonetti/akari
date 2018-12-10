import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap';

const InputText = ({ input, placeholder, label, meta: { touched, error, warning } }) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input {...input} placeholder={placeholder} type="text" />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </FormGroup>
)

export default InputText