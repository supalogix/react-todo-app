import React from "react"
import PropTypes from "prop-types"
import * as Factory from "./factory"
import classNames from 'classnames';
import assert from "assert"
import check from "check-types"

export const DataEntry = (props) => {
    const Title = <Factory.Title {...props} />
    const Vendor = Factory.createVendor(props)
    const Tags = Factory.createTags(props)

    const replenishableClasses = {
       button: classNames({
            "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none": true,
            "bg-green-400": props.replenishable,
            "bg-gray-200": !props.replenishable
       }),
       span: classNames({
            "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200": true,
            "translate-x-5": props.replenishable,
            "translate-x-0": !props.replenishable
       })
    }

    const SaveButton = <button type="button"
            className="mt-12 flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Save
    </button>

    return <div className="max-w-lg border border-gray-100 rounded-2xl p-8">
        {Title}
        {Vendor}
        <div>
            <label className="mt-4 block text-sm font-medium text-gray-700">Status</label>
            <select 
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm rounded-md" 
                value={props.productStatus} 
                onChange={props.onStatusChanged}>
                <option value="active">Active</option>
                <option value="archived">Archive</option>
                <option value="draft">Draft</option>
            </select>
        </div>
        <div className="mt-6 flex items-center">
            <span className="text-sm font-medium text-gray-900">Replenishable</span>
            <button type="button"
                    onClick={props.onReplenishableChanged(!props.replenishable)}
                    className={replenishableClasses.button}
                    aria-pressed="false">
                <span className="sr-only">Use setting</span>
                <span aria-hidden="true"
                      className={replenishableClasses.span} />
            </button>
        </div>
        <div className="mt-6">
            <div className="text-sm font-medium text-gray-900 mb-2">Tags</div>
            {Tags}
            <button type="button"
                    onClick={props.onTagAdded}
                    className="relative top-1 flex-shrink-0 w-5 rounded-full inline-flex items-center justify-center text-light-blue-400 bg-light-blue-100 hover:bg-light-blue-200 hover:text-light-blue-500 focus:outline-none focus:bg-light-blue-500 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        {SaveButton}
    </div>
}

DataEntry.propTypes = {
    title: PropTypes.string.isRequired,
    titleStatus: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired,
    vendorStatus: PropTypes.string.isRequired,
    replenishable: PropTypes.bool.isRequired,
    productStatus: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        tagName: PropTypes.string.isRequired
    }))
}

DataEntry.defaultProps = {
    title: "",
    titleStatus: "",
    vendor: "",
    vendorStatus: "",
    replenishable: true,
    productStatus: "",
    tags: [],
    onTitleChanged: () => {},
    onVendorChanged: () => {},
    onReplenishableChanged: () => {},
    onStatusChanged: () => {},
    onTagAdded: () => {},
    onTagRemoved: () => {},
    onTagChanged: () => {}
}

export default DataEntry;