import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const TextInput = ({ ...props }) => {
  const [field] = useField(props);
  
  return (
    <input 
      type="text"
      
      {...field}
      {...props}
    />
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired
}

export default TextInput