import React, {createElement as e, useMemo} from "react"
import PropTypes from "prop-types"

export const classes = {}

classes.SelectBox = "";

classes.SelectBox_Label = `
    mt-4 
    block 
    text-sm 
    font-medium 
    text-gray-700
`;

classes.SelectBox_Input = `
    mt-1 
    block 
    w-full 
    pl-3 
    pr-10 
    py-2 
    text-base 
    border-gray-300 
    focus:outline-none 
    focus:ring-light-blue-500 
    focus:border-light-blue-500 
    sm:text-sm 
    rounded-md
`

export const SelectBox = props => (<div className={classes.SelectBox}>
    <label className={classes.SelectBox_Label}>{props.title}</label>
    <select 
        className={classes.SelectBox_Input}
        value={props.value} 
        onChange={props.onChange}>
        {
            props.data.map(item => <option value={item.value}>{item.title}</option>)
        }
    </select>
</div>);

export default SelectBox;