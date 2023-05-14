import { RenderOptions, render } from "@testing-library/react"
import { ReactElement } from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}
Object.defineProperty(window, "scrollTo", { value: noop, writable: true })

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
	render(ui, { wrapper: ({ children }) => children, ...options })

export * from "@testing-library/react"

export { customRender as render }
