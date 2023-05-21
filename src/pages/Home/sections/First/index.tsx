import { Typography } from "@mui/material"
import { FC } from "react"

import { WeatherTabs } from "@/widgets/WeatherTabs"

import styles from "./styles.module.sass"

export const FirstSection: FC = () => {
	return (
		<section className={styles.section}>
			<Typography className={styles.title} variant="h5">
				Прогноз
			</Typography>
			<WeatherTabs />
		</section>
	)
}
