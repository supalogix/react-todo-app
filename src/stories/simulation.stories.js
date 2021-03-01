import {storiesOf} from "@storybook/react"
import * as reducer from "@repeat/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {A} from "@repeat/feature/product_management/simulation"
import "../index.css"
import { uniqueWorldLines, allWorldLines, getCustomerJourney } from "@repeat/shared/helper"

const stories = storiesOf("Product Management", module);

allWorldLines(A).forEach(worldLine => {
    const store = getStore(worldLine.actions);
    stories.add(worldLine.path, () => worldLine.story(store))
})

getCustomerJourney(A).forEach(simulation => {
    const journey = storiesOf(`${simulation.path}`, module)
    let actions = []
    simulation.nodes.forEach(node => {
        actions = actions.concat(node.actions)
        const store = getStore(actions);
        journey.add(`${node.id}: ${node.name}`, () => node.story(store))
    })
})

function getStore(actions)
{
    const store = createStore(combineReducers({ ...reducer }));
    actions.forEach(action => store.dispatch(action))

    return store;
}
