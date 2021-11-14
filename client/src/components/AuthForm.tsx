import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectErrMsg,
  selectErrId,
  selectHasJustRegistered
} from '../redux/reducers/index';
import useAuthForm from '../utils/hooks/useAuthForm';
// import useFormInput from '../utils/hooks/useFormInput';
// import {
//   validateUsername,
//   validateEmail,
//   validatePassword
// } from '../utils/validation-utils';
// import { login, register } from '../redux/actions/authActions';
import TextField from './TextField';
import Error from './nano/Error';
import SubmitButton from './nano/SubmitButton';
import SuccessMsg from './nano/SuccessMsg';

type AuthFormProps = {
  variant: 'login' | 'register';
};

const AuthForm = ({ variant }: AuthFormProps): JSX.Element => {
  const hasJustRegistered = useSelector(selectHasJustRegistered);
  const errMsg = useSelector(selectErrMsg);
  const errId = useSelector(selectErrId);
  const {
    username,
    email,
    password,
    constraints,
    clientLoginErrors,
    clientRegErrors,
    handleSubmit
  } = useAuthForm(variant);

  return (
    <form noValidate onSubmit={handleSubmit} className='c-form l-form'>
      {variant === 'login' && errId === 'LOGIN_FAIL' && (
        <div className='l-form__server-msg'>
          <Error variant='server' msg={errMsg} />
        </div>
      )}
      {variant === 'register' && errId === 'REGISTER_FAIL' && (
        <div className='l-form__server-msg'>
          <Error variant='server' msg={errMsg} />
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
      <SubmitButton text={variant === 'login' ? 'Log in' : 'Register'} />
    </form>
  );
};

export default AuthForm;
