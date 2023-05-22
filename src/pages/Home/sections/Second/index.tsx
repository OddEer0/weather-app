import { Skeleton, Stack, Typography } from "@mui/material";
import { useStore } from "effector-react"
import { FC } from "react"

import { $fetchWeather, WeatherDetailCard } from "@/entities/weather";

import styles from "./styles.module.sass"

export const SecondSection: FC = () => {
	const { isLoading, weather: currentWeather} = useStore($fetchWeather)

	return (
		<section className={styles.section}>
			<Typography className={styles.title} variant="h4" fontWeight={700}>
				Подробно на сегодня
			</Typography>
			{ isLoading ? (
				<Stack direction="row" flexWrap="wrap" justifyContent="center">
					<Skeleton variant="rounded" className={styles.card} width={320} height={180} />
					<Skeleton variant="rounded" className={styles.card} width={320} height={180} />
					<Skeleton variant="rounded" className={styles.card} width={320} height={180} />
					<Skeleton variant="rounded" className={styles.card} width={320} height={180} />
				</Stack>
			) : currentWeather ? (
				<Stack direction="row" flexWrap="wrap" justifyContent="center">
					<WeatherDetailCard title="Скорость ветра" className={styles.card}>
						<Typography variant="h3" fontWeight={900}>
							{currentWeather.wind_mph}{" "}
							<Typography variant="caption" fontSize={36} fontWeight={900}>
								м/с
							</Typography>
						</Typography>
					</WeatherDetailCard>
					<WeatherDetailCard title="Влажность" className={styles.card}>
						<Typography variant="h3" fontWeight={900}>
							{currentWeather.humidity}{" "}
							<Typography variant="caption" fontSize={36} fontWeight={900}>
								%
							</Typography>
						</Typography>
					</WeatherDetailCard>
					<WeatherDetailCard title="Видимость" className={styles.card}>
						<Typography variant="h3" fontWeight={900}>
							7{" "}
							<Typography variant="caption" fontSize={36} fontWeight={900}>
								км
							</Typography>
						</Typography>
					</WeatherDetailCard>
					<WeatherDetailCard title="Давление" className={styles.card}>
						<Typography variant="h3" fontWeight={900}>
							{currentWeather.pressure_mb}{" "}
							<Typography variant="caption" fontSize={18} fontWeight={700}>
								мм рт.ст.
							</Typography>
						</Typography>
					</WeatherDetailCard>
				</Stack>
			) : (
				<div className=""></div>
			)}
		</section>
	)
}
