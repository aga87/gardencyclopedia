import React, { useEffect } from 'react';
import './sass/index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from './redux/reducers/index';
import loadUser from './redux/actions/authActions';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';

const App = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return <div>{isAuthenticated ? <Dashboard /> : <Authentication />}</div>;
};

export default App;
