import {storiesOf} from "@storybook/react"
import * as reducer from "@repeat/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {A} from "@repeat/feature/product_management/simulation"
import "../index.css"

const stories = storiesOf("Product Management", module);

runStory(A)

function runStory(node, state = null, path="")
{
    const store = getStore(state)
    node.actions.forEach(action => store.dispatch(action))

    if(state)
        path += `.${node.id}`
    else
        path = node.id

    stories.add(path, () => node.story(store))

    node.children.forEach(child => {
        runStory(child, store.getState(), path)
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

