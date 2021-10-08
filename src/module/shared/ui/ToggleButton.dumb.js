import React, {createElement as e, useMemo} from "react"
import classNames from 'classnames';


export const getClasses = (isOn) => ({
    button: classNames({
        "ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none": true,
        "bg-green-400": isOn,
        "bg-gray-200": !isOn
    }),
    span: classNames({
        "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200": true,
        "translate-x-5": isOn,
        "translate-x-0": !isOn
    })
})

export const ToggleButton = props => {
    const __classes = useMemo(
        () => getClasses(props.isOn),
        [ props.isOn ]
    );

   return <div className="mt-6 flex items-center">
        <span className="text-sm font-medium text-gray-900">{props.title}</span>
        <button type="button"
                onClick={props.onClick(!props.isOn)}
                className={__classes.button}
                aria-pressed="false">
            <span className="sr-only">Use setting</span>
            <span aria-hidden="true"
                    className={__classes.span} />
        </button>
    </div>
}

export default ToggleButton;