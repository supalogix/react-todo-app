import React, {createElement as e, useMemo} from "react"
import PropTypes from "prop-types"
import TagsPane from "./module/TagsPane.dumb"
import TextBox from "@app/shared/ui/TextBox.dumb"
import SelectBox from "@app/shared/ui/SelectBox.dumb"
import ToggleButton from "@app/shared/ui/ToggleButton.dumb"
import Button from "@app/shared/ui/Button.dumb"

const data = [
    {
        title: "Active",
        value: "active"
    },
    {
        title: "Archive",
        value: "archived"
    },
    {
        title: "Draft",
        value: "draft"
    },
];

export const DataEntry = (props) => {
    return <div className="max-w-lg border border-gray-100 rounded-2xl p-8">
        <TextBox
            title="Product"
            value={props.title}
            status={props.titleStatus}
            onChange={props.onTitleChanged}
            />
        <TextBox
            title="Vendor"
            value={props.vendor}
            status={props.vendorStatus}
            onChange={props.onVendorChanged}
            />
        <SelectBox
            title="Status"
            value={props.productStatus}
            onChange={props.onStatusChanged}
            data={data}
            />
        <ToggleButton
            title="Replenishable"
            isOn={props.replenishable}
            onClick={props.onReplenishableChanged}
            />
        <TagsPane 
            tags={props.tags}
            onTagChanged={props.onTagChanged}
            onTagRemoved={props.onTagRemoved}
            onTagAdded={props.onTagAdded}
         />
        <Button title="Save" />
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
    vendorStatus: 0,
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