import React from "react"
import { render } from "@testing-library/react"
import {DataEntry} from "./data_entry.dumb"

describe("DataEntry", () => {
    it("verifies default behavior", () => {
        const { getByTestId, debug } = render(<DataEntry />)

        expect(getByTestId("title")).toHaveValue("");
    })

    it("verifies change in title behavior", () => {
        const props = {
            title: "title"
        }

        const { getByTestId, debug } = render(<DataEntry {...props} />);

        expect(getByTestId("title")).toHaveValue("title");
    })
})