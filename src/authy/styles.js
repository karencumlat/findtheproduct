import styled, { css } from 'styled-components';
import * as tokens from '../components/helpers/tokens';

import { device } from '../helpers/breakpoints';

const StyledAuthyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .authy-form {
    width: 100%;

    > * {
      margin: 0 0 0.75em 0;
    }

    .authy--login-btn {
      margin: 1em 0 0 0;
    }

    .authy-or {
      display: flex;
      justify-content: center;
      margin: 0;
    }

    h3 {
      margin-bottom: 0;
    }
  }

  .authy--logout-btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 2em;
  }

  .authy--illustration {
    width: 80%;
    margin: 2.5em auto;
    display: block;
  }
`;

export default StyledAuthyForm;
