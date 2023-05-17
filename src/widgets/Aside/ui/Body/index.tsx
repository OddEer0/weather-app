import { Typography } from "@mui/material"
import { FC } from "react"
import { BsSnow } from "react-icons/bs"

import styles from "./styles.module.sass"

export const AsideBody: FC = () => {
	return (
		<div className={styles.body}>
			<div className={styles.iconWrapper}>
				<BsSnow />
			</div>
			<Typography className={styles.title} variant="h1">
				1°c
			</Typography>
			<Typography className={styles.status} variant="h3">
				Снег
			</Typography>
			<Typography className={styles.subTitle} variant="subtitle1">
				Ощущается как -3°c
			</Typography>
		</div>
	)
}
