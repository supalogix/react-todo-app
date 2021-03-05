import React from "react"
import { connectAdvanced } from "react-redux"
import * as Event from "../../../event"
import * as Selector from "../../../selector"
import {v4} from "uuid"
import {DataEntry} from "./data_entry.dumb"

export const selectorFactory = dispatch => state => {
    const {
        errorMessage,
        id,
        mode,
        title,
        vendor,
        replenishable,
        productStatus,
    } = state.productManagement;

    return {
        errorMessage,
        id,
        mode,
        title,
        titleStatus: Selector.titleStatus(state),
        vendor,
        vendorStatus: Selector.vendorStatus(state),
        replenishable,
        productStatus,
        tags: Selector.tags(state),
        onTitleChanged: (e) => dispatch(Event.titleChanged(e.target.value)),
        onVendorChanged: (e) => dispatch(Event.vendorChanged(e.target.value)),
        onReplenishableChanged: (value) => () => dispatch(Event.replenishableChanged(value)),
        onStatusChanged: (e) => dispatch(Event.productStatusChanged(e.target.value)),
        onTagAdded: () => dispatch(Event.tagAdded(v4())),
        onTagRemoved: (id) => () => dispatch(Event.tagRemoved(id)),
        onTagChanged: (id) => (e) => dispatch(Event.tagChanged(id, e.target.value))
    }
}

export default connectAdvanced(selectorFactory)(DataEntry)