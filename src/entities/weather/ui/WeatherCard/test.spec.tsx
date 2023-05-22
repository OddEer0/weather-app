import { render, screen } from "@testing-library/react"

import { WeatherCard } from "./index"

describe("Should render weather card", () => {
	it("Should render component", () => {
		render(<WeatherCard date="Date text" temperature="14C" status={1000} />)
		expect(screen.getByText(/date text/i)).toBeInTheDocument()
		expect(screen.getByText(/14C/i)).toBeInTheDocument()
	})

	it("Should render component with after props", () => {
		render(<WeatherCard date="Date text" temperature="14C" status={1000} after="5C" />)
		expect(screen.getByText(/5C/i)).toBeInTheDocument()
	})
})

describe("Screenshot testing component", () => {
	it("Screenshot component", () => {
		const { asFragment } = render(<WeatherCard date="Date text" temperature="14C" status={1000} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
