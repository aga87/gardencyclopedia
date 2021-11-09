import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLoading } from '../redux/reducers/index';
import Header from '../components/Header';
import Loader from '../components/nano/Loader';
import TabbedAuthForm from '../components/TabbedAuthForm';

const Authentication = (): JSX.Element => {
  const isUserLoading = useSelector(selectIsUserLoading);

  return (
    <div className='p-authentication l-authentication'>
      <div className='l-authentication__content'>
        <Header />
        {isUserLoading ? (
          <div className='l-authentication__loader'>
            <Loader />
          </div>
        ) : (
          <div className='l-authentication__form'>
            <TabbedAuthForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
