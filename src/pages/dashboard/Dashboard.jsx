import { useQuery } from '@apollo/client'
import { ActionBar } from '../../components/ActionBar'
import { StyledCard } from '../../components/styled/components/Card.styled'
import TaskColumn from '../../components/TaskColumn'
import { ModalProvider } from '../../contexts/ModalContext'
import { GET_STATUSES } from '../../graphQL/queries'
import { StyledContentWrapper } from "./../../components/styled/pages/ContentWrapper.styled"
import { StyledColumnsContainer } from "./../../components/styled/pages/Dashboard.styled"

export const Dashboard = () => {  
  const { loading, error, data } = useQuery(GET_STATUSES)

  return (
    <StyledContentWrapper>
      <ActionBar />
      
      { loading &&
        <StyledCard>
          Fetching data
        </StyledCard>
      }

      { error &&
        <StyledCard>
          An error ocurred. Please try again
        </StyledCard>
      }

      { data && 
        <>
          <ModalProvider>
            <StyledColumnsContainer hideScrollbars={false}>
              {
                data && data?.__type?.enumValues.map((type, index) => 
                  <TaskColumn key={index} label={type.name} />
                )
              }
            </StyledColumnsContainer>
          </ModalProvider>
        </>
      }

    </StyledContentWrapper>
  )
}
