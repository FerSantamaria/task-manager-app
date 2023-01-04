import { Button } from './Button'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { FormikProvider, useFormik } from 'formik'
import TextInput from './TextInput'
import { array, object, date, string, number } from 'yup'
import { useMutation } from '@apollo/client'
import { GET_TASKS_BY_STATUS } from '../graphQL/queries'
import { UPDATE_TASK_MUTATION } from '../graphQL/mutations'
import { StyledCreateForm } from './styled/components/CreateForm.styled'
import { StyledFlexContainer } from './styled/FlexContainer.styled'
import { ReactComponent as SpinnerIcon } from './../assets/icons/spinner.svg'
import StatusSelect from './StatusSelect'
import dayjs from 'dayjs'
import NumberInput from './NumberInput'

const VALIDATION_SCHEMA = object({
  name: string().required(),
  position: number().min(1).required(),
  dueDate: date().required(),
  pointEstimate: object().required(),
  status: object().required(),
  tags: array().of(object()).min(1).required(),
})

const EditForm = ({ task, onCancel }) => {

  const INITIAL_DATA = {
    name: task.name,
    position: task.position,
    dueDate: dayjs(task.dueDate).toDate(),
    pointEstimate: {value: task.pointEstimate, label: `${task.pointEstimate} Points`},
    status: {value: task.status, label: task.status.replaceAll("_", " ")},
    tags: task.tags.map(item => ({ value: item, label: item.replaceAll("_", " ") }))
  }

  const submitForm = (formValues) => {
    const fullValues = {
      ...formValues,
      id: task.id,
      position: formValues.position,
      pointEstimate: formValues.pointEstimate.value,
      tags: formValues.tags.map(item => item.value),
      status: formValues.status.value,
    }

    updateTaskMutation({ variables: fullValues })
  }

  const formik = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: submitForm
  })  

  const [updateTaskMutation, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    update: (cache, { data }) => {
      const oldStatus = task.status
      const newStatus = data.updateTask.status

      // Removing from all list
      const { tasks: oldTasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus }
      })
      
      cache.writeQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus },
        data: {
          tasks: oldTasks.filter(task => task.id !== data.updateTask.id)
        }
      })

      // Adding to new list
      const { tasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: newStatus }
      })

      cache.writeQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: newStatus },
        data: {
          tasks: [
            ...tasks,
            data.updateTask,
          ].sort((a,b) => a.position - b.position)
        }
      })
    },
    onCompleted: () => {
      formik.resetForm()
      onCancel()
    }
  });

  return (
    <StyledCreateForm>
      {
        error && "Error"
      }

      <FormikProvider value={formik}>
        
        <TextInput name="name" placeholder="Task Title" />
        <div>
          <EstimateSelect name="pointEstimate" />
          <NumberInput name="position" />
          <TagSelect name="tags" />
          <StatusSelect name="status" />
          <CustomDatePicker name="dueDate" />
        </div>
      </FormikProvider>
      <StyledFlexContainer justifyContent="space-between" alignItems="center" flexDirection="row" gap="16px" style={{ width: "100%" }}>
          <div style={{ color: "#E27D73" }}>
            { error && "An error ocurred, please try again" }
          </div>
          
          <StyledFlexContainer justifyContent="flex-end" flexDirection="row" gap="16px">
            <Button onClick={onCancel} disabled={loading} unselected>Cancel</Button>
            <Button onClick={formik.submitForm} disabled={loading} >{ loading ? <SpinnerIcon /> : "Confirm"}</Button>
          </StyledFlexContainer>
        </StyledFlexContainer>
    </StyledCreateForm>
  )
}

EditForm.propTypes = {}

export default EditForm