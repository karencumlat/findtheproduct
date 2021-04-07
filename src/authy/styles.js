import styled, { css } from 'styled-components';
import * as tokens from '../components/helpers/tokens';

import { device } from '../helpers/breakpoints';

const StyledAuthyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 4em;

  .authy-form {
    width: 100%;

    .authy-form--input > * {
      margin: 0 0 1rem 0;
    }

    h3 {
      margin-bottom: 0;
    }

    .authy-form--image {
      margin: 0 0 1rem 0;
    }

    .authy--illustration {
      width: 80%;
      margin: 20% auto;
      display: block;
    }

    .authy--login-btn {
      margin: 1rem 0 0 0;
    }

    .authy-or {
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }
  .authy-success {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      flex: 1;
    }

    button {
      padding: 0;
    }
  }

  .authy--logout-btn {
    ${'' /* position: absolute; */}
    ${'' /* top: 0; */}
    ${'' /* right: 0; */}
    font-size: 2em;
  }
`;

export default StyledAuthyForm;
