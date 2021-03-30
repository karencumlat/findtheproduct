import styled from 'styled-components';
import * as tokens from '../helpers/tokens';

const StyledModal = styled.div`
  background: ${tokens.COLOR.WHITE};
  width: 90%;
  top: 50%;
  transform: translate(0, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: absolute;

  .modal--close-btn {
    position: absolute;
    top: 0.25em;
    right: 0.25em;
    padding: 0;
    font-size: 2em;
  }

  h3 {
    margin: 1em;
  }

  > * {
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
