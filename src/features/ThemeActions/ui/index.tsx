import { Switch } from "@mui/material"
import { FC } from "react"

import { useTheme } from "@/entities/theme"

export const ToggleThemeSwitch: FC = () => {
	const { toggleHandler, theme } = useTheme()

	const switchHandler = () => {
		toggleHandler()
	}

	return <Switch checked={theme === "dark"} onChange={switchHandler} />
}
