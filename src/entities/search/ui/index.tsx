import { Skeleton, Stack, Typography } from "@mui/material"
import { useStore } from "effector-react"
import { FC, HTMLAttributes } from "react"

import { $fetchSearchCity } from "../model"

import styles from "./styles.module.sass"

interface SearchListProps extends HTMLAttributes<HTMLDivElement> {
	clickHandler: (value: string) => void
}

export const SearchList: FC<SearchListProps> = ({ clickHandler, ...props }) => {
	const { isLoading, cities } = useStore($fetchSearchCity)

	return (
		<Stack {...props}>
			{isLoading ? (
				new Array(8).fill("").map((_, i) => <Skeleton key={i} variant="text" width="100%" height={30} />)
			) : cities && cities.length ? (
				cities.map(city => (
					<div key={city.id} className={styles.item} onClick={() => clickHandler(city.name)}>
						<Typography variant="caption">{city.name} </Typography>
						<Typography variant="caption">
							{city.region}, {city.country}
						</Typography>
					</div>
				))
			) : (
				<div className={styles.not}>Нет городов по поиску</div>
			)}
		</Stack>
	)
}
