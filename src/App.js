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

export function getUrlParams(queryString)
{
  const urlParams = new URLSearchParams(queryString);
  const simulation = urlParams.get("simulation");
  const list = urlParams.get("list");
  const step = urlParams.get("step");

  return {
    simulation,
    list,
    step
  }
}

export const NavBar = (props) => {
  const prevHref=`?simulation=1&list=list1&step=${props.previous}`
  const nextHref=`?simulation=1&list=list1&step=${props.next}`

  const NextButton = () => props.next ? <a href={nextHref}>Next</a> : null
  const PreviousButton = () => props.previous ? <a href={prevHref}>Previous</a> : null

  return <div>
    <div> {props.name} </div>
    <div>
      <PreviousButton />
      <NextButton />
    </div>
  </div>
}

export function App() {

  const urlParams = getUrlParams(window.location.search);

  if(urlParams.simulation)
  {
    const sortOrder = simulation.getSortOrder(urlParams.list);
    const {
      previousMap,
      nextMap
    } = simulation.getNavigationMap(sortOrder);

    const previous = previousMap[urlParams.step]
    const next = nextMap[urlParams.step]
    const { name } = simulation.list[urlParams.step]

    const actions = simulation.getActions(
      simulation.list,
      sortOrder, 
      urlParams.step);

    for(const action of actions)
    {
      store.dispatch(action);
    }

    return <Provider store={store}>
      <NavBar 
        name={name}
        previous={previous}
        next={next}
        />
      <ProductManagement />
    </Provider>
  }
  else
  {
    // Simulate fetching of data
    store.dispatch(pmThunk.getProduct(PRODUCT_ID))

    return <Provider store={store}>
      <ProductManagement />
    </Provider>
  }
}

export default App;
