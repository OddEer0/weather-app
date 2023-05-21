import { useInit } from "./hooks"
import { HomePage } from "@/pages/Home"

const App = () => {
	useInit()

	return <HomePage />
}

export default App
