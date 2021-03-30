import styled, { css } from 'styled-components';
import * as tokens from '../helpers/tokens';

const StyledInput = styled.input`
  border: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  padding: 1em;
  background-color: ${tokens.COLOR.GRAY};
  border-bottom: ${tokens.COLOR.BLACK} 1px solid;
  text-transform: capitalize;

  &:focus {
    outline: ${tokens.COLOR.GREEN} 2px solid;
    border: none;
  }
`;

export default StyledInput;
