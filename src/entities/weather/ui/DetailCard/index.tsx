import { Card, CardContent, Typography } from "@mui/material"
import { FC, HTMLAttributes, PropsWithChildren } from "react"

import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

interface IWeatherDetailCardProps extends HTMLAttributes<HTMLDivElement> {
	title: string
}

export const WeatherDetailCard: FC<PropsWithChildren<IWeatherDetailCardProps>> = ({
	title,
	className,
	children,
	...props
}) => {
	const classes = classname(styles.card, className)

	return (
		<Card className={classes} {...props}>
			<CardContent className={styles.content}>
				<Typography fontSize={20} variant="caption">
					{title}
				</Typography>
				<div className={styles.body}>{children}</div>
			</CardContent>
		</Card>
	)
}
