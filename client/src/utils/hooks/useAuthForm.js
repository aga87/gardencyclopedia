import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useFormInput from './useFormInput';
import {
  validateUsername,
  validateEmail,
  validatePassword
} from '../validation-utils';
import { login, register } from '../../redux/actions/authActions';

export default function useAuthForm(variant, constraints) {
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
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

  // (e: React.FormEvent<HTMLFormElement>)
  const handleSubmit = e => {
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

  return {
    username,
    email,
    password,
    clientLoginErrors,
    clientRegErrors,
    handleSubmit
  };
}
