import { useState } from 'react';
import firebase from '../firebase';

import StyledAuthyForm from './styles.js';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Toast from '../components/Toast';

function AuthyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
        setErrMsg(err.message);
      });
  };

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <StyledAuthyForm>
      <div className="authy-form">
        <div className="authy-form--image">
          <img
            src={process.env.PUBLIC_URL + '/images/watermelon02.svg'}
            alt="watermelon illustration"
            className="authy--illustration"
          />
          <h3>Find the product.</h3>
          <p>
            Add the product and you'll only need to make one loop to get your
            entire haul.
          </p>
        </div>
        <div className="authy-form--input">
          {errMsg !== '' ? <Toast title={errMsg} /> : null}
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            fullWidth
          />
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            fullWidth
          />
          <Button
            onClick={login}
            primary
            fullWidth
            className="authy--login-btn"
          >
            Login
          </Button>
          <span className="authy-or">or</span>
          <Button onClick={register} tertiary fullWidth>
            Register
          </Button>
        </div>
      </div>
    </StyledAuthyForm>
  );
}

export default AuthyForm;
