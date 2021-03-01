import React from "react"
import { connectAdvanced } from "react-redux"

export const NotStarted = (props) => <div></div>

export default connectAdvanced(dispatch => state => ({}))(NotStarted)