import React from "react"
import { render } from "react-dom"
import createHistory from "history/createHashHistory"
import { Router } from "react-router"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import routes from "Routes"
import reducers from "Reducers"

import RouterContainer from "./router"

const store = createStore(reducers, applyMiddleware(thunk));
const renderApp = ()=>
		render((
			<Provider store={store}>
				<Router history={createHistory()}>
				<RouterContainer routes={routes} />
				</Router>
			</Provider>
        ), document.getElementById("root"))
        renderApp()