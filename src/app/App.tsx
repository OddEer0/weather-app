import { Button } from "@mui/material"

import { useTheme } from "@/entities/theme"

const App = () => {
	const { toggleHandler } = useTheme()

	return (
		<div>
			<div>Content</div>
			<Button onClick={() => toggleHandler()}>BUTTON</Button>
		</div>
	)
}

export default App
