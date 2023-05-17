import { Button } from "@mui/material"
import { FC, HTMLAttributes } from "react"

import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

type AsideProps = HTMLAttributes<HTMLDivElement>

export const Aside: FC<AsideProps> = ({ className, ...props }) => {
	const classes = classname(className, styles.aside)

	return (
		<aside className={classes} {...props}>
			<div className={styles.header}>
				<Button>BUTTON</Button>
				<Button>BUTTON</Button>
			</div>
			<div className={styles.body}></div>
			<div className={styles.footer}></div>
		</aside>
	)
}
