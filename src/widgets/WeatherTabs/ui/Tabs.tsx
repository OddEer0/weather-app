import { Tab, Tabs } from "@mui/material"
import { FC, useState } from "react"

import { TabPanel } from "@/shared/ui"

import { HourList } from "./HourList"
import { WeekList } from "./WeekList"

export const WeatherTabs: FC = () => {
	const [value, setValue] = useState(1)

	const changeHandler = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<>
			<Tabs value={value} onChange={changeHandler} centered>
				<Tab label="на неделю" value={1} />
				<Tab label="почасовой" value={2} />
			</Tabs>
			<TabPanel value={value} index={1}>
				<WeekList />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<HourList />
			</TabPanel>
		</>
	)
}
