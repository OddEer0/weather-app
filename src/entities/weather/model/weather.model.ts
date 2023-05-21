import { combine, createEffect, createStore } from "effector"

import {
	ICurrentWeatherResponse,
	ILocationResponse,
	IMappedForecast,
	forecastMapper,
	forecastWeatherService
} from "@/shared/api"

interface ILatLon {
	lat: number
	lon: number
}

export const fetchWeatherFx = createEffect((payload: ILatLon | string) => {
	if (typeof payload === "string") {
		return forecastWeatherService.getForecastWeatherByCity(payload, 14)
	}
	return forecastWeatherService.getForecastWeatherByLatLon(payload.lat, payload.lon, 14)
})

export const $location = createStore<ILocationResponse | null>(null).on(
	fetchWeatherFx.done,
	(_, result) => result.result.location
)

export const $currentWeather = createStore<ICurrentWeatherResponse | null>(null).on(
	fetchWeatherFx.done,
	(_, result) => result.result.current
)

export const $forecastWeather = createStore<IMappedForecast[] | null>(null).on(fetchWeatherFx.done, (_, result) =>
	forecastMapper(result.result.forecast.forecastday)
)

export const $fetchWeather = combine({
	isLoading: fetchWeatherFx.pending,
	weather: $currentWeather
})

export const $fetchLocation = combine({
	isLoading: fetchWeatherFx.pending,
	location: $location
})

export const $fetchForecast = combine({
	isLoading: fetchWeatherFx.pending,
	forecast: $forecastWeather
})
