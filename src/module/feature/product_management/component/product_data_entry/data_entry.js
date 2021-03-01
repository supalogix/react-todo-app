import React from "react"
import { connectAdvanced } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import * as Action from "../../action"
import * as Event from "../../event"
import * as Selector from "../../selector"
import {v4} from "uuid"
import cx from "classnames"
import {createSelector} from "reselect"

const createTagError = (tag) => {
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

const createTags = props => props.tags.map(tag => {
    const TagError = createTagError(tag)

    return <div key={tag.id}>
        <div className="pde_input__text">
            <input type="text" defaultValue={tag.tagName} onChange={props.onTagChanged(tag.id)} />
            {TagError}
        </div>
        <div className="pde_input__button" onClick={props.onTagRemoved(tag.id)}>Remove</div>
    </div>
})

export const createTitleError = props => {
    if(props.titleStatus === 1)
        return <div className="pde_field__error_message">
            <FontAwesomeIcon icon={faExclamationTriangle} /> 
            <span>Title cannot be empty </span>
        </div>
    else
        return null
}

export const createVendorError = props => {
    if(props.vendorStatus === 1)
        return <div className="pde_field__error_message">
            <FontAwesomeIcon icon={faExclamationTriangle} /> 
            <span>Vendor cannot be empty </span>
        </div>
    else
        return null
}

export const createTitle = props => {
    const TitleError = createTitleError(props);

    return <div className="pde_field">
        <div className="pde_field__title">Title:</div>
        <div className="pre_field__input">
            <input type="text" value={props.title} onChange={props.onTitleChanged}/>
            {TitleError}
        </div>
    </div>
}

export const createVendor = props => {
    const VendorError = createVendorError(props);

    return <div className="pde_field">
        <div className="pde_field__title">Vendor: </div>
        <div className="pre_field__input">
            <input type="text" value={props.vendor} onChange={props.onVendorChanged}/>
            {VendorError}
        </div>
    </div>
}

export const DataEntry = (props) => {
    const Title = createTitle(props)
    const Vendor = createVendor(props)
    const Tags = createTags(props)

    return <div className="pde">
        {Title}
        {Vendor}
        <div className="pde_field">
            <div className="pde_field__title">Replenishable: </div>
            <div className="pde_field__input">
                <div className={props.styles.enableReplenishable} onClick={props.onReplenishableChanged(true)}>Yes</div>
                <div className={props.styles.disableReplenishable} onClick={props.onReplenishableChanged(false)}>No</div>
            </div>
        </div>
        <div className="pde_field">
            <div className="pde_field__title">Status: </div>
            <div className="pde_field__input">
                <div className={props.styles.archived} onClick={props.onStatusChanged("archived")}>Archived</div>
                <div className={props.styles.draft} onClick={props.onStatusChanged("draft")}>Draft</div>
                <div className={props.styles.active} onClick={props.onStatusChanged("active")}>Active</div>
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

const enableReplenisableStyle = createSelector(
    state => state.productManagement.replenisable,
    replenishable => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": replenishable,
            "pde_input__button--inactive": !replenishable,
        }
    )
);

const disableReplenishableStyle = createSelector(
    state => state.productManagement.replenisable,
    replenishable => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": !replenishable,
            "pde_input__button--inactive": replenishable,
        }
    )
);

const styleArchived = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "archived",
            "pde_input__button--inactive": productStatus !== "archived",
        }
    )
);

const styleDraft = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "draft",
            "pde_input__button--inactive": productStatus !== "draft",
        }
    )
);

const styleActive = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "active",
            "pde_input__button--inactive": productStatus !== "active",
        }
    )
);

export const sfDataEntry = dispatch => state => {
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
        styles: {
            enableReplenishable: enableReplenisableStyle(state),
            disableReplenishable: disableReplenishableStyle(state),
            archived: styleArchived(state),
            draft: styleDraft(state),
            active: styleActive(state)
        },
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
        onVendorChanged: (e) => dispatch(Action.changeVendor(e.target.value)),
        onReplenishableChanged: (value) => () => dispatch(Action.changeReplenishable(value)),
        onStatusChanged: (option) => () => dispatch(Action.changeProductStatus(option)),
        onTagAdded: () => dispatch(Action.addTag(v4())),
        onTagRemoved: (id) => () => dispatch(Action.removeTag(id)),
        onTagChanged: (id) => (e) => dispatch(Action.changeTag(id, e.target.value))
    }
}
export default connectAdvanced(sfDataEntry)(DataEntry)