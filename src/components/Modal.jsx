import PropTypes from 'prop-types'
import PeopleSelect from './PeopleSelect'
import TagSelect from './TagSelect'
import EstimateSelect from './EstimateSelect'
import CustomDatePicker from './CustomDatePicker'
import { StyledModal } from './styled/Modal.styled'

const Modal = ({isOpen, onClose, children}) => {
  
  return (
    <StyledModal open={isOpen} onClick={onClose}>
      <div onClick={(e)=> e.stopPropagation()}>
        {/* { children } */}
        <EstimateSelect />
        <PeopleSelect/>
        <TagSelect />
        <CustomDatePicker />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default Modal