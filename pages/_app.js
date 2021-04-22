import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout;

    return (
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    );
  }
}
export default MyApp;
