import { Typography } from "@mui/material"
import { useStore } from "effector-react"
import { FC } from "react"

import { $currentWeather, WEATHER_ICON } from "@/entities/weather"

import styles from "./styles.module.sass"

export const AsideBody: FC = () => {
	const weather = useStore($currentWeather)
	const Icon = WEATHER_ICON[weather?.condition.code || 1000]

	return (
		weather && (
			<div className={styles.body}>
				<div className={styles.iconWrapper}>{Icon && <Icon />}</div>
				<Typography className={styles.title} variant="h1">
					{Math.ceil(weather.temp_c)}°c
				</Typography>
				<Typography className={styles.status} variant="h4">
					{weather.condition.text}
				</Typography>
				<Typography className={styles.subTitle} variant="subtitle1">
					Ощущается как {weather.feelslike_c.toFixed()}°c
				</Typography>
			</div>
		)
	)
}
