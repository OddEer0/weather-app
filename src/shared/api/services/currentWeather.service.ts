import { AxiosInstance } from "axios"

import { api } from "../instance"

class CurrentWeatherService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getCurrentWeatherByCity(city: string) {
		const { data } = await this.api.get("current.json", {
			params: {
				q: city
			}
		})

		return data
	}
}

export const currentWeatherService = new CurrentWeatherService()
