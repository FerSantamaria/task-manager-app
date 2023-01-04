import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { StyledNumberInput } from './styled/components/NumberInput.styled';

const NumberInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && (meta.error !== undefined)
  
  return (
    <StyledNumberInput 
      min={1}
      {...field}
      {...props}

      className={hasError ? "input-error" : undefined}
    />
  )
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default NumberInput