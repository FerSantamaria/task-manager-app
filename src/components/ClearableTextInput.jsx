import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as CancelIcon } from './../assets/icons/cancel.svg';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  svg {
    fill: ${props => props.theme.colors.neutral.two};
    width: 24px;
    height: 24px;
    transition: 0.3s;

    &:hover{
      fill: ${props => props.theme.colors.primary.four};
      cursor: pointer;
    }
  }
`

const StyledTextInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.neutral.two};
  font-size: 15px;
  line-height: 24px;
  min-height: 64px;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.neutral.two};
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const ClearableTextInput = () => {
  const [showCancelButton, setShowCancelButton] = useState(false)
  const [value, setValue] = useState('')

  const handleBlur = () => {
    if (value.trim().length == 0) {
      setShowCancelButton(false)
      setValue('')
    }
  }

  const handleClear = () => {
    setValue('')
    setShowCancelButton(false)
  }

  return (
    <InputWrapper>
      <StyledTextInput  
        type="text"
        placeholder="Search"
        onFocus={() => setShowCancelButton(true)} 
        onBlur={handleBlur}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      
      { showCancelButton &&
        <CancelIcon onClick={handleClear} />
      }
      
    </InputWrapper>
  )
}
