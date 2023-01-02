import React from 'react'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { StyledCreateForm } from './styled/components/CreateForm.styled'
import { FormikProvider, useFormik } from 'formik'
import TextInput from './TextInput'

const INITIAL_DATA = {
  title: "",
  assigneeId: "",
  dueDate: new Date(),
  pointEstimate: "",
  status: "TODO",
  tags: []
}

const CreateForm = () => {

  const submitForm = (values) => {
    alert(JSON.stringify(values))
  }

  const formik = useFormik({
    initialValues: INITIAL_DATA,
    onSubmit: submitForm
  })

  return (
    <StyledCreateForm>
      <FormikProvider value={formik}>
        <TextInput name="title" placeholder="Task Title" />
        <div>
          <EstimateSelect name="pointEstimate" />
          <PeopleSelect name="assigneeId"/>
          <TagSelect name="tags" />
          <CustomDatePicker name="dueDate" />
        </div>
        <button onClick={formik.submitForm} >Create</button>
      </FormikProvider>
    </StyledCreateForm>
  )
}

CreateForm.propTypes = {}

export default CreateForm