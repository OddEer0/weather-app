import { ThemeProvider } from "@mui/material"
import { FC, PropsWithChildren } from "react"

import { useTheme } from "@/entities/theme"

import { darkTheme, lightTheme } from "../theme"

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme()

	return <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>{children}</ThemeProvider>
}
