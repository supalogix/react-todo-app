import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';

export const createTagError = (tag) => {
    switch(tag.tagStatus)
    {
        case 1:
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Tag Name can not be empty</span>
            </div>
        case 2:
            return <div className="pde_field__error_message">
                <FontAwesomeIcon icon={faExclamationTriangle} /> 
                <span>Duplicate tags are not allowed.</span>
            </div>
        default:
            return null

    }
}

export const createTags = props => props.tags.map(tag => {
    const handleBlur = (event) => {
        if (!event.target.value) {
            props.onTagRemoved(tag.id)
        }
    }
    return <span
        key={tag.id}
        className="mr-1 min-h-6 relative inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-light-blue-100 text-light-blue-700">
        {tag.tagName}
        <input className="absolute focus:ring-0 p-0 border-none bg-transparent text-sm font-medium w-full" type="text" defaultValue={tag.tagName} onChange={props.onTagChanged(tag.id)} onBlur={handleBlur} />
  <button onClick={props.onTagRemoved(tag.id)} type="button"
          className="relative z-10 flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-light-blue-400 hover:bg-light-blue-200 hover:text-light-blue-500 focus:outline-none focus:bg-light-blue-500 focus:text-white">
    <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
      <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"/>
    </svg>
  </button>
</span>
})

export const createTitle = props => {
    const hasError = props.titleStatus === 1;
    const inputCssClasses = classNames({
        'block w-full pr-10 sm:text-sm rounded-md': true,
        'shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 border-gray-300': !hasError,
        'border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-500': hasError
    });
    const errorCssClasses = classNames({
        'mt-1 text-sm text-red-600': true,
        'hidden': !hasError
    });

    return <div>
        <label className="block text-sm font-medium text-gray-700">Product</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text"
                   value={props.title}
                   onChange={props.onTitleChanged}
                   className={inputCssClasses}
                     aria-invalid="true" aria-describedby="email-error" />
            {hasError ? <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"/>
                    </svg>
                </div> : ''}
        </div>
        <p className={errorCssClasses}>Product Name cannot be empty</p>
    </div>
}

export const createVendor = props => {
    const hasError = props.vendorStatus === 1;
    const inputCssClasses = classNames({
        'block w-full pr-10 sm:text-sm rounded-md': true,
        'shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 border-gray-300': !hasError,
        'border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-500': hasError
    });
    const errorCssClasses = classNames({
        'mt-1 text-sm text-red-600': true,
        'hidden': !hasError
    });

    return <div className='mt-4'>
        <label className="block text-sm font-medium text-gray-700">Vendor</label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input type="text"
                   value={props.vendor}
                   onChange={props.onVendorChanged}
                   className={inputCssClasses}
                   aria-invalid="true" aria-describedby="email-error" />
            {hasError ? <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"/>
                </svg>
            </div> : ''}
        </div>
        <p className={errorCssClasses}>Vendor cannot be empty</p>
    </div>
}