import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Button from '../Button';
import StyledToast from './styles';

function Toast(props) {
  const { title, timeout } = props;
  //TODO: kind error, success
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, timeout);
  });
  return (
    <>
      {display === true ? (
        <StyledToast {...props}>
          <p>{title}</p>
          <Button ghost onClick={() => setDisplay(false)}>
            <IoIosClose />
          </Button>
        </StyledToast>
      ) : (
        ''
      )}
    </>
  );
}

export default Toast;
