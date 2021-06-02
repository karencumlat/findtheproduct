import styled from 'styled-components';

const StyledAuthyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .authy-form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .authy-form--input {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .authy-form--input > * {
      margin: 0 0 1rem 0;
    }

    h3 {
      margin-bottom: 0.25rem;
    }

    .authy-form--image {
      margin: 0 0 1rem 0;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    .authy--illustration {
      width: 80%;
      margin: 0 auto;
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
    font-size: 2em;
  }

  @media (min-width: 768px) {
    .authy-form {
      flex-direction: row;
      height: 90%;
    }

    .authy-form--image,
    .authy-form--input {
      flex: 1;

      .authy--illustration {
        height: 90%;
      }
    }

    .authy-form--input {
      padding: 0 10rem;
    }
  }
`;

export default StyledAuthyForm;
