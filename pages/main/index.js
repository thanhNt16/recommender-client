import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const Main = asyncComponent(() => import('../../routes/Main'));

const MainPage = () => <Main/>;

export default MainPage;
