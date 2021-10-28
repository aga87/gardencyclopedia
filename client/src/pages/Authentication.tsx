import React, { useState } from 'react';
import Header from '../components/Header';
import Tab from '../components/Tab';
import AuthForm from '../components/AuthForm';

const Authentication = (): JSX.Element => {
  const [tab, setTab] = useState('login');

  const handleLoginTabClick = () => {
    setTab('login');
  };

  const handleRegisterTabClick = () => {
    setTab('register');
  };

  return (
    <div className="p-authentication">
      <div className="p-authentication__content">
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
  );
};

export default Authentication;
