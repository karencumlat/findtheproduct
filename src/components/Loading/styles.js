import styled, { css } from 'styled-components';
import TOKENS from '../Tokens';

const StyledLoading = styled.div`
  position: absolute;
  background-color: ${TOKENS.COLOR.WHITE};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default StyledLoading;
