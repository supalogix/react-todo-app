import React from "react"
import { connectAdvanced } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ModeEnum } from "@repeat/feature/product_management/enum"
import * as Action from "../action"
import * as Selector from "../selector"
import {v4} from "uuid"
import cx from "classnames"

export const ProductDataEntry = (props) => {
    if(props.mode === ModeEnum.NOT_STARTED)
        return <div></div>

    if(props.mode === ModeEnum.FETCHING_DATA)
        return <div><h1>Fetching Data</h1></div>
        
    if(props.mode === ModeEnum.ERROR_FETCHING_DATA)
        return <div>
            <h1>Error Fetching Data</h1>
            <p>{props.errorMessage}</p>
        </div>

    const TitleError = () => {
        if(props.titleStatus === 1)
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Title cannot be empty </span>
            </div>
        else
            return null
    } 

    const VendorError = () => {
        if(props.vendorStatus === 1)
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Vendor cannot be empty </span>
            </div>
        else
            return null
    } 

    const Tags = props.tags.map(tag => {
        const TagError = () => {
            if(tag.tagStatus === 1)
                return <div className="pde_field__error_message">
                    <FontAwesomeIcon icon={faExclamationTriangle} /> 
                    <span>Tag Name can not be empty</span>
                </div>
            else if (tag.tagStatus === 2)
                return <div className="pde_field__error_message">
                    <FontAwesomeIcon icon={faExclamationTriangle} /> 
                    <span>Duplicate tags are not allowed.</span>
                </div>
            else
                return null
        }

        return <div key={tag.id}>
            <div className="pde_input__text">
                <input type="text" defaultValue={tag.tagName} onChange={props.onTagChanged(tag.id)} />
                <TagError />
            </div>
            <div className="pde_input__button" onClick={props.onTagRemoved(tag.id)}>Remove</div>
        </div>
    })

    const styleEnableReplenishable = cx(
        "pde_input__button", 
        {
            "pde_input__button--active": props.replenishable,
            "pde_input__button--inactive": !props.replenishable,
        }
    );

    const styleDisableReplenishable = cx(
        "pde_input__button", 
        {
            "pde_input__button--active": !props.replenishable,
            "pde_input__button--inactive": props.replenishable,
        }
    )

    const styleArchived = cx(
        "pde_input__button", 
        {
            "pde_input__button--active": props.productStatus === "archived",
            "pde_input__button--inactive": props.productStatus !== "archived",
        }
    )
    const styleDraft = cx(
        "pde_input__button", 
        {
            "pde_input__button--active": props.productStatus === "draft",
            "pde_input__button--inactive": props.productStatus !== "draft",
        }
    )

    const styleActive = cx(
        "pde_input__button", 
        {
            "pde_input__button--active": props.productStatus === "active",
            "pde_input__button--inactive": props.productStatus !== "active",
        }
    )

    return <div className="pde">
        <div className="pde_field">
            <div className="pde_field__title">Title:</div>
            <div className="pre_field__input">
                <input type="text" value={props.title} onChange={props.onTitleChanged}/>
                <TitleError />
            </div>
        </div>
        <div className="pde_field">
            <div className="pde_field__title">Vendor: </div>
            <div className="pre_field__input">
                <input type="text" value={props.vendor} onChange={props.onVendorChanged}/>
                <VendorError />
            </div>
        </div>
        <div className="pde_field">
            <div className="pde_field__title">Replenishable: </div>
            <div className="pde_field__input">
                <div className={styleEnableReplenishable} onClick={props.onReplenishableChanged(true)}>Yes</div>
                <div className={styleDisableReplenishable} onClick={props.onReplenishableChanged(false)}>No</div>
            </div>
        </div>
        <div className="pde_field">
            <div className="pde_field__title">Status: </div>
            <div className="pde_field__input">
                <div className={styleArchived} onClick={props.onStatusChanged("archived")}>Archived</div>
                <div className={styleDraft} onClick={props.onStatusChanged("draft")}>Draft</div>
                <div className={styleActive} onClick={props.onStatusChanged("active")}>Active</div>
            </div>
        </div>
        <div className="pde_field">
            <div className="pde_field__title">Tags: </div>
            <div className="pde_field__input">
                {Tags}
                <div className="pde_input__button" onClick={props.onTagAdded}>Add</div>
            </div>
        </div>
        <div className="pde_action">
            <div className="pde_input__button">Save</div>
        </div>
    </div>
}

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
        onTitleChanged: (e) => dispatch(Action.changeTitle(e.target.value)),
        onVendorChanged: (e) => dispatch(Action.changeVendor(e.target.value)),
        onReplenishableChanged: (value) => () => dispatch(Action.changeReplenishable(value)),
        onStatusChanged: (option) => () => dispatch(Action.changeProductStatus(option)),
        onTagAdded: () => dispatch(Action.addTag(v4())),
        onTagRemoved: (id) => () => dispatch(Action.removeTag(id)),
        onTagChanged: (id) => (e) => dispatch(Action.changeTag(id, e.target.value))
    }
}

export default connectAdvanced(selectorFactory)(ProductDataEntry)