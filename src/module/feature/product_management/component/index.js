import React from "react"
import { connectAdvanced } from "react-redux"
import { ModeEnum } from "@repeat/feature/product_management/enum"
import NotStarted from "./product_data_entry/not_started"
import FetchingData from "./product_data_entry/fetching_data"
import ErrorFetchingData from "./product_data_entry/error_fetching_data"
import DataEntry from "./product_data_entry/data_entry"


export const ProductDataEntry = (props) => {
    if(props.mode === ModeEnum.NOT_STARTED)
        return <NotStarted />
    else if(props.mode === ModeEnum.FETCHING_DATA)
        return <FetchingData />
    else if(props.mode === ModeEnum.ERROR_FETCHING_DATA)
        return <ErrorFetchingData />
    else 
        return <DataEntry />
}

export const selectorFactory = dispatch => state => {
    const {
        mode
    } = state.productManagement;

    return {
        mode
    }
}

export default connectAdvanced(selectorFactory)(ProductDataEntry)