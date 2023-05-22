import { FC, PropsWithChildren, ReactNode } from "react"

import { Container } from "@/shared/ui"

import styles from "./styles.module.sass"

interface MainLayoutProps {
	aside: ReactNode
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({ aside, children }) => {
	return (
		<Container className={styles.layout}>
			{aside}
			<main>{children}</main>
		</Container>
	)
}
