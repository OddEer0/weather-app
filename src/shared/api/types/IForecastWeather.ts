import { ICurrentWeatherResponse } from "./ICurrentWeather"
import { IForecastResponse } from "./IForecastDay"
import { ILocationResponse } from "./ILocation"

export interface IForecastWeatherResponse {
	location: ILocationResponse
	current: ICurrentWeatherResponse
	forecast: {
		forecastday: IForecastResponse[]
	}
}
