import {storiesOf} from "@storybook/react"
import * as reducer from "@app/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {simulations} from "@app/feature/product_management/simulation"
import "../index.css"


const getPath = simulation => {
    let path = "";

    simulation.forEach(world => {
        path += world.id + "."
    })

    return path.slice(0, path.length-1)
}

simulations.forEach(simulation => {
    const path = getPath(simulation)

    const journey = storiesOf(path, module)
    let actions = []

    simulation.forEach(node => {
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