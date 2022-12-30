import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from './TaskColumn'
import { ReactComponent as EllipsisIcon } from './../assets/icons/ellipsis.svg';
import Tag from './Tag';

const StyledTask = styled.article`
  background-color: ${props => props.theme.colors.neutral.four};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.one};
  }
`

const StyledTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Task = () => {
  return (
    <StyledTask>
      <StyledTitleWrapper>
        <StyledTitle>Lorem, ipsum dolor</StyledTitle>
        <EllipsisIcon />
      </StyledTitleWrapper>
      <Tag>android</Tag>
    </StyledTask>
  )
}
