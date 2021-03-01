import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export const createTagError = (tag) => {
    switch(tag.tagStatus)
    {
        case 1:
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Tag Name can not be empty</span>
            </div>
        case 2:
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Duplicate tags are not allowed.</span>
            </div>
        default:
            return null

    }
}

export const createTags = props => props.tags.map(tag => {
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