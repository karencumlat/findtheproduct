import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledModal = styled.div`
  background: ${TOKENS.COLOR.WHITE};
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;

  .modal--close-btn {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    padding: 0;
    font-size: 2em;
  }

  h3 {
    margin: 1em;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
  }

  .modal-content > * {
    flex: 1;
    margin: 1em;
  }

  .modal-btn {
    display: flex;
    width: 100%;
    margin: 1em 0 0 0;
    > btn {
      flex: 1;
    }
  }
`;

export default StyledModal;
