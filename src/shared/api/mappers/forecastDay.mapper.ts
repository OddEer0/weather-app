import { getHour, getMonthDateAndWeekDay } from "@/shared/lib"

import { IForecastResponse, IMappedForecast } from "../types"

export const forecastMapper = (data: IForecastResponse[]) =>
	data.map(forecast => {
		const result: IMappedForecast = {} as IMappedForecast

		result.day = {
			maxTemp: Math.ceil(forecast.day.maxtemp_c),
			minTemp: Math.ceil(forecast.day.mintemp_c),
			date: getMonthDateAndWeekDay(forecast.date),
			dateEpoch: forecast.date_epoch,
			text: forecast.day.condition.text,
			iconCode: forecast.day.condition.code
		}

		result.hour = forecast.hour.map(hour => ({
			maxTemp: Math.ceil(hour.temp_c),
			minTemp: null,
			date: getHour(hour.time),
			dateEpoch: hour.time_epoch,
			text: hour.condition.text,
			iconCode: hour.condition.code
		}))

		return result
	})
