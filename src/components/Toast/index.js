import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Button from '../Button';
import StyledToast from './styles';

function Toast(props) {
  const { title, timeout, autohide } = props;
  //TODO: kind error, succes, onClick to close Toast
  const [display, setDisplay] = useState(true);
  const time = timeout ? timeout : 3000;
  useEffect(() => {
    autohide &&
      setTimeout(() => {
        setDisplay(false);
      }, time);
  });
  return (
    <>
      <StyledToast {...props}>
        <p>{title}</p>
        <Button ghost onClick={() => setDisplay(false)}>
          <IoIosClose />
        </Button>
      </StyledToast>
    </>
  );
}

export default Toast;
