import {ModeEnum} from "@app/feature/product_management/enum"
import {expect} from "chai"

export const Ab = (state) => {
    expect(state.productManagement.mode).to.equal(
        ModeEnum.FETCHING_DATA
    );
}