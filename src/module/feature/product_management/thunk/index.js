import * as Action from "@app/feature/product_management/action"
import * as Event from "@app/feature/product_management/event"


export const getProduct = (id) => async (dispatch, getState) => {
    dispatch(Action.getProductDetails(id))

    setTimeout(() => {
        dispatch(Event.receiveProductDetails({
            status: "active", // "active" | "archived" | "draft",
            title: "IPod Nano - 8GB",
            tags: [
                {
                    id: "a",
                    tagName: "Emotive"
                }, 
                {
                    id: "b",
                    tagName: "Flash Memory"
                }, 
                {
                    id: "c",
                    tagName: "MP3"
                }, 
                {
                    id: "d",
                    tagName: "Music"
                },
            ],
            replenishable: true,
            vendor: "Apple",
            id: 1,
        }))
    }, 2000)
}

export const saveProduct = () => async (dispatch, getState) => {
    dispatch(Action.saveChanges())

    // simulate saving data
    setTimeout(() => {
        dispatch(Action.confirmSavedChanges())
    }, 1000)
}