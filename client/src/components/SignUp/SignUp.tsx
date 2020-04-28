// @ts-ignore
import Joi from 'joi-browser';
import React, { useCallback, useState } from 'react';
import {useMutation} from "@apollo/react-hooks";
import {SIGN_UP, SIGN_UP_UPDATE} from "../../graphql/mutations/personnel";
import Loading from "../Loading/Loading";
import '../Login/styles.scss';

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
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className={error ? 'auth__error' : 'auth__error-hidden'}>{error}</div>
          <div className="auth__label">
            <label htmlFor="text">Name</label>
          </div>
          <div className="auth__input">
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="Name"
              name="name"
              value={inputValues.name}
            />
          </div>
          <div className="auth__label">
            <label htmlFor="text">Lastname</label>
          </div>
          <div className="auth__input">
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={inputValues.lastname}
            />
          </div>
          <div className="auth__label">
            <label htmlFor="email">Email</label>
          </div>
          <div className="auth__input">
            <input
              onChange={handleOnChange}
              type="email"
              placeholder="Email"
              name="email"
              value={inputValues.email}
            />
          </div>
          <div className="auth__label">
            <label htmlFor="password">Password</label>
          </div>
          <div className="auth__input">
            <input
              onChange={handleOnChange}
              type="password"
              placeholder="Password"
              name="password"
              value={inputValues.password}
            />
          </div>
          <button className="auth__button" type="submit" onSubmit={handleSubmit} name="button">
            Sign up
          </button>
        </form>
      </section>
    );
};

export default SignUp;
