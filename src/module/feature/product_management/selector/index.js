import {createSelector} from "reselect"
import { 
    ProductTitleStatusEnum,
    VendorTitleStatusEnum 
} from "../enum"

export const titleStatus = createSelector(
    state => state.productManagement.title,
    title => {
        if(title === "")
            return ProductTitleStatusEnum.ERROR_EMPTY_VALUE
        else 
            return ProductTitleStatusEnum.VALID
    }
)

export const vendorStatus = createSelector(
    state => state.productManagement.vendor,
    vendor => {
        if(vendor === "")
            return VendorTitleStatusEnum.ERROR_EMPTY_VALUE
        else 
            return VendorTitleStatusEnum.VALID
    }
)

export const tagNameCount = createSelector(
    state => state.productManagement.tagIds,
    state => state.productManagement.tagName,
    (tagIds, tagNames) => tagIds.reduce((map, id) => {
        const name = tagNames[id]

        if(name in map)
        {
            return {
                ...map,
                [name]: map[name] + 1
            }
        }
        else 
        {
            return {
                ...map,
                [name]: 1
            }
        }
    }, {})
)

export const tagStatus = createSelector(
    state => state.productManagement.tagIds,
    state => state.productManagement.tagName,
    tagNameCount,
    (tagIds, tagNames, count) => tagIds.reduce((map, id) => {
        const tagName = tagNames[id]

        if (tagName === "")
        {
            return {
                ...map,
                [id]: 1
            }
        }
        else if(count[tagName] > 1)
        {
            return {
                ...map,
                [id]: 2
            }
        }
        else
        {
            return {
                ...map,
                [id]: 0
            }
        }
    }, {})
)

export const tags = createSelector(
    state => state.productManagement.tagIds,
    state => state.productManagement.tagName,
    tagStatus,
    (tagIds, tagName, tagStatus) => tagIds.map(id => ({
       id,
       tagName: tagName[id],
       tagStatus: tagStatus[id] 
    }))
)