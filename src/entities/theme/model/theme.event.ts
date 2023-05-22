import { createEvent } from "effector"

import { IThemeMode } from "../types"

export const setThemeEvent = createEvent<IThemeMode>()

export const toggleThemeEvent = createEvent()
