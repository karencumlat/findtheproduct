import styled, { css } from 'styled-components';
import * as tokens from '../helpers/tokens';

const StyledLoading = styled.div`
  position: absolute;
  background-color: ${tokens.COLOR.WHITE};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default StyledLoading;
