import React, {createElement as e, useMemo} from "react"
import PropTypes from "prop-types"
import Tag from "./Tag.dumb"
import Tags from "./Tags.dumb"

export const TagsPane = props => {
    return <div className="mt-6">
        <Tags
            data={props.tags}
            renderItem={tag => <Tag 
                {...tag}
                onTagChanged={props.onTagChanged}
                onTagRemoved={props.onTagRemoved}
                    />}
        />
        <button type="button"
                onClick={props.onTagAdded}
                className="relative top-1 flex-shrink-0 w-5 rounded-full inline-flex items-center justify-center text-light-blue-400 bg-light-blue-100 hover:bg-light-blue-200 hover:text-light-blue-500 focus:outline-none focus:bg-light-blue-500 focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
}

export default TagsPane;