import React from "react"
import { render } from "@testing-library/react"
import {DataEntry} from "./data_entry.dumb"

describe("DataEntry", () => {
    it("verifies default behavior", () => {
        const { container, getByText, debug } = render(<DataEntry />)
        expect(container.querySelector("#title")).toHaveValue("");
    })

    it("verifies change in title behavior", () => {
        const { container, getByText, debug } = render(<DataEntry
            title="title"
             />)
        expect(container.querySelector("#title")).toHaveValue("title");
    })
})