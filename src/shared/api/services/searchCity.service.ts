import { AxiosInstance } from "axios"

import { api } from "../instance"
import { ISearchCity } from "../types"

class SearchCityService {
	api: AxiosInstance
	constructor() {
		this.api = api
	}

	async getCity(city: string) {
		const { data } = await this.api.get<ISearchCity[]>("search.json", {
			params: {
				q: city
			}
		})

		return data
	}
}

export const searchCityService = new SearchCityService()
