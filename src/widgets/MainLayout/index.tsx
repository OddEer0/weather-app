import { FC, PropsWithChildren, ReactNode } from "react"

import styles from "./styles.module.sass"

interface MainLayoutProps {
	aside: ReactNode
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ aside, children }) => {
	return (
		<div className={styles.layout}>
			{aside}
			<main>{children}</main>
		</div>
	)
}
