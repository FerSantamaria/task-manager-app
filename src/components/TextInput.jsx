import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && (meta.error !== undefined)
  
  return (
    <input 
      type="text"
      
      {...field}
      {...props}

      className={hasError ? "input-error" : undefined}
    />
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default TextInput