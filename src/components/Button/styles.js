import styled, { css } from 'styled-components';
import * as tokens from '../helpers/tokens';

const StyledButton = styled.button`
  padding: 0.5em;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  ${(props) =>
    props.primary &&
    css`
      background: ${tokens.COLOR.GREEN};
      color: ${tokens.COLOR.WHITE};
    `};

  ${(props) =>
    props.secondary &&
    css`
      background: ${tokens.COLOR.BLACK};
      color: ${tokens.COLOR.WHITE};
    `};

  ${(props) =>
    props.tertiary &&
    css`
      background: ${tokens.COLOR.WHITE};
      border: ${tokens.COLOR.BLACK} 1px solid;
      color: ${tokens.COLOR.BLACK};

      &:hover {
        background: ${tokens.COLOR.GREEN};
        color: ${tokens.COLOR.WHITE};
        border-color: ${tokens.COLOR.GREEN};
      }
    `};

  ${(props) =>
    props.ghost &&
    css`
      color: ${tokens.COLOR.BLACK};

      &:hover {
        color: ${tokens.COLOR.GREEN};
      }
    `};
`;

export default StyledButton;
