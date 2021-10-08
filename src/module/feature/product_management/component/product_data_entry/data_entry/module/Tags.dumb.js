import React, {createElement as e} from "react"

export const Tags = ({data, renderItem}) => {
    return <React.Fragment>
        <div className="text-sm font-medium text-gray-900 mb-2">Tags</div>
        {
            data.map(item => (renderItem(item)))
        }
    </React.Fragment>
}

export default Tags;