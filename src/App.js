import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux"
import {Provider} from "react-redux"
import * as reducer from "@app/feature/product_management/reducer"
import ProductManagement from "@app/feature/product_management/component"
import thunk from "redux-thunk"
import * as pmThunk from "@app/feature/product_management/thunk"

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'react-todo',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://778aaeb9aa5a47518bb880df32a21eca.apm.eastus2.azure.elastic-cloud.com:443',

  // Set the service version (required for source map feature)
  serviceVersion: '',

  // Set the service environment
  environment: 'staging'
})

apm.setInitialPageLoadName("Product Management Page")

// Use this ID to fetch the correct product from the API
// eslint-disable-next-line
export const PRODUCT_ID = "1";

// Homebrew logging 
export const logger = store => next => action => {
  //console.log(action)
  next(action)
}

export const store = createStore(
  combineReducers({ ...reducer }),
  applyMiddleware(
    thunk,
    logger
  ));

export function App() {

    // Simulate fetching of data
    store.dispatch(pmThunk.getProduct(PRODUCT_ID))

    return <Provider store={store}>
      <ProductManagement />
    </Provider>
}

export default App;
