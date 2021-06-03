export const GET_PRODUCT_DETAILS = `Get Product Details`
export const getProductDetails = (id) => ({
    type: GET_PRODUCT_DETAILS,
    payload: {
        id
    }
})

export const SEND_PRODUCT_DETAILS_ERROR = `Send Product Details Error`
export const sendProductDetailsError = (message) => ({
    type: SEND_PRODUCT_DETAILS_ERROR,
    payload: {
        message
    }
})

export const SAVE_CHANGES = `Save Changes`
export const saveChanges = () => ({
    type: SAVE_CHANGES,
    payload: { }
})


export const DO_SOMETHING = `Do Something`;
export const doSomething = ({
    firstname,
    lastname,
    email
}) => ({
    type: "",
    payload: {
        firstname,
        lastname,
        email
    }
})



