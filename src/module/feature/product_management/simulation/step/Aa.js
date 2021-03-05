import React from "react"
import ProductManagement from "@app/feature/product_management/component"
import {ModeEnum} from "@app/feature/product_management/enum"
import {Provider} from "react-redux"
import {expect} from "chai"

export const Aa = {
    id: "Aa",
    name: "Enter Product Data Entry Page",
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
}