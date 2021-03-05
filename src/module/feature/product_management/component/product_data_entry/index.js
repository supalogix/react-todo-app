import React from "react"
import { connectAdvanced } from "react-redux"
import { ModeEnum } from "@app/feature/product_management/enum"
import NotStarted from "./not_started"
import FetchingData from "./fetching_data"
import ErrorFetchingData from "./error_fetching_data"
import DataEntry from "./data_entry/data_entry.smart"

export const ProductDataEntry = (props) => {
    switch(props.mode)
    {
        case ModeEnum.NOT_STARTED:
            return <props.NotStarted />
        case ModeEnum.FETCHING_DATA:
            return <props.FetchingData />
        case ModeEnum.ERROR_FETCHING_DATA:
            return <props.ErrorFetchingData />
        default:
            return <props.DataEntry />

    }
}

export const selectorFactory = dispatch => state => {
    const {
        mode
    } = state.productManagement;

    return {
        mode,
        NotStarted,
        FetchingData,
        ErrorFetchingData,
        DataEntry
    }
}

export default connectAdvanced(selectorFactory)(ProductDataEntry)