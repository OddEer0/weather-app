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

export const fetchWeatherFx = createEffect((payload: ILatLon) => {
	return forecastWeatherService.getForecastWeatherByLatLon(payload.lat, payload.lon, 14)
})

const $isLoading = createStore<boolean>(true).on(fetchWeatherFx.done, () => false)

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

export const $fetchFullWeather = combine({
	isLoading: $isLoading,
	location: $location,
	weather: $currentWeather,
	forecast: $forecastWeather
})

export const $fetchWeather = combine({
	isLoading: $isLoading,
	weather: $currentWeather
})

export const $fetchLocation = combine({
	isLoading: $isLoading,
	location: $location
})

export const $fetchForecast = combine({
	isLoading: $isLoading,
	forecast: $forecastWeather
})
