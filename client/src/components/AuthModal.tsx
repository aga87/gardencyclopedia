import React, { useState } from 'react';
import Header from './Header';
import Tab from './Tab';
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
    <div className="c-modal">
      <div className="c-modal__inner">
        <div className="c-modal__content">
          <div className="u-push">
            <Header />
          </div>
          <div className="u-push-and-half u-text-right">
            <Tab
              text="Log in"
              selected={tab === 'login'}
              handleClick={handleLoginTabClick}
            />
            <Tab
              text="Register"
              selected={tab === 'register'}
              handleClick={handleRegisterTabClick}
            />
          </div>
          {tab === 'login' ? (
            <AuthForm type="login" />
          ) : (
            <AuthForm type="register" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
