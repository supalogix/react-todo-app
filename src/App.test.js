import * as reducer from "@app/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import {simulations} from "@app/feature/product_management/simulation"

const getPath = simulation => {
    let path = "";

    simulation.forEach(world => {
        path += world.id + "."
    })

    return path.slice(0, path.length-1)
}

simulations.forEach(simulation => {
    const path = getPath(simulation)

    describe(`${path}`, () => {
        describe("preconditions", () => {
            let actions = []
            simulation.forEach(node => {
                const preconditionState = getState(actions);
                test(`${node.id}: ${node.name}`, 
                    () => node.executePrecondition(preconditionState))
                actions = actions.concat(node.actions)
            })
        })

        describe("postconditions", () => {
            let actions = []
            simulation.forEach(node => {
                actions = actions.concat(node.actions)
                const postconditionState = getState(actions);
                test(`${node.id}: ${node.name}`, 
                    () => node.executePostcondition(postconditionState))
            })
        })
    })
})

function getState(actions)
{
    const store = createStore(combineReducers({ ...reducer }));
    actions.forEach(action => store.dispatch(action))

    return store.getState()
}
