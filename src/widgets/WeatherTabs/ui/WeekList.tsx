import { useMediaQuery } from "@mui/material"
import { useStore } from "effector-react"
import { FC, useMemo } from "react"

import { $fetchForecast, WeatherCardList, WeatherCarousel } from "@/entities/weather"

export const WeekList: FC = () => {
	const { forecast, isLoading } = useStore($fetchForecast)
	const isPhone = useMediaQuery("(max-width: 585px)")

	const week = useMemo(() => {
		return forecast ? forecast.map(forecastDay => forecastDay.day) : null
	}, [forecast])

	return isPhone || (week && week.length < 7) ? (
		<WeatherCardList weathers={week} isLoading={isLoading} />
	) : (
		<WeatherCarousel isLoading={isLoading} weathers={week} />
	)
}
