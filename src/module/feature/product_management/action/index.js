export const ProductManagement = "[Product Management]";

export const GET_PRODUCT_DETAILS = `${ProductManagement} Get Product Details`
export const getProductDetails = (id) => ({
    type: GET_PRODUCT_DETAILS,
    payload: {
        id
    }
})

export const SEND_PRODUCT_DETAILS_ERROR = `${ProductManagement} Send Product Details Error`
export const sendProductDetailsError = (message) => ({
    type: SEND_PRODUCT_DETAILS_ERROR,
    payload: {
        message
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