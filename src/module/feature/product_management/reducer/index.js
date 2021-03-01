import initialState from "./initial_state"
import produce from "immer"
import * as Action from "../action"
import * as Event from "../event"
import { ModeEnum } from "../enum"

export const productManagement = produce((draft, action) => {
    switch(action.type)
    {
        case Event.Type.TitleChanged:
            draft.title = action.payload.title
            break;

        case Event.Type.VendorChanged:
            draft.vendor = action.payload.vendorName
            break;
        
        case Event.Type.TagRemoved:
            const index = draft.tagIds.indexOf(action.payload.tagId)
            draft.tagIds.splice(index, 1)
            break;
        
        case Event.Type.TagAdded:
            draft.tagIds.push(action.payload.tagId);
            draft.tagName[action.payload.tagId] = "";
            break;
        
        case Event.Type.TagChanged:
            draft.tagName[action.payload.tagId] = action.payload.tagName
            break;

        case Action.CHANGE_REPLENISHABLE:
            draft.replenishable = action.payload.value
            break;

        case Action.CHANGE_PRODUCT_STATUS:
            draft.productStatus = action.payload.value
            break;

        case Action.GET_PRODUCT_DETAILS:
            draft.mode = ModeEnum.FETCHING_DATA
            break;

        case Action.SEND_PRODUCT_DETAILS_ERROR:
            draft.mode = ModeEnum.ERROR_FETCHING_DATA
            draft.errorMessage = action.payload.message
            break;

        case Action.SEND_PRODUCT_DETAILS:
            draft.id = action.payload.id
            draft.title = action.payload.title
            draft.vendor = action.payload.vendor
            draft.productStatus = action.payload.status
            draft.replenishable = action.payload.replenishable
            draft.tagIds = []
            draft.mode = ModeEnum.EDITING_DATA
            action.payload.tags.forEach(tag => {
                draft.tagIds.push(tag.id)
                draft.tagName[tag.id] = tag.tagName
            })
            break;
    }
}, initialState)