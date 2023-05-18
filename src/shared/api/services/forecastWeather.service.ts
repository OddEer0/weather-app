import { AxiosInstance } from "axios"

import { concatNumber } from "@/shared/lib"

import { api } from "../instance"
import { IForecastWeatherResponse } from "../types"

class ForecastWeatherService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getForecastWeatherByLatLon(lat: number, lon: number, days = 1) {
		const { data } = await this.api.get<IForecastWeatherResponse>("forecast.json", {
			params: {
				q: concatNumber([lat, lon]),
				days
			}
		})

		return data
	}

	async getForecastWeatherByCity(city: string, days = 1) {
		const { data } = await this.api.get<IForecastWeatherResponse>("forecast.json", {
			params: {
				q: city,
				days
			}
		})

		return data
	}
}

export const forecastWeatherService = new ForecastWeatherService()
