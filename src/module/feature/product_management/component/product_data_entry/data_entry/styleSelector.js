import cx from "classnames"
import {createSelector} from "reselect"

export const enableReplenisableStyle = createSelector(
    state => state.productManagement.replenishable,
    replenishable => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": replenishable,
            "pde_input__button--inactive": !replenishable,
        }
    )
);

export const disableReplenishableStyle = createSelector(
    state => state.productManagement.replenishable,
    replenishable => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": !replenishable,
            "pde_input__button--inactive": replenishable,
        }
    )
);

export const styleArchived = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "archived",
            "pde_input__button--inactive": productStatus !== "archived",
        }
    )
);

export const styleDraft = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "draft",
            "pde_input__button--inactive": productStatus !== "draft",
        }
    )
);

export const styleActive = createSelector(
    state => state.productManagement.productStatus,
    productStatus => cx(
        "pde_input__button", 
        {
            "pde_input__button--active": productStatus === "active",
            "pde_input__button--inactive": productStatus !== "active",
        }
    )
);