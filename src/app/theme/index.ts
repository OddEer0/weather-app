import { createTheme } from "@mui/material"

import { components } from "./components"
import { darkPalette, lightPalette } from "./palette"
import { typography } from "./typography"

export const lightTheme = createTheme({ palette: lightPalette, components, typography })

export const darkTheme = createTheme({ palette: darkPalette, components, typography })
