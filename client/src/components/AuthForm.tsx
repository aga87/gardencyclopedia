import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrMsg, selectErrId } from '../redux/reducers/index';
import useFormInput from '../utils/hooks/useFormInput';
import {
  validateUsername,
  validateEmail,
  validatePassword
} from '../utils/validation-utils';
import { login, register } from '../redux/actions/authActions';
import TextField from './TextField';
import Error from './Error';

type AuthFormProps = {
  type: 'login' | 'register';
};

const AuthForm = ({ type }: AuthFormProps): JSX.Element => {
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const errMsg = useSelector(selectErrMsg);
  const errId = useSelector(selectErrId);
  const [clientLoginErrors, setClientLoginErrors] = useState({
    email: '',
    password: ''
  });
  const [clientRegErrors, setClientRegErrors] = useState({
    username: '',
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const usernameValidators = {
    maxLength: 20,
    required: true
  };

  const emailValidators = {
    maxLength: 254,
    required: true
  };

  const passwordValidators = {
    minLength: 8,
    maxLength: 128,
    required: true
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // LOGIN
    if (type === 'login') {
      // Client-side validation
      const loginFormErrors = {
        email: validateEmail(email.value, emailValidators),
        password: validatePassword(password.value, passwordValidators)
      };

      setClientLoginErrors(loginFormErrors);

      const formErrorExists = Object.values(loginFormErrors).some(
        value => value !== ''
      );

      if (formErrorExists) return;

      // Submit if there is no errors
      const user = {
        email: email.value,
        password: password.value
      };
      dispatch(login(user));
    } else {
      // REGISTRATION - client-side validation
      const regFormErrors = {
        username: validateUsername(username.value, usernameValidators),
        email: validateEmail(email.value, emailValidators),
        password: validatePassword(password.value, passwordValidators)
      };

      setClientRegErrors(regFormErrors);

      const formErrorExists = Object.values(regFormErrors).some(
        value => value !== ''
      );

      if (formErrorExists) return;

      // Submit if there is no errors
      const newUser = {
        username: username.value,
        email: email.value,
        password: password.value
      };
      dispatch(register(newUser));
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {type === 'register' && (
        <div className="u-push-half">
          <TextField
            inputId="username"
            label="Username"
            value={username.value}
            maxLength={usernameValidators.maxLength}
            handleChange={username.handleChange}
            required={usernameValidators.required}
          />
          <Error inputId="username" error={clientRegErrors.username} />
        </div>
      )}
      <div className="u-push-half">
        <TextField
          inputId={`${type}-email`}
          label="Email"
          variant="email"
          value={email.value}
          maxLength={emailValidators.maxLength}
          handleChange={email.handleChange}
          required={emailValidators.required}
        />
        <Error
          inputId={`${type}-email`}
          error={
            type === 'login' ? clientLoginErrors.email : clientRegErrors.email
          }
        />
      </div>
      <div className="u-push">
        <TextField
          inputId={`${type}-password`}
          label="Password"
          variant="password"
          value={password.value}
          minLength={passwordValidators.minLength}
          maxLength={passwordValidators.maxLength}
          handleChange={password.handleChange}
          required={passwordValidators.required}
        />
        <Error
          inputId={`${type}-password`}
          error={
            type === 'login'
              ? clientLoginErrors.password
              : clientRegErrors.password
          }
        />
      </div>
      <button type="submit" className="btn">
        {type === 'login' ? 'Log in' : 'Register'}
      </button>
      {type === 'login' && errId === 'LOGIN_FAIL' && <p>{errMsg}</p>}
      {type === 'register' && errId === 'REGISTER_FAIL' && <p>{errMsg}</p>}
    </form>
  );
};

export default AuthForm;
