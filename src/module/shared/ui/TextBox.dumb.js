import React, {createElement as e} from "react"
import classNames from 'classnames';

export const TextBoxErrorIcon = ({hasError}) => {
    if(hasError)
    {
        return <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"/>
            </svg>
        </div>
    }
    else
    {
        return null;
    }
}

const tailwind = {}
tailwind.TextBox_Input = `
    block 
    w-full 
    pr-10 
    sm:text-sm 
    rounded-md
`

tailwind.TextBox_Input__NoError = `
    shadow-sm 
    focus:ring-light-blue-500 
    focus:border-light-blue-500 
    border-gray-300
`

tailwind.TextBox_Input__Error = `
    border-red-300 
    text-red-900 
    focus:outline-none 
    focus:ring-red-500 
    focus:border-red-500
`

export const TextBoxInput = (props) => {
    const inputCssClasses = classNames({
        [tailwind.TextBox_Input]: true,
        [tailwind.TextBox_Input__NoError]: !props.hasError,
        [tailwind.TextBox_Input__Error]: props.hasError
    });

    return <input 
        id="product__input"
        data-testid="title"
        type="text"
        value={props.title}
        onChange={props.onChange}
        className={inputCssClasses}
        aria-invalid="true" 
        aria-describedby="email-error" 
    />;
}

export const TitleErrorText = (props) => {
    const errorCssClasses = classNames({
        'mt-1 text-sm text-red-600': true,
        'hidden': !props.hasError
    });

    return <p className={errorCssClasses}>Product Name cannot be empty</p>
}

export const TextBox = (props) => {
    const hasError = props.status === 1;

    return <div id="product">
        <label className="block text-sm font-medium text-gray-700">{props.title}</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <TextBoxInput
                title={props.value}
                onChange={props.onChange}
                hasError={props.hasError}
                />
            <TextBoxErrorIcon
                hasError={hasError}
                />
        </div>
        <TitleErrorText 
            hasError={hasError}
            />
    </div>
}

export default TextBox