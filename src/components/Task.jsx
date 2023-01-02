import React from 'react'
import Tag from './Tag';
import Avatar from './Avatar';
import Reaction from './Reaction';
import Dropdown from './Dropdown';
import { Button } from './Button';
import { StyledFlexContainer } from './styled/FlexContainer.styled';
import { StyledTitle } from './styled/components/TaskColumn.styled'
import { StyledTask, StyledTitleWrapper } from './styled/components/Task.styled';
import { ReactComponent as ClipIcon } from './../assets/icons/paperclip.svg';
import { ReactComponent as TreeIcon } from './../assets/icons/file-tree.svg';
import { ReactComponent as CommentIcon } from './../assets/icons/text-bubble.svg';
import { ReactComponent as PencilIcon } from './../assets/icons/pencil.svg';
import { ReactComponent as TrashIcon } from './../assets/icons/trash-can.svg';
import TimeTag from './TimeTag';

export const Task = ({ task }) => {
  return (
    <StyledTask>
      <StyledTitleWrapper>
        <StyledTitle>{task.name}</StyledTitle>
        <Dropdown>
          <Button unselected onClick={()=>alert("hi")}><PencilIcon /> Edit</Button>
          <Button unselected onClick={()=>alert("hi")}><TrashIcon /> Delete</Button>
        </Dropdown>
      </StyledTitleWrapper>
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <span>3 points</span>
        <TimeTag date={task.dueDate} />
      </StyledFlexContainer>
      <StyledFlexContainer gap="8px" flexWrap="wrap">
        {
          task.tags.map((tag, index) => 
            <Tag key={index} variant="success">{tag}</Tag>
          )
        }
      </StyledFlexContainer>
      <StyledFlexContainer alignItems="center" justifyContent="space-between">
        <Avatar url={task.assignee.avatar} />
        <StyledFlexContainer alignItems="center" gap="16px">
          <Reaction icon={<ClipIcon />} />
          <Reaction count={Math.floor(Math.random() * 10) + 1} icon={<TreeIcon />} />
          <Reaction count={Math.floor(Math.random() * 10) + 1} icon={<CommentIcon />} />
        </StyledFlexContainer>
      </StyledFlexContainer>
    </StyledTask>
  )
}
