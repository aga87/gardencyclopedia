import React, { useEffect } from 'react';
import './sass/index.scss';
import { useAppDispatch, useAppSelector } from './redux/typed-hooks';
import { selectIsAuthenticated } from './redux/reducers/index';
import loadUser from './redux/actions/authActions';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';

const App = (): JSX.Element => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return <div>{isAuthenticated ? <Dashboard /> : <Authentication />}</div>;
};

export default App;
