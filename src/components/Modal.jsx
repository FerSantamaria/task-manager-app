import PropTypes from 'prop-types'
import { Button } from "./Button";
import { StyledModal } from './styled/components/Modal.styled'
import { StyledFlexContainer } from "./styled/FlexContainer.styled";

const Modal = ({isOpen, onCancel, onConfirm, confirmText, cancelText, children}) => {
  
  const handlePropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <StyledModal open={isOpen} onClick={onCancel}>
      <div onClick={handlePropagation}>
        { children }
        <StyledFlexContainer justifyContent="flex-end" gap="16px" style={{ width: "100%" }}>
          <Button onClick={onCancel} unselected>{cancelText}</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </StyledFlexContainer>
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}

Modal.defaultProps = {
  confirmText: "Confirm",
  cancelText: "Cancel"
}

export default Modal