import styled from 'styled-components'

const StyledContainer = styled.main`
  padding: 32px;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.neutral.five};
  color: ${props => props.theme.colors.neutral.one};
  font-family: ${props => props.theme.fonts.join(',')};
  gap: 32px;
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 64px 1fr;
  
`

export const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

