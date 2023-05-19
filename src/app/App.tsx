import { Aside } from "@/widgets/Aside"
import { MainLayout } from "@/widgets/MainLayout"
import { WeatherTabs } from "@/widgets/WeatherTabs"

import { useInit } from "./hooks"

const App = () => {
	useInit()

	return (
		<MainLayout aside={<Aside />}>
			<WeatherTabs />
		</MainLayout>
	)
}

export default App
