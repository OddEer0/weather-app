import { Components, Theme } from "@mui/material"

import { MuiFilledInput, MuiInput, MuiOutlinedInput, MuiTextField } from "./TextField"

export const components: Components<Omit<Theme, "components">> = {
	MuiButton: {
		defaultProps: { variant: "contained", sx: { borderRadius: "16px" } }
	},
	MuiTextField,
	MuiOutlinedInput,
	MuiFilledInput,
	MuiInput
}
