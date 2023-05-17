import { Button, Typography } from "@mui/material"
import { FC, HTMLAttributes } from "react"

import { ToggleThemeSwitch } from "@/features/ThemeActions"

import { classname } from "@/shared/package/classname"

import { AsideBody } from "../Body"

import styles from "./styles.module.sass"

type AsideProps = HTMLAttributes<HTMLDivElement>

export const Aside: FC<AsideProps> = ({ className, ...props }) => {
	const classes = classname(className, styles.aside)

	return (
		<aside className={classes} {...props}>
			<div className={styles.header}>
				<Button>BUTTON</Button>
				<ToggleThemeSwitch />
			</div>
			<AsideBody />
			<div className={styles.footer}>
				<div className={styles.info}>
					<Typography>Сегодня</Typography>
					<Typography>Вс, 13 Мар</Typography>
				</div>
				<div className="">Москва</div>
			</div>
		</aside>
	)
}
