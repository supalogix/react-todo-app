import React from "react"
import ProductManagement from "@app/feature/product_management/component"
import {ModeEnum} from "@app/feature/product_management/enum"
import {Provider} from "react-redux"
import * as Event from "@app/feature/product_management/event"
import {expect} from "chai"
import {selectorFactory} from "@app/feature/product_management/component/product_data_entry/data_entry/data_entry.smart"

export const Ac = {
    id: "Ac",
    name: "Recieve Product Details",
    description: [ ],
    acceptanceCriteria: [
        "PM-013"
    ],
    actions: [
        Event.receiveProductDetails({
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
    executePostcondition,
    story: (store) => {
        return <Provider store={store}>
            <ProductManagement />
        </Provider>
    },
}

export function executePostcondition(state)
{
    //
    // Reducers
    //
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

    //
    // Selector Factory
    //
    const props = selectorFactory(()=>{})(state);

    expect(props.id).to.equal(1)
    expect(props.mode).to.equal(2)
    expect(props.title).to.equal("IPod Nano - 8GB")
    expect(props.titleStatus).to.equal(0)
    expect(props.vendor).to.equal("Apple")
    expect(props.vendorStatus).to.equal(0)
    expect(props.replenishable).to.equal(true)
    expect(props.productStatus).to.equal("active")
    expect(props.tags).to.deep.equal([
        { id: 'a', tagName: 'Emotive', tagStatus: 0 },
        { id: 'b', tagName: 'Flash Memory', tagStatus: 0 },
        { id: 'c', tagName: 'MP3', tagStatus: 0 },
        { id: 'd', tagName: 'Music', tagStatus: 0 }            
    ])
}