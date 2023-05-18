import { Aside } from "@/widgets/Aside/ui/Aside"
import { MainLayout } from "@/widgets/MainLayout"

import { useInit } from "./hooks"

const App = () => {
	useInit()

	return <MainLayout aside={<Aside />}></MainLayout>
}

export default App
