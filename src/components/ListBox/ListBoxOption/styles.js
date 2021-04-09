import styled from 'styled-components';
import TOKENS from '../../Tokens';

const StyledListOption = styled.button`
  width: 100%;
  padding: 0.5em 0.5em 0.5em 1em;
  text-align: left;
  border-bottom: 1px solid ${TOKENS.COLOR.GRAY};
  text-transform: capitalize;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content:flex-start;
}

&:hover {
  background-color: ${TOKENS.COLOR.GRAY};
}


`;
export default StyledListOption;
