import React from 'react'
import PropTypes from 'prop-types'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { StyledCreateForm } from './styled/components/CreateForm.styled'

const CreateForm = () => {
  return (
    <StyledCreateForm>
      <input type="text" name="" id="" placeholder="Task Title" />
      <div>
        <EstimateSelect />
        <PeopleSelect/>
        <TagSelect />
        <CustomDatePicker />
      </div>
    </StyledCreateForm>
  )
}

CreateForm.propTypes = {}

export default CreateForm