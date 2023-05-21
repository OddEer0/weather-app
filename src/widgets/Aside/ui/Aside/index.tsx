import { Typography } from "@mui/material"
import { useStore } from "effector-react"
import { FC, HTMLAttributes } from "react"

import { $fetchLocation } from "@/entities/weather"

import { ToggleThemeSwitch } from "@/features/ThemeActions"

import { getMonthDateAndWeekDay } from "@/shared/lib"
import { classname } from "@/shared/package/classname"

import { AsideBody } from "../Body"
import { SearchModal } from "../SearchModal"

import styles from "./styles.module.sass"

type AsideProps = HTMLAttributes<HTMLDivElement>

export const Aside: FC<AsideProps> = ({ className, ...props }) => {
	const classes = classname(className, styles.aside)
	const data = useStore($fetchLocation)

	return (
		data && (
			<aside className={classes} {...props}>
				<div className={styles.header}>
					<SearchModal />
					<ToggleThemeSwitch />
				</div>
				<AsideBody />
				<div className={styles.footer}>
					<div className={styles.info}>
						<Typography>Сегодня</Typography>
						<Typography>{getMonthDateAndWeekDay(data.location?.localtime as string)}</Typography>
					</div>
					<Typography>{data.location?.name}</Typography>
				</div>
			</aside>
		)
	)
}
