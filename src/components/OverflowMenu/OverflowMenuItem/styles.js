import styled from 'styled-components';
import TOKENS from '../../Tokens';

export const StyledOverflowMenuItem = styled.button`
  width: 100%;
  padding: 0.5em 0.5em 0.5em 1em;
  text-align: left;
  border-top: ${(props) =>
    props.hasDivider ? `1px solid ${TOKENS.COLOR.GRAY}` : '0'};
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${(props) =>
      props.isDanger ? `${TOKENS.COLOR.RED}` : `${TOKENS.COLOR.GRAY}`};
    color: ${(props) =>
      props.isDanger ? `${TOKENS.COLOR.WHITE}` : `${TOKENS.COLOR.GRAY90}`};
  }
`;

export default StyledOverflowMenuItem;
