import { Components, Theme } from "@mui/material"

export const components: Components<Omit<Theme, "components">> = {
	MuiButton: {
		defaultProps: { variant: "contained", sx: { borderRadius: "16px" } }
	}
}
