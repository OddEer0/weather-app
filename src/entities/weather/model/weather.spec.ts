import { allSettled, fork } from "effector"
import { vi } from "vitest"

import { forecastMapper } from "@/shared/api"
import { forecastMock } from "@/shared/api/mock"

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
						return forecastMock
					}
				]
			])
		})

		await allSettled(fetchWeatherFx, {
			params: { lat: 21, lon: 212 },
			scope
		})

		expect(scope.getState($location)).toBe(forecastMock.location)
		expect(scope.getState($currentWeather)).toBe(forecastMock.current)
		expect(scope.getState($forecastWeather)).toEqual(forecastMapper(forecastMock.forecast.forecastday))
		expect(fn).toBeCalledTimes(1)
	})
})
