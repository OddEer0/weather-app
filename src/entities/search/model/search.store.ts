import { combine, createEffect, createStore } from "effector"

import { ISearchCity, searchCityService } from "@/shared/api"

export const fetchSearchFx = createEffect((searchValue: string) => {
	return searchCityService.getCity(searchValue)
})

export const $searchCities = createStore<ISearchCity[] | null>(null).on(
	fetchSearchFx.done,
	(_, result) => result.result
)

export const $fetchSearchCity = combine({
	isLoading: fetchSearchFx.pending,
	cities: $searchCities
})
