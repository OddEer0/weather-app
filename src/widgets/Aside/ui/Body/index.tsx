import { Typography } from "@mui/material"
import { useStore } from "effector-react"
import { FC } from "react"

import { $currentWeather } from "@/entities/weather"

import { WEATHER_ICON } from "@/shared/lib"

import styles from "./styles.module.sass"

export const AsideBody: FC = () => {
	const weather = useStore($currentWeather)
	const Icon = WEATHER_ICON[weather?.condition.code || 1000]
	const Alt = WEATHER_ICON[1000]

	return (
		weather && (
			<div className={styles.body}>
				<div className={styles.iconWrapper}>{Icon ? <Icon /> : <Alt />}</div>
				<Typography className={styles.title} variant="h1">
					{Math.ceil(weather.temp_c)}°c
				</Typography>
				<Typography className={styles.status} variant="h6">
					{weather.condition.text}
				</Typography>
				<Typography className={styles.subTitle} variant="subtitle1">
					Ощущается как {weather.feelslike_c.toFixed()}°c
				</Typography>
			</div>
		)
	)
}
