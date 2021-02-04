import { render, screen } from '@testing-library/react';
import App from './App';
import * as reducer from "@repeat/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {A} from "@repeat/feature/product_management/simulation"

runTest(A)

function runTest(node, state = null, path="")
{
    const store = getStore(state)
    node.actions.forEach(action => store.dispatch(action))

    if(state)
        path += `.${node.id}`
    else
        path = node.id

    test(path, () => node.executePostcondition(store.getState()))

    node.children.forEach(child => {
        runTest(child, store.getState(), path)
    })
}

function getStore(state) 
{
    if(state)
    {
        return createStore(combineReducers({ ...reducer }), state);
    }
    else
    {
        return createStore(combineReducers({ ...reducer }));
    }
}
