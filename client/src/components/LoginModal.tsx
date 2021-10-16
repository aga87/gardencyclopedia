import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrMsg, selectErrorId } from '../redux/reducers/index';
import useFormInput from '../utils/hooks/useFormInput';
import { login } from '../redux/actions/authActions';
import TextField from './TextField';

const LoginModal = (): JSX.Element => {
  const email = useFormInput('');
  const password = useFormInput('');
  const errMsg = useSelector(selectErrMsg);
  const errorId = useSelector(selectErrorId);
  const dispatch = useDispatch();

  const emailValidators = {
    maxLength: 254,
    required: true
  };

  const passwordValidators = {
    maxLength: 20,
    required: true
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: email.value,
      password: password.value
    };
    dispatch(login(user));
  };

  return (
    <div>
      <h1>Login</h1>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          inputId="email"
          label="Email"
          variant="email"
          value={email.value}
          maxLength={emailValidators.maxLength}
          handleChange={email.handleChange}
          required={emailValidators.required}
        />
        <TextField
          inputId="password"
          label="Password"
          variant="password"
          value={password.value}
          maxLength={passwordValidators.maxLength}
          handleChange={password.handleChange}
          required={passwordValidators.required}
        />
        <button type="submit">Login</button>
        {errorId === 'LOGIN_FAIL' && <p>{errMsg}</p>}
      </form>
    </div>
  );
};

export default LoginModal;
