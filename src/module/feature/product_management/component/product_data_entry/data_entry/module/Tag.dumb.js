import React, {createElement as e, useMemo} from "react"
import PropTypes from "prop-types"
import classNames from 'classnames';

export function TagButton(tag)
{
    const attr = { 
        button: {
            className: `
                relative 
                z-10 
                flex-shrink-0 
                ml-1 
                h-4 
                w-4 
                rounded-full 
                inline-flex 
                items-center 
                justify-center 
                text-light-blue-400 
                hover:bg-light-blue-200 
                hover:text-light-blue-500 
                focus:outline-none 
                focus:bg-light-blue-500 
                focus:text-white
            `,
            onClick: tag.onTagRemoved(tag.id), 
            type:"button"
        },
        iconContainer: {
            className: "h-2 w-2", 
            stroke: "currentColor", 
            fill: "none", 
            viewBox: "0 0 8 8"
        },
        icon: {
            strokeLinecap: "round",
            strokeWidth: "1.5",
            d: "M1 1l6 6m0-6L1 7"
        }
    };

    return e("button", attr.button, [
        e("svg", attr.iconContainer, [
            e("path", attr.icon)
        ])
    ])
}

export const getAttr = tag => ({
    container: { 
        key: tag.id,
        className: `
            mr-1 
            min-h-6 
            relative 
            inline-flex 
            rounded-full 
            items-center 
            py-0.5 
            pl-2.5 
            pr-1 
            text-sm 
            font-medium 
            bg-light-blue-100 
            text-light-blue-700
        `
    },
    textbox: {
        className: `
            absolute 
            focus:ring-0 
            p-0 
            border-none 
            bg-transparent 
            text-sm 
            font-medium 
            w-full
        `, 
        type:"text",
        defaultValue: tag.tagName,
        onChange: tag.onTagChanged(tag.id),
        onBlur: (event) => {
            if (!event.target.value) {
                tag.onTagRemoved(tag.id)
            }
        }
    }
})

export const Tag = tag => {
    const attr = useMemo(() => getAttr(tag), [tag]);

    // I am experimenting with not using jsx to improve
    // compilation speed. I am not sure if this is a good
    // or bad thing.
    return e("span", attr.container, [
        tag.tagName,
        e("input", attr.textbox),
        e(TagButton, tag)
    ]);
}

export default Tag;