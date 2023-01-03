import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { useQuery } from '@apollo/client'
import { GET_POINT_ESTIMATES } from '../graphQL/queries'
import { SelectStyles, StyledPeopleMenuOption  } from './styled/components/Select.styled'
import { ReactComponent as EstimateIcon } from './../assets/icons/plus-minus.svg'

// const options = [{
//   label: "Estimate",
//   options: [
//     {value: "ZERO", label: "0 Points"},
//     {value: "ONE", label: "1 Points"},
//     {value: "TWO", label: "2 Points"},
//     {value: "FOUR", label: "4 Points"},
//     {value: "EIGHT", label: "8 Points"},
//   ]
// }]

const EstimateSelect = ({ ...props }) => {
  const [options, setOptions] = useState([])
  const [selectedValue, setSelectedValue] = useState()
  const { loading, data } = useQuery(GET_POINT_ESTIMATES)
  const [ field, meta, helpers ] = useField(props)
  const hasError = meta.touched && (meta.error !== undefined)

  useEffect(() => {
    if (data?.__type?.enumValues) {
      let fetchedData = data.__type.enumValues.map(item => ({value: item.name, label: `${item.name} Points`}))
      let options = [{
        label: "Estimate",
        options: fetchedData
      }]

      setOptions(options)
    }
  }, [data])
  
  return (
    <Select
      styles={SelectStyles}
      name="type"
      options={options}
      isLoading={loading}
      loadingMessage={()=> "Loading data"}
      formatOptionLabel={option => (
        <StyledPeopleMenuOption>
          <EstimateIcon />
          <span>{option.label}</span>
        </StyledPeopleMenuOption>
      )}
      placeholder={
        <StyledPeopleMenuOption>
          <EstimateIcon />
          <span>Estimate</span>
        </StyledPeopleMenuOption>
      }

      {...field}
      {...props}

      value={selectedValue}
      onChange={(newValue) => {
        setSelectedValue(newValue)
        helpers.setValue(newValue.value)
      }}

      className={hasError ? "input-error" : undefined}
    />
  )
}

EstimateSelect.propTypes = {
  name: PropTypes.string.isRequired
}

export default EstimateSelect