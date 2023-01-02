import { useQuery } from '@apollo/client'
import { ActionBar } from '../../components/ActionBar'
import TaskColumn from '../../components/TaskColumn'
import { GET_STATUSES } from '../../graphQL/queries'
import { StyledContentWrapper } from "./../../components/styled/pages/ContentWrapper.styled"
import { StyledColumnsContainer } from "./../../components/styled/pages/Dashboard.styled"

export const Dashboard = () => {  
  const { loading, error, data } = useQuery(GET_STATUSES)
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <StyledContentWrapper>
      <ActionBar />
      <StyledColumnsContainer>
        {
          data && data?.__type?.enumValues.map((type, index) => 
            <TaskColumn key={index} label={type.name} />
          )
        }
      </StyledColumnsContainer>
    </StyledContentWrapper>
  )
}
