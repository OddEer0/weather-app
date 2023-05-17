import { Button, TextField } from "@mui/material"

import { useTheme } from "@/entities/theme"

import { Aside } from "@/widgets/Aside"

const App = () => {
	const { toggleHandler } = useTheme()

	return (
		<div>
			<Aside />
			<div>Content</div>
			<Button onClick={() => toggleHandler()}>BUTTON</Button>
			<TextField />
			<TextField color="secondary" />
		</div>
	)
}

export default App
