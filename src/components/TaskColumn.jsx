import PropTypes from 'prop-types'
import { StyledCard } from './styled/components/Card.styled'
import { Task } from './Task'
import { StyledTaskColumn, StyledListTitle } from './styled/components/TaskColumn.styled'
import { useQuery } from '@apollo/client'
import { GET_TASKS_BY_STATUS } from '../graphQL/queries'

const TaskColumn = ({ label }) => {
  const formatedLabel = label.replaceAll('_', ' ').toLowerCase()
  const { loading, error, data } = useQuery(GET_TASKS_BY_STATUS, {
    variables: {
      status: label
    }
  })

  if (loading) {
    return (
      <StyledCard>
        Fetching data
      </StyledCard>
    )
  }
  
  if (error) {
    return (
      <StyledCard>
        An error ocurred. Please try again
      </StyledCard>
    )
  }

  return (
    <StyledTaskColumn>

      <StyledListTitle>{formatedLabel} ({data?.tasks?.length || 0})</StyledListTitle>
        {
          data?.tasks.length == 0 &&
          <StyledCard>
            Your {formatedLabel} list is empty
          </StyledCard>
        }
        
        {
          data && data?.tasks.map((task) => 
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