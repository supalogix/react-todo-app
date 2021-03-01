export const Type = { }

Type.TitleChanged = "Title Changed"
export const titleChanged = (title) => ({
    type: Type.TitleChanged,
    payload: {
        title
    }
})

Type.VendorChanged = "Vendor Changed"
export const vendorChanged = (vendorName) => ({
    type: Type.VendorChanged,
    payload: {
        vendorName
    }
})

Type.TagRemoved = "Tag Removed"
export const tagRemoved = (tagId) => ({
    type: Type.TagRemoved,
    payload: {
        tagId
    }
})

Type.TagAdded = "Tag Added"
export const tagAdded = (tagId) => ({
    type: Type.TagAdded,
    payload: {
        tagId
    }
})

Type.TagChanged = "Tag Changed"
export const tagChanged = (tagId, tagName) => ({
    type: Type.TagChanged,
    payload: {
        tagId,
        tagName
    }
})

Type.ReplenishableChanged = "Replenishable Changed"
export const replenishableChanged = (value) => ({
    type: Type.ReplenishableChanged,
    payload: {
        value
    }
})

Type.ProductStatusChanged = "Product Status Changed"
export const productStatusChanged = (value) => ({
    type: Type.ProductStatusChanged,
    payload: {
        value
    }
})

Type.ReceiveProductDetails = "Receive Product Details"
export const receiveProductDetails = payload => ({
    type: Type.ReceiveProductDetails,
    payload
})