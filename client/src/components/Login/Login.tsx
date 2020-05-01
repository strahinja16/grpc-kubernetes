// @ts-ignore
import Joi from 'joi-browser';
import React, { useCallback, useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'
import {useMutation} from "@apollo/react-hooks";
import {LOGIN, LOGIN_UPDATE} from "../../graphql/mutations/personnel";
import Loading from "../Loading/Loading";
import './styles.scss';

const Login = () => {
  const [error, setError] = useState('');
  const [login, { data, loading }] = useMutation(LOGIN, { update: LOGIN_UPDATE });
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = useCallback(
    event => {
      const { name, value } = event.target;

      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  const setErrorBriefly = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  const validateForm = () => {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .error(new Error('Invalid email format.')),
      password: Joi.string()
        .required()
        .error(new Error('Password is required.')),
    });

    const result = Joi.validate(
      { email: inputValues.email, password: inputValues.password },
      schema
    );

    if (result.error && result.error.message) {
      setErrorBriefly(result.error.message);
    }
    return !result.error;
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      login({ variables: { input: { ...inputValues } } })
        .then(() => {
          if (data.error) {
            setErrorBriefly(data.error);
          }
        })
        .catch((e) => setErrorBriefly(e.message));
    }
  };

  return loading
    ? <Loading/>
    :(
      <section className="auth">
        <h3 className="auth__headline">
          Log in
        </h3>
        <Form className="auth__form" onSubmit={handleSubmit}>
          {error && <Message negative><p>{error}</p></Message>}
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleOnChange}
              type="email"
              placeholder="Email"
              name="email"
              value={inputValues.email}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
              name="password"
              value={inputValues.password}
            />
          </Form.Field>
          <Button
            className="auth__button"
            type="submit"
            onSubmit={handleSubmit}
            name="button"
            primary
          >
            Login
          </Button>
        </Form>
      </section>
    );
};

export default Login;
