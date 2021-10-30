import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLoading } from '../redux/reducers/index';
import Header from '../components/Header';
import Loader from '../components/Loader';
import TabbedAuthForm from '../components/TabbedAuthForm';

const Authentication = (): JSX.Element => {
  const isUserLoading = useSelector(selectIsUserLoading);

  return (
    <div className="l-authentication">
      <div className="l-authentication__content">
        <div className={isUserLoading ? 'u-push-dbl' : 'u-push'}>
          <Header />
        </div>
        <div className="l-authentication__status">
          {isUserLoading ? <Loader /> : <TabbedAuthForm />}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
