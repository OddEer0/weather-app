import { useStore } from "effector-react"
import { useEffect } from "react"

import { setThemeEvent, toggleThemeEvent } from "./theme.event"
import { $theme } from "./theme.store"

export const useTheme = () => {
	const theme = useStore($theme)

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return {
		theme,
		toggleHandler: toggleThemeEvent,
		setTheme: setThemeEvent
	}
}
