import React, { useContext } from 'react';

import { AuthContext } from '../authy/Auth';

import AuthyForm from '../authy/AuthyForm';

import Admin from './Admin';
import User from './User';

function View() {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : null;

  return (
    <>
      {currentUserEmail === process.env.REACT_APP_ADMIN_EMAIL ? (
        <Admin />
      ) : currentUser !== null ? (
        <User />
      ) : (
        <AuthyForm />
      )}
    </>
  );
}

export default View;
