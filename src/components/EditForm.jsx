import { Button } from './inputs/Button'
import TagSelect from './inputs/TagSelect'
import EstimateSelect from './inputs/EstimateSelect'
import CustomDatePicker from './inputs/CustomDatePicker'
import NumberInput from './inputs/NumberInput'
import StatusSelect from './inputs/StatusSelect'
import TextInput from './inputs/TextInput'
import dayjs from 'dayjs'
import { FormikProvider, useFormik } from 'formik'
import { array, object, date, string, number } from 'yup'
import { useMutation } from '@apollo/client'
import { GET_TASKS_BY_STATUS } from '../graphQL/queries'
import { UPDATE_TASK_MUTATION } from '../graphQL/mutations'
import { StyledCreateForm } from './../styled/components/CreateForm.styled'
import { StyledFlexContainer } from '../styled/layouts/FlexContainer.styled'
import { ReactComponent as SpinnerIcon } from './../assets/icons/spinner.svg'

// Yup validations rules
const VALIDATION_SCHEMA = object({
  name: string().required(),
  position: number().min(1).required(),
  dueDate: date().required(),
  pointEstimate: object().required(),
  status: object().required(),
  tags: array().of(object()).min(1).required(),
})

const EditForm = ({ task, onCancel }) => {

  // Initializing data with current task data (Recreating full values to be compatible with form imputs)
  const INITIAL_DATA = {
    name: task.name,
    position: task.position,
    dueDate: dayjs(task.dueDate).toDate(),
    pointEstimate: {value: task.pointEstimate, label: `${task.pointEstimate} Points`},
    status: {value: task.status, label: task.status.replaceAll("_", " ")},
    tags: task.tags.map(item => ({ value: item, label: item.replaceAll("_", " ") }))
  }

  const submitForm = (formValues) => {
    // Constructing data object from formik values
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

  // Initialing formik object
  const formik = useFormik({
    initialValues: INITIAL_DATA,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: submitForm
  })  

  const [updateTaskMutation, { loading, error }] = useMutation(UPDATE_TASK_MUTATION, {
    // Update functions help us to update de cache after a the mutation
    update: (cache, { data }) => {
      const oldStatus = task.status
      const newStatus = data.updateTask.status

      // Getting old data from current list
      const { tasks: oldTasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus }
      })
      
      // Removing from all list
      cache.writeQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: oldStatus },
        data: {
          tasks: oldTasks.filter(task => task.id !== data.updateTask.id)
        }
      })

      // Getting old data from new list
      const { tasks } = cache.readQuery({
        query: GET_TASKS_BY_STATUS,
        variables: { status: newStatus }
      })
      
      // Adding to new list
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
    // After all operations done
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