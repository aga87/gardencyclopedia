import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrMsg, selectErrId } from '../redux/reducers/index';
import useFormInput from '../utils/hooks/useFormInput';
import { register } from '../redux/actions/authActions';
import TextField from './TextField';

const RegistrationForm = (): JSX.Element => {
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const errMsg = useSelector(selectErrMsg);
  const errId = useSelector(selectErrId);
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
    maxLength: 20,
    required: true
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    };

    dispatch(register(newUser));
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        inputId="username"
        label="Username"
        value={username.value}
        maxLength={usernameValidators.maxLength}
        handleChange={username.handleChange}
        required={usernameValidators.required}
      />
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
      <button type="submit">Register</button>
      {errId === 'REGISTER_FAIL' && <p>{errMsg}</p>}
    </form>
  );
};

export default RegistrationForm;
