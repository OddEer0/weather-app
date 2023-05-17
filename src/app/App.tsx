import { WeatherCard } from "@/entities/weather"

import { Aside } from "@/widgets/Aside/ui/Aside"
import { MainLayout } from "@/widgets/MainLayout"

const App = () => {
	return (
		<MainLayout aside={<Aside />}>
			<WeatherCard date="Завтра" status="rain" temperature="10°c" after="4°c" />
		</MainLayout>
	)
}

export default App
