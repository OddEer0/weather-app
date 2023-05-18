import { AxiosInstance } from "axios"

import { concatNumber } from "@/shared/lib"

import { api } from "../instance"
import { ICurrentWeatherResponse } from "../types"

class CurrentWeatherService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getCurrentWeatherByCity(city: string) {
		const { data } = await this.api.get<ICurrentWeatherResponse>("current.json", {
			params: {
				q: city
			}
		})

		return data
	}

	async getCurrentWeatherByLatLon(lat: number, lon: number) {
		const { data } = await this.api.get<ICurrentWeatherResponse>("current.json", {
			params: {
				q: concatNumber([lat, lon])
			}
		})

		return data
	}
}

export const currentWeatherService = new CurrentWeatherService()
