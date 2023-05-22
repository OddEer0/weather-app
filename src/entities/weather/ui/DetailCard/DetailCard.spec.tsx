import { render, screen } from "@testing-library/react"

import { WeatherDetailCard } from "./index"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<WeatherDetailCard title="Влажность"></WeatherDetailCard>)
		expect(screen.getByText(/влажность/i)).toBeInTheDocument()
	})

	it("Should render children element", () => {
		render(
			<WeatherDetailCard title="Влажность">
				<p data-testid="children">32C</p>
			</WeatherDetailCard>
		)

		expect(screen.getByTestId("children")).toBeInTheDocument()
		expect(screen.getByText(/32c/i)).toBeInTheDocument()
	})
})
