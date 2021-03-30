import { useContext } from 'react';
import { AuthContext } from './authy/Auth';

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : '';

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.svg'}
        alt="watermelon illustration"
        width="10%"
        height="auto"
      />
      <h2
        style={{ fontSize: '1em', marginLeft: '1em' }}
      >{`Welcome ${currentUserEmail}`}</h2>
    </div>
  );
};

export default Welcome;
