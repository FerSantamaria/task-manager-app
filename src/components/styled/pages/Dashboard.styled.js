import styled from "styled-components"
import ScrollContainer from 'react-indiana-drag-scroll'

export const StyledColumnsContainer = styled(ScrollContainer)`
  padding-top: 16px;
  padding-right: 32px;
  width: 100%;
  flex: 1;
  max-height: initial;
  overflow: scroll;
  display: flex;
  gap: 32px;
`