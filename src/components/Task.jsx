import React from 'react'
import styled from 'styled-components'
import { StyledTitle } from './TaskColumn'
import Tag from './Tag';
import Avatar from './Avatar';
import { StyledFlexContainer } from './styled/FlexContainer.styled';
import Reaction from './Reaction';
import { ReactComponent as EllipsisIcon } from './../assets/icons/ellipsis.svg';
import { ReactComponent as ClockIcon } from './../assets/icons/clock.svg';
import { ReactComponent as ClipIcon } from './../assets/icons/paperclip.svg';
import { ReactComponent as TreeIcon } from './../assets/icons/file-tree.svg';
import { ReactComponent as CommentIcon } from './../assets/icons/text-bubble.svg';

const StyledTask = styled.article`
  background-color: ${props => props.theme.colors.neutral.four};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > div > svg{
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.neutral.one};
    cursor: pointer;

    &:hover{
      filter: brightness(80%);
    }
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
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <span>3 points</span>
        <Tag variant={true ? "danger" : undefined}>
          <ClockIcon />
          Yesterday
        </Tag>
      </StyledFlexContainer>
      <StyledFlexContainer gap="8px" flexWrap="wrap">
        <Tag variant="success">Android</Tag>
        <Tag variant="warning">iOS</Tag>
      </StyledFlexContainer>
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <Avatar />
        <StyledFlexContainer alignItems="center" gap="16px">
          <Reaction icon={<ClipIcon />} />
          <Reaction count={3} icon={<TreeIcon />} />
          <Reaction count={3} icon={<CommentIcon />} />
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledTask>
  )
}
