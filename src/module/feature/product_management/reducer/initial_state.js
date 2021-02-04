import {ModeEnum} from "../enum"

export const initialState = {
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

export default initialState
