import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { useQuery } from '@apollo/client'
import { GET_POINT_ESTIMATES } from '../graphQL/queries'
import { SelectStyles, StyledPeopleMenuOption  } from './styled/components/Select.styled'
import { ReactComponent as EstimateIcon } from './../assets/icons/plus-minus.svg'

const EstimateSelect = ({ ...props }) => {
  const [options, setOptions] = useState([])
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
      getOptionValue={option => option.value}
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

      value={field.value}
      onChange={(newValue) => {
        helpers.setValue(newValue)
      }}

      className={hasError ? "input-error" : undefined}
    />
  )
}

EstimateSelect.propTypes = {
  name: PropTypes.string.isRequired
}

export default EstimateSelect