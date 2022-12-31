import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { ReactComponent as PersonIcon } from './../assets/icons/person.svg';
import { SelectStyles, StyledPeopleMenuOption  } from './styled/Select.styled'

const PeopleSelect = () => {
  return (
    <Select
      styles={SelectStyles}
      name="type"
      options={[{ label: "Assign To", options: [{label:'Dc', value:'Dc', image: "ravn.svg"},{label:'Graphic fernado santa', value:'Pnd', image: "ravn.svg"}] }]}
      formatOptionLabel={option => (
        <StyledPeopleMenuOption>
          <Avatar />
          <span>{option.label}</span>
        </StyledPeopleMenuOption>
      )}
      placeholder={
        <StyledPeopleMenuOption>
          <PersonIcon />
          <span>Assignee</span>
        </StyledPeopleMenuOption>
      }
    />
  )
}

PeopleSelect.propTypes = {}

export default PeopleSelect