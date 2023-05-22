export const MuiTextField = {
	styleOverrides: {
		root: {
			borderWidth: "2px",
			borderRadius: "10px",
			"--TextField-borderWidth": "2px",
			"--TextField-brandBorderColor": "10px"
		}
	}
}

export const MuiOutlinedInput = {
	styleOverrides: {
		notchedOutline: {
			borderWidth: "var(--TextField-borderWidth)",
			borderRadius: "var(--TextField-brandBorderColor)"
		}
	}
}

export const MuiFilledInput = {
	styleOverrides: {
		root: {
			borderRadius: "inherit",
			borderWidth: "inherit"
		}
	}
}

export const MuiInput = {
	styleOverrides: {
		root: {
			borderRadius: "inherit",
			borderWidth: "inherit"
		}
	}
}
