import React from 'react';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import 'antd/dist/antd.css';

import "../public/vendors/style";
import "../styles/style.css"
import initStore from '../redux/store';
import {Provider} from "react-redux";
import LocaleProvider from "../app/core/LocaleProvider";
import {AuthProvider} from "../util/use-auth";
import Layout from "../app/core/Layout";

const Page = ({Component, pageProps, store}) => {

  return (
    <React.Fragment>
      <Head>
        <title>Recengine - Recommender System platform</title>
      </Head>
      <Provider store={store}>
        <LocaleProvider>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </LocaleProvider>
      </Provider>
    </React.Fragment>
  );
};

export default withRedux(initStore)(Page);
