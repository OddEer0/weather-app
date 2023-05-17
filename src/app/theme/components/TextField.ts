import { TextFieldProps, Theme, outlinedInputClasses } from "@mui/material"

export const MuiTextField = {
	styleOverrides: {
		root: ({
			ownerState
		}: {
			ownerState: TextFieldProps & Record<string, unknown>
		} & {
			theme: Omit<Theme, "components">
		}) => ({
			borderWidth: "2px",
			borderRadius: "10px",
			color: "var(--text-primary-200)",
			"--TextField-borderWidth": "2px",
			"--TextField-brandBorderColor": "var(--ui-default-500)",
			"--TextField-brandBorderHoverColor": "var(--ui-default-700)",
			"--TextField-brandBorderFocusedColor": `var(--ui-${ownerState.color}-500)`,
			"& label.Mui-focused": {
				color: `var(--ui-${ownerState.color}-500)`
			}
		})
	}
}

export const MuiOutlinedInput = {
	styleOverrides: {
		notchedOutline: {
			borderWidth: "var(--TextField-borderWidth)",
			borderColor: "var(--TextField-brandBorderColor)"
		},
		root: {
			borderRadius: "inherit",
			borderWidth: "inherit",
			[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
				borderColor: "var(--TextField-brandBorderHoverColor)"
			},
			[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
				borderColor: "var(--TextField-brandBorderFocusedColor)"
			}
		}
	}
}

export const MuiFilledInput = {
	styleOverrides: {
		root: {
			borderRadius: "inherit",
			borderWidth: "inherit",
			"&:before, &:after": {
				borderBottom: "2px solid var(--TextField-brandBorderColor)"
			},
			"&:hover:not(.Mui-disabled, .Mui-error):before": {
				borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
			},
			"&.Mui-focused:after": {
				borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)"
			}
		}
	}
}

export const MuiInput = {
	styleOverrides: {
		root: {
			borderRadius: "inherit",
			borderWidth: "inherit",
			"&:before": {
				borderBottom: "2px solid var(--TextField-brandBorderColor)"
			},
			"&:hover:not(.Mui-disabled, .Mui-error):before": {
				borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
			},
			"&.Mui-focused:after": {
				borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)"
			}
		}
	}
}
