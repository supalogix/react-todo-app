import React from "react"
import { connectAdvanced } from "react-redux"
import * as Action from "../../../action"
import * as Event from "../../../event"
import * as Selector from "../../../selector"
import {v4} from "uuid"
import PropTypes from "prop-types"
import * as Factory from "./factory"
import * as StyleSelector from "./styleSelector"

export const DataEntry = (props) => {
    const Title = Factory.createTitle(props)
    const Vendor = Factory.createVendor(props)
    const Tags = Factory.createTags(props)

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

DataEntry.propTypes = {
    /**
     * Title
     */
    title: PropTypes.string.isRequired,
    /**
     * Title Status
     */
    titleStatus: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired,
    vendorStatus: PropTypes.string.isRequired,
    replenishable: PropTypes.bool.isRequired,
    productStatus: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        tagName: PropTypes.string.isRequired
    }))
}

DataEntry.defaultProps = {
    onTitleChanged: () => {},
    onVendorChanged: () => {},
    onReplenishableChanged: () => {},
    onStatusChanged: () => {},
    onTagAdded: () => {},
    onTagRemoved: () => {},
    onTagChanged: () => {}
}

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
            enableReplenishable: StyleSelector.enableReplenisableStyle(state),
            disableReplenishable: StyleSelector.disableReplenishableStyle(state),
            archived: StyleSelector.styleArchived(state),
            draft: StyleSelector.styleDraft(state),
            active: StyleSelector.styleActive(state)
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
        onVendorChanged: (e) => dispatch(Event.changeVendor(e.target.value)),
        onReplenishableChanged: (value) => () => dispatch(Action.changeReplenishable(value)),
        onStatusChanged: (option) => () => dispatch(Action.changeProductStatus(option)),
        onTagAdded: () => dispatch(Action.tagAdded(v4())),
        onTagRemoved: (id) => () => dispatch(Event.tagRemoved(id)),
        onTagChanged: (id) => (e) => dispatch(Action.changeTag(id, e.target.value))
    }
}
export default connectAdvanced(sfDataEntry)(DataEntry)