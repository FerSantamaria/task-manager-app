import React from 'react'
import Tag from './Tag';
import Avatar from './Avatar';
import Reaction from './Reaction';
import Dropdown from './Dropdown';
import { Button } from './Button';
import { StyledFlexContainer } from './styled/FlexContainer.styled';
import { StyledTitle } from './styled/TaskColumn.styled'
import { StyledTask, StyledTitleWrapper } from './styled/Task.styled';
import { ReactComponent as ClockIcon } from './../assets/icons/clock.svg';
import { ReactComponent as ClipIcon } from './../assets/icons/paperclip.svg';
import { ReactComponent as TreeIcon } from './../assets/icons/file-tree.svg';
import { ReactComponent as CommentIcon } from './../assets/icons/text-bubble.svg';
import { ReactComponent as PencilIcon } from './../assets/icons/pencil.svg';
import { ReactComponent as TrashIcon } from './../assets/icons/trash-can.svg';

export const Task = () => {
  return (
    <StyledTask>
      <StyledTitleWrapper>
        <StyledTitle>Lorem, ipsum dolor</StyledTitle>
        <Dropdown>
          <Button unselected onClick={()=>alert("hi")}><PencilIcon /> Edit</Button>
          <Button unselected onClick={()=>alert("hi")}><TrashIcon /> Delete</Button>
        </Dropdown>
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
        <StyledFlexContainer alignItems="center" gap="8px">
          <Reaction icon={<ClipIcon />} />
          <Reaction count={3} icon={<TreeIcon />} />
          <Reaction count={3} icon={<CommentIcon />} />
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledTask>
  )
}
