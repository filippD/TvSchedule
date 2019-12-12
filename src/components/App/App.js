import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from '../header/header.component.jsx'
import Home from '../home/home.component.jsx'
import Schedules from '../schedules/schedules.component.jsx'

function App() {
  return (
    <div className="App">
    	<Header />
    	<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/schedules' component={Schedules} />
    	</Switch>
    	
    </div>
  );
}

export default App;
