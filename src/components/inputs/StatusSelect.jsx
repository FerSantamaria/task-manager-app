import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { useQuery } from '@apollo/client'
import { GET_STATUSES } from '../../graphQL/queries'
import { SelectStyles, StyledPeopleMenuOption  } from '../../styled/components/Select.styled'

const StatusSelect = ({ ...props }) => {
  const [options, setOptions] = useState([])
  const { loading, data } = useQuery(GET_STATUSES)
  const [ field, meta, helpers ] = useField(props)
  const hasError = meta.touched && (meta.error !== undefined)

  useEffect(() => {
    if (data?.__type?.enumValues) {
      let fetchedData = data.__type.enumValues.map(item => ({value: item.name, label: item.name.replaceAll("_", " ")}))
      let options = [{
        label: "Status",
        options: fetchedData
      }]

      setOptions(options)
    }
  }, [data])
  
  return (
    <Select
      styles={SelectStyles}
      name="status"
      options={options}
      isLoading={loading}
      loadingMessage={()=> "Loading data"}
      formatOptionLabel={option => (
        <StyledPeopleMenuOption>
          <span>{option.label}</span>
        </StyledPeopleMenuOption>
      )}
      placeholder={
        <StyledPeopleMenuOption>
          <span>Status</span>
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

StatusSelect.propTypes = {
  name: PropTypes.string.isRequired
}

export default StatusSelect