import React from "react"
import ProductManagement from "@app/feature/product_management/component"
import {ModeEnum} from "@app/feature/product_management/enum"
import {Provider} from "react-redux"
import * as Action from "../../action"
import {expect} from "chai"

export const Ab = {
    id: "Ab",
    name: "Get Product Details",
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
}