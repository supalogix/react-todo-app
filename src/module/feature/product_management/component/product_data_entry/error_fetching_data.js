import React from "react"
import { connectAdvanced } from "react-redux"

export const ErrorFetchingData = (props) => <div>
    <h1>Error Fetching Data</h1>
    <p>{props.errorMessage}</p>
</div>

export default connectAdvanced(dispatch => state => ({}))(ErrorFetchingData)