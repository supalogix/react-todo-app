import React from "react"
import ProductManagement from "@repeat/feature/product_management/component"
import {ModeEnum} from "@repeat/feature/product_management/enum"
import {Provider} from "react-redux"
import * as Action from "../action"
import {expect} from "chai"

const attachWorld = (parent, child) => {
    parent.children.push(child)
}

export const A = {
    id: "A",
    name: "Start Managing Product",
    description: [

    ],
    acceptanceCriteria: [
        "PM-009"
    ],
    actions: [
    ],
    executePrecondition: (state) => {
    },
    executePostcondition: (state) => {
        expect(state).to.deep.equal({
            productManagement: {
                errorMessage: "",
                id: "",
                mode: ModeEnum.NOT_STARTED,
                productStatus: "active",
                replenishable: true,
                title: "",
                tagIds: [],
                tagName: {},
                vendor: "",
            }
        })
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

export const B = {
    id: "B",
    name: "",
    description: [
    ],
    acceptanceCriteria: [
        "PM-005"
    ],
    actions: [
        Action.getProductDetails(1),
    ],
    executePrecondition: (state) => {

    },
    executePostcondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.FETCHING_DATA
        );
    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

export const C = {
    id: "C",
    name: "",
    description: [ ],
    acceptanceCriteria: [
        "PM-013"
    ],
    actions: [
        Action.sendProductDetails({
            status: "active", // "active" | "archived" | "draft",
            title: "IPod Nano - 8GB",
            tags: [
                {
                    id: "a",
                    tagName: "Emotive"
                }, 
                {
                    id: "b",
                    tagName: "Flash Memory"
                }, 
                {
                    id: "c",
                    tagName: "MP3"
                }, 
                {
                    id: "d",
                    tagName: "Music"
                },
            ],
            replenishable: true,
            vendor: "Apple",
            id: 1,
        })
    ],
    executePrecondition: (state) => { },
    executePostcondition: (state) => {
        expect(state.productManagement.mode).to.equal(
            ModeEnum.EDITING_DATA
        );
        expect(state.productManagement.productStatus).to.equal(
            "active"
        );
        expect(state.productManagement.title).to.equal(
            "IPod Nano - 8GB"
        );
        expect(state.productManagement.vendor).to.equal(
            "Apple"
        );
        expect(state.productManagement.replenishable).to.equal(
            true
        );
        expect(state.productManagement.tagIds).to.deep.equal([
            "a",
            "b",
            "c",
            "d"
        ]);
        expect(state.productManagement.tagName).to.deep.equal({
            "a": "Emotive",
            "b": "Flash Memory",
            "c": "MP3",
            "d": "Music"
        });

    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

export const D = {
    id: "D",
    name: "",
    description: [

    ],
    acceptanceCriteria: [
        "PM-001"
    ],
    actions: [
        Action.changeTitle("")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const E = {
    id: "E",
    name: "",
    description: [

    ],
    acceptanceCriteria: [
        "PM-004"
    ],
    actions: [
        Action.changeVendor("")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const F = {
    id: "F",
    name: "",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Action.changeReplenishable(false)
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const G = {
    id: "G",
    name: "",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Action.changeProductStatus("draft")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const H = {
    id: "H",
    name: "",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Action.changeTag("a", "Tag 1")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const I = {
    id: "I",
    name: "",
    description: [
    ],
    acceptanceCriteria: [
        "PM-002"
    ],
    actions: [
        Action.changeTag("a", "")
    ],
    executePrecondition: (state) => {
        expect(state.productManagement.tagName.a).to.equal(
            ""
        );
    },
    executePostcondition: (state) => {

    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

export const J = {
    id: "J",
    name: "",
    description: [

    ],
    acceptanceCriteria: [
        "PM-003"
    ],
    actions: [
        Action.changeTag("a", "Flash Memory")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const K = {
    id: "K",
    name: "",
    description: [

    ],
    acceptanceCriteria: [
        "PM-010"
    ],
    actions: [
        Action.addTag("l")
    ],
    executePrecondition: (state) => {

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
    children: []
}

export const L = {
    id: "L",
    name: "",
    description: [

    ],
    acceptanceCriteria: [
        "PM-011"
    ],
    actions: [
        Action.removeTag("a")
    ],
    executePrecondition: (state) => {

    },
    executePostcondition: (state) => {

    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

export const M = {
    id: "M",
    name: "",
    description: [

    ],
    acceptanceCriteria: [

    ],
    actions: [
        Action.changeTitle("Some Title")
    ],
    executePrecondition: (state) => {

    },
    executePostcondition: (state) => {

    },
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
    children: []
}

attachWorld(A, B)
    attachWorld(B, C)
        attachWorld(C, D)
            attachWorld(D, M)
        attachWorld(C, E)
        attachWorld(C, F)
        attachWorld(C, G)
        attachWorld(C, H)
        attachWorld(C, I)
        attachWorld(C, J)
        attachWorld(C, K)
        attachWorld(C, L)
