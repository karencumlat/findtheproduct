import { useContext, useState } from 'react';
import firebase from '../firebase';
import { IoIosLogOut } from 'react-icons/io';
import { AuthContext } from './Auth';
import StyledAuthyForm from './styles.js';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authy, setAuthy] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const currentUserEmail = currentUser ? currentUser.email : '';

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
        setAuthy(true);
        resetInput();
      })
      .catch((err) => {
        console.error(err);
        setAuthy(false);
      });
  };

  const logOut = () => {
    firebase.auth().signOut();
    setAuthy(false);
  };

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <StyledAuthyForm>
      {currentUserEmail === '' ? (
        <div className="authy-form">
          <img
            src={process.env.PUBLIC_URL + '/images/homescreen.svg'}
            alt="watermelon illustration"
            className="authy--illustration"
          />
          <h3>Find the product.</h3>
          <p>Find items quicks through the aisles.</p>
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            fullWidth
          />
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
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
      ) : (
        <Button onClick={logOut} className="authy--logout-btn" ghost>
          <IoIosLogOut />
        </Button>
      )}
    </StyledAuthyForm>
  );
}

export default Login;
