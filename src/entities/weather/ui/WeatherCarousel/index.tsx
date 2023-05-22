import { Skeleton, Stack, Typography, useTheme } from "@mui/material";
import { FC, HTMLAttributes } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/all"
import Carousel from "react-slick"

import { IForecastBase } from "@/shared/api"
import { classname } from "@/shared/package/classname"

import { WeatherCard } from "../WeatherCard"

import styles from "./styles.module.sass"

interface WeatherCarouselProps extends HTMLAttributes<HTMLDivElement> {
	weathers: IForecastBase[] | null
	isLoading: boolean
}

function SampleNextArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	const theme = useTheme()

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowRight style={{ color: theme.palette.primary.main }} />
		</div>
	)
}

function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	const theme = useTheme()

	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowLeft style={{ color: theme.palette.primary.main }} />
		</div>
	)
}

export const WeatherCarousel: FC<WeatherCarouselProps> = ({ weathers, isLoading, className, ...props }) => {
	const classes = classname(styles.wrapper, className)

	const settings = {
		slidesToShow: 6,
		slidesToScroll: 6,
		variableWidth: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
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
				<Carousel
					nextArrow={<SampleNextArrow />}
					prevArrow={<SamplePrevArrow />}
					{...settings}
					className={styles.carousel}
				>
					{weathers.map(forecast => (
						<div style={{ display: "flex" }} key={forecast.dateEpoch}>
							<WeatherCard
								className={styles.card}
								temperature={Math.ceil(forecast.maxTemp)}
								after={forecast.minTemp}
								date={forecast.date}
								status={forecast.iconCode}
							/>
						</div>
					))}
				</Carousel>
			) : (
				<Typography variant="h4" className={styles.none}>
					Нет данных о погоде
				</Typography>
			)}
		</div>
	)
}
