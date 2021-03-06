import React from "react"
import { render } from "react-dom"
// import createHistory from "history/createHashHistory"
let createHistory = require("history").createHashHistory
import { Router } from "react-router"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import routes from "Routes"
import reducers from "Reducers"
import "antd/dist/antd.css";
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/todo')

import RouterContainer from "./router"

const store = createStore(reducers, applyMiddleware(thunk,logger));
const renderApp = ()=>
		render((
			<Provider store={store}>
				<Router history={createHistory()}>
				<RouterContainer routes={routes} />
				</Router>
			</Provider>
        ), document.getElementById("root"))
        renderApp()