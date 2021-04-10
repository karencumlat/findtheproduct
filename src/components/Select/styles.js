import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledSelect = styled.select`
  padding: 0.75em;
  outline: none;
  color: ${TOKENS.COLOR.BLACK};
  border: none;
  border-bottom: ${TOKENS.COLOR.BLACK} 1px solid;
  text-transform: capitalize;
  background: ${TOKENS.COLOR.GRAY};
  border-radius: 0;

  &:focus {
    outline: ${TOKENS.COLOR.GREEN} 2px solid;
    border: none;
  }
`;

export default StyledSelect;
