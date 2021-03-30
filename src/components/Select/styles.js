import styled, { css } from 'styled-components';
import * as tokens from '../helpers/tokens';

const StyledSelect = styled.select`
  padding: 0.75em;
  outline: none;
  color: ${tokens.COLOR.BLACK};
  border: none;
  border-bottom: ${tokens.COLOR.BLACK} 1px solid;
  text-transform: capitalize;
  background: ${tokens.COLOR.GRAY};
  border-radius: 0;

  &:focus {
    outline: ${tokens.COLOR.GREEN} 2px solid;
    border: none;
  }
`;

export default StyledSelect;
