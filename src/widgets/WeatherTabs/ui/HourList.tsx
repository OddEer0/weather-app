import { useMediaQuery } from "@mui/material"
import { useStore } from "effector-react"
import { FC, useMemo } from "react"

import { $fetchForecast, WeatherCardList, WeatherCarousel } from "@/entities/weather"

export const HourList: FC = () => {
	const { forecast, isLoading } = useStore($fetchForecast)
	const isPhone = useMediaQuery("(max-width: 585px)")

	const hour = useMemo(() => {
		return forecast && forecast.length ? forecast[0].hour : null
	}, [forecast])

	return isPhone ? (
		<WeatherCardList weathers={hour} isLoading={isLoading} />
	) : (
		<WeatherCarousel isLoading={isLoading} weathers={hour} />
	)
}
