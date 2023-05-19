import { WeatherCard } from ".."
import { Skeleton, Stack, Typography } from "@mui/material"
import { FC, HTMLAttributes } from "react"

import { IForecastDay } from "@/shared/api"
import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

interface WeatherCardListProps extends HTMLAttributes<HTMLDivElement> {
	weathers: IForecastDay[] | null
	isLoading: boolean
	maxItems?: number
}

export const WeatherCardList: FC<WeatherCardListProps> = ({
	weathers,
	isLoading,
	className,
	maxItems = 7,
	...props
}) => {
	const classes = classname(styles.stack, className)

	return (
		<Stack direction="row" flexWrap="wrap" className={classes} {...props} justifyContent="center">
			{isLoading ? (
				new Array(7)
					.fill("")
					.map((_, i) => <Skeleton key={i} className={styles.skeleton} variant="rounded" width={100} height={143} />)
			) : weathers && weathers.length ? (
				<>
					{weathers.map(
						(weather, i) =>
							i < maxItems && (
								<WeatherCard
									className={styles.card}
									key={weather.date_epoch}
									date={weather.date}
									temperature={weather.day.maxtemp_c.toFixed()}
									after={weather.day.mintemp_c.toFixed()}
									status={weather.day.condition.code}
								/>
							)
					)}
					{new Array(5).fill("").map((_, i) => (
						<div key={i} className={styles.empty}></div>
					))}
				</>
			) : (
				<Typography variant="h5" className={styles.not}>
					Нет данных о погоде
				</Typography>
			)}
		</Stack>
	)
}
