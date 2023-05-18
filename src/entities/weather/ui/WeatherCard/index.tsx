import { Card, CardContent, Typography } from "@mui/material"
import { FC, HTMLAttributes } from "react"

import { classname } from "@/shared/package/classname"

import { WEATHER_ICON } from "../../lib/constants"

import styles from "./styles.module.sass"

interface WeatherCardProps extends HTMLAttributes<HTMLDivElement> {
	date: string
	temperature: string
	after?: string
	status: keyof typeof WEATHER_ICON
}

export const WeatherCard: FC<WeatherCardProps> = ({ date, temperature, status, after, className, ...props }) => {
	const classes = classname(styles.card, className)
	const Icon = WEATHER_ICON[status]

	return (
		<Card className={classes} {...props}>
			<CardContent className={styles.content}>
				<Typography variant="caption">{date}</Typography>
				<div className={styles.icon}>
					<Icon />
				</div>
				<div className={classname(styles.footer, { [styles.footerCenter]: !after })}>
					<Typography variant="caption">{temperature}</Typography>
					{after && (
						<Typography className={styles.after} variant="caption">
							{after}
						</Typography>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
