import React from 'react';
import { useAppSelector } from '../redux/typed-hooks';
import { selectIsUserLoading } from '../redux/reducers/index';
import Loader from '../components/01-atoms/Loader';
import Header from '../components/02-molecules/Header';
import TabbedAuthForm from '../components/03-organisms/auth/TabbedAuthForm';

const Authentication = (): JSX.Element => {
  const isUserLoading = useAppSelector(selectIsUserLoading);

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
