import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import MainPage from "./main";

const homePage = () => {
  const {authUser} = useAuth();

  return authUser ? <MainPage/> : <SignInPage/>;
}

export default homePage;
