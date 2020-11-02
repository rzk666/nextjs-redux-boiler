import App from 'next/app';
import React from 'react';
import wrapper from '../redux/store/reduxWrapper';
// Styles
import '../styles/globals.scss';

// This is written as a class so it can inherit from next/app for redux support
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp);
