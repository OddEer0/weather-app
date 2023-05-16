import { ThemeProvider } from "@mui/material"
import { FC, PropsWithChildren } from "react"

import { theme } from "../theme"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
