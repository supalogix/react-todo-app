import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux"
import {Provider} from "react-redux"
import * as reducer from "@app/feature/product_management/reducer"
import ProductManagement from "@app/feature/product_management/component"
import thunk from "redux-thunk"
import * as pmThunk from "@app/feature/product_management/thunk"
import * as simulation from "@app/feature/product_management/simulation"

// Use this ID to fetch the correct product from the API
// eslint-disable-next-line
const PRODUCT_ID = "1";

// Homebrew logging 
const logger = store => next => action => {
  //console.log(action)
  next(action)
}

const store = createStore(
  combineReducers({ ...reducer }),
  applyMiddleware(
    thunk,
    logger
  ))

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("list"));
console.log(urlParams.get("step"));
console.log(urlParams.get("simulation"));

if(urlParams.get("simulation"))
{
  const list = urlParams.get("list");
  const step = urlParams.get("step");
  const actions = simulation.getActions(list, step);
  for(const action of actions)
  {
    store.dispatch(action);
  }
}
else
{
  // Simulate fetching of data
  store.dispatch(pmThunk.getProduct(PRODUCT_ID))
}




function App() {
  return <Provider store={store}>
    <ProductManagement />
  </Provider>
}

export default App;
