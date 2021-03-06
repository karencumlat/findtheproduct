import styled from 'styled-components';
import TOKENS from '../Tokens';

const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  input[type='checkbox'] {
    opacity: 0;
    width: 1em;
    height: 1em;
  }

  .checked {
    color: ${TOKENS.COLOR.GREEN};
  }

  .checkbox-icon {
    text-align: right;
    padding: 0 0.5em;
    font-size: 1.25em;
  }

  .checkbox-label {
    margin-left: -1rem;
  }

  .checkbox-label.strike {
    text-decoration: line-through;
  }

  .checkbox-label::first-letter {
    text-transform: capitalize;
  }
`;

export default StyledCheckbox;
