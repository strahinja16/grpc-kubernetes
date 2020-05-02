// @ts-ignore
import Joi from 'joi-browser';
import React, { useCallback, useState } from 'react';
import {useMutation} from "@apollo/react-hooks";
import {SIGN_UP, SIGN_UP_UPDATE} from "../../graphql/mutations/personnel";
import Loading from "../Loading/Loading";
import '../Login/styles.scss';
import { Button, Form, Message } from "semantic-ui-react";

const SignUp = () => {
  const [error, setError] = useState('');
  const [signUp, { data, loading }] = useMutation(SIGN_UP, { update: SIGN_UP_UPDATE });
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    name: '',
    lastname: '',
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
      name: Joi.string()
        .required()
        .error(new Error('Name is required.')),
      lastname: Joi.string()
        .required()
        .error(new Error('Lastname is required.')),
      email: Joi.string()
        .email({ minDomainAtoms: 2 })
        .required()
        .error(new Error('Invalid email format.')),
      password: Joi.string()
        .required()
        .error(new Error('Password is required.')),
    });

    const result = Joi.validate(
      {
        email: inputValues.email,
        password: inputValues.password,
        name: inputValues.name,
        lastname: inputValues.lastname,
      },
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
      signUp({ variables: { input: { ...inputValues } } })
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
          Sign up
        </h3>
        <Form className="auth__form" onSubmit={handleSubmit}>
          {error && <Message negative><p>{error}</p></Message>}
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="name"
              name="name"
              value={inputValues.name}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="name">Lastname</label>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={inputValues.lastname}
            />
          </Form.Field>
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
            Sign up
          </Button>
        </Form>
      </section>
    );
};

export default SignUp;
