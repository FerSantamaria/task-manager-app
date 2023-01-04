import { useState } from 'react'
import { StyledClearableTextInput } from '../../styled/inputs/ClearableTextInput.styled';
import { ReactComponent as CancelIcon } from './../../assets/icons/cancel.svg';

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
    <StyledClearableTextInput>
      <input  
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
      
    </StyledClearableTextInput>
  )
}
