import { Card, CardContent, Typography } from "@mui/material"
import { FC, HTMLAttributes } from "react"

import { WEATHER_ICON } from "@/shared/lib"
import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

interface WeatherCardProps extends HTMLAttributes<HTMLDivElement> {
	date: string
	temperature: string | number
	after?: string | number | null
	status: keyof typeof WEATHER_ICON
}

export const WeatherCard: FC<WeatherCardProps> = ({ date, temperature, status, after, className, ...props }) => {
	const classes = classname(styles.card, className)
	const Alt = WEATHER_ICON[1000]
	const Icon = WEATHER_ICON[status]

	return (
		<Card className={classes} {...props}>
			<CardContent className={styles.content}>
				<Typography variant="caption" className={styles.date}>
					{date}
				</Typography>
				<div className={styles.icon}>{Icon ? <Icon /> : <Alt />}</div>
				<div className={classname(styles.footer, { [styles.footerCenter]: !after })}>
					<Typography variant="caption">{temperature}°c</Typography>
					{after && (
						<Typography className={styles.after} variant="caption">
							{after}°c
						</Typography>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
