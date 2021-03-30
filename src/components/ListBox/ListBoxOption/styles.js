import styled, { css } from 'styled-components';
import * as tokens from '../../helpers/tokens';

const StyledListOption = styled.button`
  width: 100%;
  padding: 0.5em 0.5em 0.5em 1em;
  text-align: left;
  border-bottom: 1px solid #e1e2e2;
  text-transform: capitalize;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content:flex-start;
}

&:active {
  background-color: red;
}

&:hover {
  background-color: #e1e2e2;
}


`;
export default StyledListOption;
