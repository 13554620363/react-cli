import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const context = require.context('./', true, /\.js$/)   
const keys = context.keys().filter(item=> item!=='./index.js') 
const reducers = {}
for (let i = 0; i < keys.length; i++) {
  let exp = context(keys[i])
  for (let fn in exp) {
    reducers[fn] = exp[fn]
  }
}
const rootReducer = combineReducers({
  router: routerReducer,
  ...reducers,
})
export default rootReducer

