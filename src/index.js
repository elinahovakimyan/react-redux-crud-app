import React, {Component} from 'react';
import App from './App'
import {Provider} from 'react-redux'
import createStore from 'redux'
import store from './store'
import { render } from 'react-dom';
import 'react-select/dist/react-select.css';
import './style/App.css'

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);