import { useState, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useOutsideClick } from '../hooks/useOutsideClick';
import { Button } from './Button'
import { StyledDropDown } from './styled/components/Dropdown.styled';
import { ReactComponent as EllipsisIcon } from './../assets/icons/ellipsis.svg';

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
        <ul>
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
        </ul>
      ) : null}
    </StyledDropDown>
  );
}

Dropdown.propTypes = {
  menu: PropTypes.arrayOf(Button)
}

export default Dropdown