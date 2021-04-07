import { IoIosClose } from 'react-icons/io';

import Button from '../Button';

import StyledModal from './styles';
function Modal(props) {
  const {
    onClose,
    heading,
    onSave,
    children,
    primaryBtn,
    secondaryBtn,
  } = props;

  return (
    <StyledModal {...props}>
      <h3>{heading}</h3>
      <Button onClick={onClose} ghost className="modal--close-btn">
        <IoIosClose />
      </Button>
      <div className="modal-content">{children}</div>
      <div className="modal-btn">
        <Button onClick={onClose} secondary fullWidth>
          {secondaryBtn || 'Cancel'}
        </Button>
        <Button onClick={onSave} primary fullWidth>
          {primaryBtn || 'Save'}
        </Button>
      </div>
    </StyledModal>
  );
}

export default Modal;
