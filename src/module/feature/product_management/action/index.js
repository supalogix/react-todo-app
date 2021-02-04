export const ProductManagement = "[Product Management]"

export const GET_PRODUCT_DETAILS = `${ProductManagement} Get Product Details`
export const getProductDetails = (id) => ({
    type: GET_PRODUCT_DETAILS,
    payload: {
        id
    }
})

export const SEND_PRODUCT_DETAILS = `${ProductManagement} Send Product Details`
export const sendProductDetails = (payload) => ({
    type: SEND_PRODUCT_DETAILS,
    payload
})

export const SEND_PRODUCT_DETAILS_ERROR = `${ProductManagement} Send Product Details Error`
export const sendProductDetailsError = (message) => ({
    type: SEND_PRODUCT_DETAILS_ERROR,
    payload: {
        message
    }
})

export const CHANGE_TITLE = `${ProductManagement} Change Title`
export const changeTitle = (title) => ({
    type: CHANGE_TITLE,
    payload: {
        title
    }
})

export const ADD_TAG = `${ProductManagement} Add Tag`
export const addTag = (tagId) => ({
    type: ADD_TAG,
    payload: {
        tagId
    }
})

export const REMOVE_TAG = `${ProductManagement} Remove Tag`
export const removeTag = (tagId) => ({
    type: REMOVE_TAG,
    payload: {
        tagId
    }
})

export const CHANGE_TAG = `${ProductManagement} Change Tag`
export const changeTag = (tagId, tagName) => ({
    type: CHANGE_TAG,
    payload: {
        tagId,
        tagName
    }
})

export const CHANGE_VENDOR = `${ProductManagement} Change Vendor`
export const changeVendor = (vendorName) => ({
    type: CHANGE_VENDOR,
    payload: {
        vendorName
    }
})

export const CHANGE_REPLENISHABLE = `${ProductManagement} Change Replenishable`
export const changeReplenishable = (value) => ({
    type: CHANGE_REPLENISHABLE,
    payload: {
        value
    }
})

export const CHANGE_PRODUCT_STATUS = `${ProductManagement} Change Product Status`
export const changeProductStatus = (value) => ({
    type: CHANGE_PRODUCT_STATUS,
    payload: {
        value
    }
})

export const SAVE_CHANGES = `${ProductManagement} Save Changes`
export const saveChanges = () => ({
    type: SAVE_CHANGES,
    payload: { }
})

export const CONFIRM_SAVED_CHANGES = `${ProductManagement} Confirm Saved Changes`
export const confirmSavedChanges = () => ({
    type: CONFIRM_SAVED_CHANGES,
    payload: { }
})