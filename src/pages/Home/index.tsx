import { FC } from "react"

import { Aside } from "@/widgets/Aside"
import { MainLayout } from "@/widgets/MainLayout"

import { FirstSection } from "./sections/First"
import { SecondSection } from "./sections/Second"

export const HomePage: FC = () => {
	return (
		<MainLayout aside={<Aside />}>
			<FirstSection />
			<SecondSection />
		</MainLayout>
	)
}
