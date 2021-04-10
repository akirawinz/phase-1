import '../styles/globals.css';

import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
export default MyApp;
