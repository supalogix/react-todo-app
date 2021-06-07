import * as reducer from "@app/feature/product_management/reducer"
import {createStore, combineReducers} from "redux"
import { simulations } from "@app/feature/product_management/simulation"
import { getUrlParams } from "./App"
import {expect} from "chai"

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
            let actions = [];

            for(const node of simulation)
            {
                const preconditionState = getState(actions);
                test(`${node.id}: ${node.name}`, 
                    () => node.executePrecondition(preconditionState))
                actions = actions.concat(node.actions)
            }
        })

        describe("postconditions", () => {
            let actions = [];

            for(const node of simulation)
            {
                actions = actions.concat(node.actions)
                const postconditionState = getState(actions);
                test(`${node.id}: ${node.name}`, 
                    () => node.executePostcondition(postconditionState))
            }
        })
    })
})

function getState(actions)
{
    const store = createStore(combineReducers({ ...reducer }));
    actions.forEach(action => store.dispatch(action))

    return store.getState()
}

describe("getUrlParams test", () => {
    it("verifies parsing required parameters", () => {
        //
        // arrange
        //
        const queryString = "?simulation=1&list=list1&step=Aa"

        //
        // act
        //
        const actual = getUrlParams(queryString);

        //
        // assert
        //
        const expected = {
            simulation: "1",
            list: "list1",
            step: "Aa"
        }

        expect(actual).to.deep.equal(expected)
    })
})
