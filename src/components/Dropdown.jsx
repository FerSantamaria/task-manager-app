import React, { useState, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Button } from './Button'
import { ReactComponent as EllipsisIcon } from './../assets/icons/ellipsis.svg';
import { useOutsideClick } from '../hooks/useOutsideClick';

const StyledDropDown = styled.div`
  position: relative;

  button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.neutral.one};
  }
`
const StyledDropdownList = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 8px;
  right: 0;
  border: 1px solid grey;
  border-radius: 8px;
  width: 150px;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.neutral.four};

  & > li {

    &:hover{
      background-color: ${({theme}) => theme.colors.neutral.five};
    }

    button{
      width: 100%;
      justify-content: flex-start;
    }
  }
`

const Dropdown = ({ children }) => {
  const childrenArray = Children.toArray(children);
  const [open, setOpen] = useState(false);
  
  const handleClickOutside = () => {
    setOpen(false);
  }
  const ref = useOutsideClick(handleClickOutside);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledDropDown ref={ref}>
      <Button unselected onClick={handleOpen}><EllipsisIcon /></Button>
      {open ? (
        <StyledDropdownList>
          { 
            childrenArray.map((child, index) => (
              <li key={index} className="menu-item">
                {cloneElement(child, {
                  onClick: () => {
                    child.props.onClick && child.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))
          }
        </StyledDropdownList>
      ) : null}
    </StyledDropDown>
  );
}

Dropdown.propTypes = {
  menu: PropTypes.arrayOf(Button)
}

export default Dropdown