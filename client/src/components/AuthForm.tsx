import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectErrMsg,
  selectErrId,
  selectHasJustRegistered
} from '../redux/reducers/index';
import useAuthForm from '../utils/hooks/useAuthForm';
import SubmitButton from './01-atoms/buttons/SubmitButton';
import SuccessMsg from './01-atoms/SuccessMsg';
import TextField from './02-molecules/TextField';
import Error from './01-atoms/Error';

type AuthFormProps = {
  variant: 'login' | 'register';
};

const AuthForm = ({ variant }: AuthFormProps): JSX.Element => {
  const hasJustRegistered = useSelector(selectHasJustRegistered);
  const serverErrMsg = useSelector(selectErrMsg);
  const serverErrId = useSelector(selectErrId);
  const {
    username,
    email,
    password,
    constraints,
    clientLoginErrors,
    clientRegErrors,
    handleSubmit
  } = useAuthForm(variant);

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when the form renders
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [variant]);

  return (
    <form noValidate onSubmit={handleSubmit} className='c-form l-form'>
      {variant === 'login' && serverErrId === 'LOGIN_FAIL' && (
        <div className='l-form__server-msg'>
          <Error variant='server' msg={serverErrMsg} />
        </div>
      )}
      {variant === 'register' && serverErrId === 'REGISTER_FAIL' && (
        <div className='l-form__server-msg'>
          <Error variant='server' msg={serverErrMsg} />
        </div>
      )}
      {variant === 'register' && hasJustRegistered && (
        <div className='l-form__server-msg'>
          <SuccessMsg msg='Registration successful. Please log in.' />
        </div>
      )}
      {variant === 'register' && (
        <div className='l-form__field'>
          <TextField
            ref={firstInputRef}
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
          ref={variant === 'login' ? firstInputRef : null}
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
      <SubmitButton text={variant === 'login' ? 'Log in' : 'Register'} />
    </form>
  );
};

export default AuthForm;
