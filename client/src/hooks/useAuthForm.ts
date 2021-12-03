import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store';
import useFormInput from './useFormInput';
import {
  validateUsername,
  validateEmail,
  validatePassword
} from '../utils/validation-utils';
import { login, register } from '../redux/actions/authActions';

type Input = {
  value: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

type ReturnType = {
  username: Input;
  email: Input;
  password: Input;
  constraints: {
    username: {
      maxLength: number;
      required: boolean;
    };
    email: {
      maxLength: number;
      required: boolean;
    };
    password: {
      minLength: number;
      maxLength: number;
      required: boolean;
    };
  };
  clientLoginErrors: {
    email: string;
    password: string;
  };
  clientRegErrors: {
    username: string;
    email: string;
    password: string;
  };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useAuthForm = (variant: 'login' | 'register'): ReturnType => {
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
  const dispatch = useAppDispatch();

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

  return {
    username,
    email,
    password,
    constraints,
    clientLoginErrors,
    clientRegErrors,
    handleSubmit
  };
};

export default useAuthForm;
