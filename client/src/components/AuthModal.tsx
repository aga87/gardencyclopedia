import React, { useState } from 'react';
import Btn from './Btn';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

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
      {tab === 'login' ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default AuthModal;
