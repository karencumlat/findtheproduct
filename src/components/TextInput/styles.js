import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledInput = styled.input`
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  padding: 1em;
  background-color: ${TOKENS.COLOR.GRAY};
  border-bottom: ${TOKENS.COLOR.BLACK} 1px solid;

  &:focus {
    outline: ${TOKENS.COLOR.GREEN} 2px solid;
    border: none;
  }
`;

export default StyledInput;
