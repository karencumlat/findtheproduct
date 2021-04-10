import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledNotification = styled.div`
  background-color: ${TOKENS.COLOR.GRAY90};
  color: ${TOKENS.COLOR.WHITE};
  border-left: 0.25rem solid;
  border-color: ${(props) =>
    props.error
      ? `${TOKENS.COLOR.RED}`
      : props.success
      ? `${TOKENS.COLOR.GREEN}`
      : `${TOKENS.COLOR.WHITE}`};
  border-radius: 2px;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 200;

  & > p {
    flex: 1;
  }

  & > button {
    color: ${TOKENS.COLOR.WHITE};
    font-size: 2rem;
    padding: 0;

    :hover {
      color: ${TOKENS.COLOR.WHITE};
    }
  }
`;

export default StyledNotification;
