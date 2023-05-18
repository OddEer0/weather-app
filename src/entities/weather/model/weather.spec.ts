import { allSettled, fork } from "effector"
import { vi } from "vitest"

import { weatherMock } from "./weather.mock"
import { $currentWeather, $forecastWeather, $location, fetchWeatherFx } from "./weather.model"

describe("Weather store effects", () => {
	it("Should activate fetchWeatherFx effect", async () => {
		const fn = vi.fn()

		const scope = fork({
			handlers: new Map([
				[
					fetchWeatherFx,
					() => {
						fn()
						return weatherMock
					}
				]
			])
		})

		await allSettled(fetchWeatherFx, {
			params: { lat: 21, lon: 212 },
			scope
		})

		expect(scope.getState($location)).toBe(weatherMock.location)
		expect(scope.getState($currentWeather)).toBe(weatherMock.current)
		expect(scope.getState($forecastWeather)).toBe(weatherMock.forecast.forecastday)
		expect(fn).toBeCalledTimes(1)
	})
})
