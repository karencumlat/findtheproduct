import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledOverflowMenu = styled.div`
  position: relative;

  & > button:hover {
    background-color: ${TOKENS.COLOR.GRAY};
    color: ${TOKENS.COLOR.GRAY90};
  }

  & > button:focus {
    box-shadow: ${TOKENS.BOXSHADOW};
  }
  .overflow-menu--item {
    display: block;
    position: absolute;
    right: 0;
    z-index: 100;
    width: max-content;
    box-shadow: ${TOKENS.BOXSHADOW};
  }

  .blocker {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: ' ';
  }
`;

export default StyledOverflowMenu;
