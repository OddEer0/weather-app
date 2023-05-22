import Container from "@mui/material/Container"
import { render, screen } from "@testing-library/react"

describe("testing container", () => {
	it("Should render container component", () => {
		render(<Container>Container content</Container>)
		expect(screen.getByText(/Container content/i)).toBeInTheDocument()
	})
})
