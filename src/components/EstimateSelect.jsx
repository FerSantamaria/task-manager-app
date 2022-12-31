import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { ReactComponent as EstimateIcon } from './../assets/icons/plus-minus.svg';
import { SelectStyles, StyledPeopleMenuOption  } from './styled/Select.styled'

const options = [{
  label: "Estimate",
  options: [
    {value: 0, label: "0 Points"},
    {value: 1, label: "1 Points"},
    {value: 2, label: "2 Points"},
    {value: 4, label: "4 Points"},
    {value: 8, label: "8 Points"},
  ]
}]

const EstimateSelect = () => {
  return (
    <Select
      styles={SelectStyles}
      name="type"
      options={options}
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
    />
  )
}

EstimateSelect.propTypes = {}

export default EstimateSelect