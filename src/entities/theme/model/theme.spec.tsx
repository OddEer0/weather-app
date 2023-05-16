import { allSettled, fork } from "effector"

import { setThemeEvent, toggleThemeEvent } from "./theme.event"
import { $theme } from "./theme.store"

describe("Theme store events", () => {
	it("Toggle theme event", async () => {
		const scope = fork({ values: new Map([[$theme, "light"]]) })
		await allSettled(toggleThemeEvent, { scope })
		expect(scope.getState($theme)).toBe("dark")
		await allSettled(toggleThemeEvent, { scope })
		expect(scope.getState($theme)).toBe("light")
	})

	it("Set theme event", async () => {
		const scope = fork({ values: new Map([[$theme, "light"]]) })
		await allSettled(setThemeEvent, { scope, params: "dark" })
		expect(scope.getState($theme)).toBe("dark")
		await allSettled(setThemeEvent, { scope, params: "light" })
		expect(scope.getState($theme)).toBe("light")
	})
})
