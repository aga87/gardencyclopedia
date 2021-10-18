import React, { useState } from 'react';
import Btn from './Btn';
import AuthForm from './AuthForm';

const AuthModal = (): JSX.Element => {
  const [tab, setTab] = useState('login');

  const handleLoginTabClick = () => {
    setTab('login');
  };

  const handleRegisterTabClick = () => {
    setTab('register');
  };

  return (
    <div>
      <Btn text="Log in" handleClick={handleLoginTabClick} />
      <Btn text="Register" handleClick={handleRegisterTabClick} />
      {tab === 'login' ? (
        <AuthForm type="login" />
      ) : (
        <AuthForm type="register" />
      )}
    </div>
  );
};

export default AuthModal;
