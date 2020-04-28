import * as React from 'react';
import Loader from 'react-loader-spinner';
import './styles.scss';

const Loading = () => (
  <div className="loader">
    <Loader type="Oval" color="#32325D" height={50} width={50} timeout={3000} />
  </div>
);

export default Loading;
