import { Button } from './Button'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { FormikProvider, useFormik } from 'formik'
import TextInput from './TextInput'
import { array, object, date, string } from 'yup'
import { useMutation } from '@apollo/client'
import { CREATE_TASK_MUTATION } from '../graphQL/mutations'
import { GET_TASKS_BY_STATUS } from '../graphQL/queries'
import { StyledCreateForm } from './styled/components/CreateForm.styled'
import { StyledFlexContainer } from './styled/FlexContainer.styled'
import { ReactComponent as SpinnerIcon } from './../assets/icons/spinner.svg'
import StatusSelect from './StatusSelect'

const INITIAL_DATA = {
  name: "",
  assigneeId: "",
  dueDate: "",
  pointEstimate: "",
  tags: []
}

const VALIDATION_SCHEMA = object({
  name: string().required(),
  assigneeId: object().required(),
  dueDate: date().required(),
  pointEstimate: object().required(),
  tags: array().of(object()).min(1).required(),
})

const CreateForm = ({ onCancel }) => {
  
  const submitForm = (formValues) => {
    const fullValues = {
      ...formValues,
      assigneeId: formValues.assigneeId.value,
      pointEstimate: formValues.pointEstimate.value,
      tags: formValues.tags.map(item => item.value),
      status: "TODO"
    }

    createTaskMutation({ variables: fullValues })
  }

  const formik = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: submitForm
  })  

  const [createTaskMutation, { loading, error }] = useMutation(CREATE_TASK_MUTATION, {
    update: (cache, { data }) => {
      console.log(data);

      const { tasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: data.createTask.status }
      })

      cache.writeQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: data.createTask.status },
        data: {
          tasks: [
            ...tasks,
            data.createTask,
          ]
        }
      })
    },
    onCompleted: () => {
      formik.resetForm()
      onCancel()
    }
  });
  console.log(formik.errors);
  return (
    <StyledCreateForm>
      {
        error && "Error"
      }

      <FormikProvider value={formik}>
        
        <TextInput name="name" placeholder="Task Title" />
        <div>
          <EstimateSelect name="pointEstimate" />
          <PeopleSelect name="assigneeId"/>
          <TagSelect name="tags" />
          <CustomDatePicker name="dueDate" />
        </div>
      </FormikProvider>
      <StyledFlexContainer justifyContent="space-between" alignItems="center" flexDirection="row" gap="16px" style={{ width: "100%" }}>
          <div style={{ color: "#E27D73" }}>
            { error && "An error ocurred, please try again" }
          </div>
          
          <StyledFlexContainer justifyContent="flex-end" flexDirection="row" gap="16px">
            <Button onClick={onCancel} disabled={loading} unselected>Cancel</Button>
            <Button onClick={formik.submitForm} disabled={loading} >{ loading ? <SpinnerIcon /> : "Create"}</Button>
          </StyledFlexContainer>
        </StyledFlexContainer>
    </StyledCreateForm>
  )
}

CreateForm.propTypes = {}

export default CreateForm