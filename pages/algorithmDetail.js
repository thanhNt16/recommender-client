import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import asyncComponent from '../util/asyncComponent'

const AlgorithmDetail = asyncComponent(() => import('../routes/AlgorithmDetail/index'));

const AlgorithmDetailPage = () => <AlgorithmDetail/>;

const algorithmDetail = () => {
  const {authUser} = useAuth();

  return authUser ? <AlgorithmDetailPage/> : <SignInPage/>;
}

export default algorithmDetail;
