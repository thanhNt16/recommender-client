import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import asyncComponent from '../util/asyncComponent'

const RatingGenerator = asyncComponent(() => import('../routes/RatingGenerator/index'));

const RatingGeneratorPage = () => <RatingGenerator/>;

const ratingGenerator = () => {
  const {authUser} = useAuth();

  return authUser ? <RatingGeneratorPage/> : <SignInPage/>;
}

export default ratingGenerator;
