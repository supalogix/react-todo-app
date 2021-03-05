import React from "react"
import {Provider} from "react-redux"

const createPage = (type) => (store) => {
    switch(type)
    {
        case "ProductManagement":
            return <Provider store={store}>
                <ProductManagement />
            </Provider>

    }
}