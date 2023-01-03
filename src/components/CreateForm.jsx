import React from 'react'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { FormikProvider, useFormik } from 'formik'
import TextInput from './TextInput'
import { array, object, date, string } from 'yup'
import { StyledCreateForm } from './styled/components/CreateForm.styled'

const INITIAL_DATA = {
  title: "",
  assigneeId: "",
  dueDate: "",
  pointEstimate: "",
  status: "TODO",
  tags: []
}

const VALIDATION_SCHEMA = object({
  title: string().required(),
  assigneeId: string().required(),
  dueDate: date().required(),
  pointEstimate: string().required(),
  status: string().required(),
  tags: array().of(string()).min(1).required(),
})

const CreateForm = () => {

  const submitForm = (values) => {
    alert(JSON.stringify(values,"", 4))
  }

  const formik = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: submitForm
  })  

  console.log(formik.errors);
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