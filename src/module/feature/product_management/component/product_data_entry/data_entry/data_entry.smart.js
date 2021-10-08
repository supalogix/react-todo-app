import React, {createElement as e} from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Event from "../../../event"
import * as Selector from "../../../selector"
import {v4} from "uuid"
import {DataEntry} from "./data_entry.dumb"

export const SmartDataEntry = () => {
    const productManagement = useSelector(state => state.productManagement);
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const {
        errorMessage,
        id,
        mode,
        title,
        vendor,
        replenishable,
        productStatus,
    } = productManagement;

    const props = {
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

    return e(DataEntry, props);
}

export default SmartDataEntry;