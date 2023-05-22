import { FC, HTMLAttributes, PropsWithChildren } from "react"

import { classname } from "@/shared/package/classname"

import styles from "./styles.module.sass"

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
	const classes = classname(className, styles.container)

	return (
		<div {...props} className={classes}>
			{children}
		</div>
	)
}
