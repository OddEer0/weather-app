import { useMediaQuery } from "@mui/material"
import { useStore } from "effector-react"
import { FC } from "react"

import { $fetchForecast, WeatherCardList, WeatherCarousel } from "@/entities/weather"

export const WeekList: FC = () => {
	const { forecast, isLoading } = useStore($fetchForecast)
	const isPhone = useMediaQuery("(max-width: 585px)")

	return isPhone ? (
		<WeatherCardList weathers={forecast} isLoading={isLoading} />
	) : (
		<WeatherCarousel isLoading={isLoading} weathers={forecast} />
	)
}
