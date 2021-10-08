import React from "react"

const tailwind = {}
tailwind.Button = `
    mt-12 
    flex 
    items-center 
    px-6 
    py-2 
    border 
    border-transparent 
    text-sm 
    font-medium 
    rounded-md 
    shadow-sm 
    text-white 
    bg-green-500 
    hover:bg-green-600 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-green-500
`
export const Button = props => {
    return <button type="button"
            className={tailwind.Button}>
        {props.title}
    </button>
}

export default Button;