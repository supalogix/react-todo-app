import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux"
import {Provider} from "react-redux"
import * as reducer from "@repeat/feature/product_management/reducer"
import ProductManagement from "@repeat/feature/product_management/component"
import thunk from "redux-thunk"
import * as pmThunk from "@repeat/feature/product_management/thunk"

// Use this ID to fetch the correct product from the API
// eslint-disable-next-line
const PRODUCT_ID = "1";

// Homebrew logging 
const logger = store => next => action => {
  console.log(action)
  next(action)
}

const store = createStore(
  combineReducers({ ...reducer }),
  applyMiddleware(
    thunk,
    logger
  ))

// Simulate fetching of data
store.dispatch(pmThunk.getProduct(PRODUCT_ID))

function App() {
  return <Provider store={store}>
    <ProductManagement />
  </Provider>
}

export default App;
