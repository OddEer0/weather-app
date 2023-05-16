import { FC, PropsWithChildren } from "react"

import { Compose } from "@/shared/lib"

import { WithThemeProvider } from "./theme.provider"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Compose providers={[WithThemeProvider]}>{children}</Compose>
}
