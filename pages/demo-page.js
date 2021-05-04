import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import asyncComponent from '../util/asyncComponent'

const Demo = asyncComponent(() => import('../routes/DemoPage/index'));

const DemoPage = () => <Demo/>;

const demoPage = () => {
  const {authUser} = useAuth();

  return authUser ? <DemoPage/> : <SignInPage/>;
}

export default demoPage;
