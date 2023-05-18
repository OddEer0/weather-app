import { combine, createEffect, createStore } from "effector"

import { ICurrentWeather, IForecastDay, ILocationResponse, forecastWeatherService } from "@/shared/api"

interface ILatLon {
	lat: number
	lon: number
}

export const fetchWeatherFx = createEffect((payload: ILatLon) => {
	return forecastWeatherService.getForecastWeatherByLatLon(payload.lat, payload.lon)
})

const $isLoading = createStore<boolean>(true).on(fetchWeatherFx.done, () => true)

export const $location = createStore<ILocationResponse | null>(null).on(
	fetchWeatherFx.done,
	(_, result) => result.result.location
)

export const $currentWeather = createStore<ICurrentWeather | null>(null).on(
	fetchWeatherFx.done,
	(_, result) => result.result.current
)

export const $forecastWeather = createStore<IForecastDay[] | null>(null).on(
	fetchWeatherFx.done,
	(_, result) => result.result.forecast.forecastday
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
