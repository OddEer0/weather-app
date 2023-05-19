import { WeatherCard } from ".."
import { Skeleton, Stack, Typography } from "@mui/material"
import { FC, HTMLAttributes } from "react"
import Carousel from "react-slick"

import { IForecastDay } from "@/shared/api"
import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

interface WeatherCarouselProps extends HTMLAttributes<HTMLDivElement> {
	weathers: IForecastDay[] | null
	isLoading: boolean
}

export const WeatherCarousel: FC<WeatherCarouselProps> = ({ weathers, isLoading, className, ...props }) => {
	const classes = classname(styles.wrapper, className)

	const settings = {
		slidesToShow: 6,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 3
				}
			}
		]
	}

	return (
		<div className={classes} {...props}>
			{isLoading ? (
				<div className={styles.stack}>
					<Stack className={styles.muiStack} direction="row">
						{new Array(6).fill("").map((_, i) => (
							<Skeleton key={i} variant="rounded" width={100} height={143} className={styles.skeleton} />
						))}
					</Stack>
				</div>
			) : weathers && weathers.length ? (
				<Carousel {...settings} className={styles.carousel}>
					{weathers.map(forecast => (
						<div style={{ display: "flex" }} key={forecast.day.uv}>
							<WeatherCard
								className={styles.card}
								key={forecast.date_epoch}
								temperature={Math.ceil(forecast.day.maxtemp_c)}
								after={Math.ceil(forecast.day.mintemp_c)}
								date={forecast.date}
								status={1000}
							/>
						</div>
					))}
				</Carousel>
			) : (
				<Typography variant="h4" className={styles.not}>
					Нет данных о погоде
				</Typography>
			)}
		</div>
	)
}
