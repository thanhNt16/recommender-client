import React from 'react';
import asyncComponent from '../util/asyncComponent'

const Scenario = asyncComponent(() => import('../routes/Scenario'));

const ScenarioPage = () => <Scenario/>;

export default ScenarioPage;
