import { createPersistStore } from "@/shared/lib"

import { INIT_THEME } from "../lib"
import { IThemeMode } from "../types"

import { setThemeEvent, toggleThemeEvent } from "./theme.event"

export const $theme = createPersistStore<IThemeMode>(INIT_THEME, { name: "theme" })
	.on(setThemeEvent, (_, payload) => payload)
	.on(toggleThemeEvent, state => (state === "dark" ? "light" : "dark"))
