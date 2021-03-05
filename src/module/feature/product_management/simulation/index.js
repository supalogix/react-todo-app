import React from "react"
import ProductManagement from "@app/feature/product_management/component"
import {ModeEnum} from "@app/feature/product_management/enum"
import {Provider} from "react-redux"
import * as Event from "@app/feature/product_management/event"
import {expect} from "chai"
import {Aa} from "./step/Aa"
import {Ab} from "./step/Ab"
import {Ac} from "./step/Ac"

export const Ad = {
    id: "Ad",
    name: "Change title to empty string",
    description: [

    ],
    acceptanceCriteria: [
        "PM-001"
    ],
    actions: [
        Event.titleChanged("")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
    },
    executePostcondition: (state) => {
        expect(state.productManagement.title).to.equal(
            ""
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Ae = {
    id: "Ae",
    name: "Change vendor to empty string",
    description: [

    ],
    acceptanceCriteria: [
        "PM-004"
    ],
    actions: [
        Event.vendorChanged("")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
    },
    executePostcondition: (state) => {
        expect(state.productManagement.vendor).to.equal(
            ""
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Af = {
    id: "Af",
    name: "Set Replenishable to false",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Event.replenishableChanged(false)
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
    },
    executePostcondition: (state) => {
        expect(state.productManagement.replenishable).to.equal(
            false
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Ag = {
    id: "Ag",
    name: "Set Product to Draft",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Event.productStatusChanged("draft")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );

    },
    executePostcondition: (state) => {
        expect(state.productManagement.productStatus).to.equal(
            "draft"
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Ah = {
    id: "Ah",
    name: "Change first tag to 'Tag 1'",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Event.tagChanged("a", "Tag 1")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );

    },
    executePostcondition: (state) => {
        expect(state.productManagement.tagName.a).to.equal(
            "Tag 1"
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Ai = {
    id: "Ai",
    name: "Change first tag to empty string",
    description: [
    ],
    acceptanceCriteria: [
        "PM-002"
    ],
    actions: [
        Event.tagChanged("a", "")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
    },
    executePostcondition: (state) => {
        expect(state.productManagement.tagName.a).to.equal(
            ""
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Aj = {
    id: "Aj",
    name: "Change first tag to 'Flash Memory'",
    description: [

    ],
    acceptanceCriteria: [
        "PM-003"
    ],
    actions: [
        Event.tagChanged("a", "Flash Memory")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );

    },
    executePostcondition: (state) => {
        expect(state.productManagement.tagName.a).to.equal(
            "Flash Memory"
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Ak = {
    id: "Ak",
    name: "Add a new tag",
    description: [

    ],
    acceptanceCriteria: [
        "PM-010"
    ],
    actions: [
        Event.tagAdded("l")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );

    },
    executePostcondition: (state) => {
        expect(state.productManagement.tagName.l).to.equal(
            ""
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Al = {
    id: "Al",
    name: "Remove first tag",
    description: [

    ],
    acceptanceCriteria: [
        "PM-011"
    ],
    actions: [
        Event.tagRemoved("a")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
    },
    executePostcondition: (state) => {

    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const Am = {
    id: "Am",
    name: "Change title to 'Some Title'",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Event.titleChanged("Some Title")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );

    },
    executePostcondition: (state) => {
        expect(state.productManagement.title).to.equal(
            "Some Title"
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export const getAllActions = simulation => simulation.reduce((actions, node) => {
    return actions.concat(node.actions)
})

export const scenario1 = [Aa, Ab, Ac, Ad, Am, Al];
export const scenario2 = [Aa, Ab, Ac, Ae, Af, Ag, Ah, Ai];
export const scenario3 = [Aa, Ab, Ac, Aj, Ak];

export const scenarios = {
    scenario1,
    scenario2,
    scenario3,
}

export const simulations = [
    scenario1,
    scenario2,
    scenario3
];
