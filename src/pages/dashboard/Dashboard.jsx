import styled from 'styled-components'
import { ActionBar } from '../../components/ActionBar'
import TaskColumn from '../../components/TaskColumn'

const ContentWrapper = styled.div`
  flex: 1;
  padding: 32px 0 0 32px;
  max-height: initial;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const StyledColumnsContainer = styled.div`
  padding-top: 16px;
  padding-right: 32px;
  width: 100%;
  flex: 1;
  max-height: initial;
  overflow: scroll;
  display: flex;
  gap: 32px;
`

export const Dashboard = () => {  
  return (
    <ContentWrapper>
      <ActionBar />
      <StyledColumnsContainer>
        <TaskColumn label='Working (1)' />
        <TaskColumn label='In progress (2)' />
        <TaskColumn label='Cancelled (4)' />
        <TaskColumn label='Pending (3)' />
      </StyledColumnsContainer>
    </ContentWrapper>
  )
}
