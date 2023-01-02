import PropTypes from 'prop-types'
import { Task } from './Task'
import { StyledTaskColumn, StyledListTitle } from './styled/components/TaskColumn.styled'
import { useQuery } from '@apollo/client'
import { GET_TASKS_BY_STATUS } from '../graphQL/queries'


const TaskColumn = ({ label }) => {
  const { loading, error, data } = useQuery(GET_TASKS_BY_STATUS, {
    variables: {
      status: label
    }
  })
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <StyledTaskColumn>
      <StyledListTitle>{label.toLowerCase()} ({data?.tasks?.length || 0})</StyledListTitle>
        {
          data.tasks.length == 0 &&
          <span>NO DATA</span>
        }
        
        {
          data && data?.tasks.map((task, index) => 
            <Task key={task.id} task={task}/>
          )
        }
    </StyledTaskColumn>
  )
}

TaskColumn.propTypes = {
  label: PropTypes.string.isRequired
}

export default TaskColumn