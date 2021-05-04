import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import asyncComponent from '../util/asyncComponent'

const Visualization = asyncComponent(() => import('../routes/Visualization/index'));

const VisualizationPage = () => <Visualization/>;

const visualization = () => {
  const {authUser} = useAuth();

  return authUser ? <VisualizationPage/> : <SignInPage/>;
}

export default visualization;
