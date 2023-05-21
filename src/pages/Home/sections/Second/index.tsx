import { Stack, Typography } from "@mui/material"
import { FC } from "react"

import { WeatherDetailCard } from "@/entities/weather"

import styles from "./styles.module.sass"

export const SecondSection: FC = () => {
	return (
		<section className={styles.section}>
			<Typography className={styles.title} variant="h4" fontWeight={700}>
				Подробно на сегодня
			</Typography>
			<Stack direction="row" flexWrap="wrap" justifyContent="center">
				<WeatherDetailCard title="Скорость ветра" className={styles.card}>
					<Typography variant="h2" fontWeight={900}>
						7{" "}
						<Typography variant="caption" fontSize={36} fontWeight={900}>
							м/с
						</Typography>
					</Typography>
				</WeatherDetailCard>
				<WeatherDetailCard title="Влажность" className={styles.card}>
					<Typography variant="h2" fontWeight={900}>
						7{" "}
						<Typography variant="caption" fontSize={36} fontWeight={900}>
							%
						</Typography>
					</Typography>
				</WeatherDetailCard>
				<WeatherDetailCard title="Видимость" className={styles.card}>
					<Typography variant="h2" fontWeight={900}>
						7{" "}
						<Typography variant="caption" fontSize={36} fontWeight={900}>
							км
						</Typography>
					</Typography>
				</WeatherDetailCard>
				<WeatherDetailCard title="Давление" className={styles.card}>
					<Typography variant="h2" fontWeight={900}>
						7{" "}
						<Typography variant="caption" fontSize={18} fontWeight={700}>
							мм рт.ст.
						</Typography>
					</Typography>
				</WeatherDetailCard>
			</Stack>
		</section>
	)
}
