import { IForecastDay } from "."

import { ICurrentWeather } from "./ICurrentWeather"
import { ILocationResponse } from "./ILocation"

export interface IForecastWeatherResponse {
	location: ILocationResponse
	current: ICurrentWeather
	forecast: {
		forecastday: IForecastDay[]
	}
}
