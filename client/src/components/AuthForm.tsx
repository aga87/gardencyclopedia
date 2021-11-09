import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrMsg,
  selectErrId,
  selectHasJustRegistered
} from '../redux/reducers/index';
import useFormInput from '../utils/hooks/useFormInput';
import {
  validateUsername,
  validateEmail,
  validatePassword
} from '../utils/validation-utils';
import { login, register } from '../redux/actions/authActions';
import TextField from './TextField';
import Error from './nano/Error';
import SubmitBtn from './nano/SubmitBtn';

type AuthFormProps = {
  variant: 'login' | 'register';
};

const AuthForm = ({ variant }: AuthFormProps): JSX.Element => {
  const hasJustRegistered = useSelector(selectHasJustRegistered);
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

  // Field constraints
  const constraints = {
    username: {
      maxLength: 20,
      required: true
    },
    email: {
      maxLength: 254,
      required: true
    },
    password: {
      minLength: 8,
      maxLength: 128,
      required: true
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // LOGIN
    if (variant === 'login') {
      // Client-side validation
      const loginFormErrors = {
        email: validateEmail(email.value, constraints.email),
        password: validatePassword(password.value, constraints.password)
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
        username: validateUsername(username.value, constraints.username),
        email: validateEmail(email.value, constraints.email),
        password: validatePassword(password.value, constraints.password)
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
    <form noValidate onSubmit={handleSubmit} className='c-form l-form'>
      {variant === 'login' && errId === 'LOGIN_FAIL' && (
        <div className='l-form__error'>
          <Error variant='server' msg={errMsg} />
        </div>
      )}
      {variant === 'register' && errId === 'REGISTER_FAIL' && (
        <div className='l-form__error'>
          <Error variant='server' msg={errMsg} />
        </div>
      )}
      {variant === 'register' && hasJustRegistered && (
        <p>Registration successful. Please log in.</p>
      )}
      {variant === 'register' && (
        <div className='l-form__field'>
          <TextField
            inputId='username'
            label='Username'
            value={username.value}
            maxLength={constraints.username.maxLength}
            handleChange={username.handleChange}
            required={constraints.username.required}
            errorId='username-error'
            errorMsg={clientRegErrors.username}
          />
        </div>
      )}
      <div className='l-form__field'>
        <TextField
          inputId={`${variant}-email`}
          label='Email'
          type='email'
          value={email.value}
          maxLength={constraints.email.maxLength}
          handleChange={email.handleChange}
          required={constraints.email.required}
          errorId={`${variant}-email-error`}
          errorMsg={
            variant === 'login'
              ? clientLoginErrors.email
              : clientRegErrors.email
          }
        />
      </div>
      <div className='l-form__field-last'>
        <TextField
          inputId={`${variant}-password`}
          label='Password'
          type='password'
          value={password.value}
          minLength={constraints.password.minLength}
          maxLength={constraints.password.maxLength}
          handleChange={password.handleChange}
          required={constraints.password.required}
          errorId={`${variant}-password-error`}
          errorMsg={
            variant === 'login'
              ? clientLoginErrors.password
              : clientRegErrors.password
          }
        />
      </div>
      <SubmitBtn text={variant === 'login' ? 'Log in' : 'Register'} />
    </form>
  );
};

export default AuthForm;
