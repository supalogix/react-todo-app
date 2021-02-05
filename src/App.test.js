import { render, screen } from '@testing-library/react';
import App from './App';
import * as reducer from "@repeat/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {A} from "@repeat/feature/product_management/simulation"
import { uniqueWorldLines, allWorldLines } from "@repeat/shared/helper"

allWorldLines(A).forEach(node => {
    const state = getState(node.actions)
    test(node.path, () => node.executePostcondition(state))
})

function getState(actions)
{
    const store = createStore(combineReducers({ ...reducer }));
    actions.forEach(action => store.dispatch(action))

    return store.getState()
}
