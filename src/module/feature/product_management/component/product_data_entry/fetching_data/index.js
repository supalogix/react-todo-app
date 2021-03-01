import React from "react"
import { connectAdvanced } from "react-redux"

export const FetchingData = (props) => <div><h1>Fetching Data</h1></div>
export default connectAdvanced(dispatch => state => ({}))(FetchingData)