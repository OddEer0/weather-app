import { Box, Button, Modal } from "@mui/material"
import { useEvent } from "effector-react"
import { FC, useState } from "react"

import { SearchList } from "@/entities/search"
import { fetchWeatherFx } from "@/entities/weather"

import { SearchInput } from "@/features/SearchCity"

import styles from "./styles.module.sass"

export const SearchModal: FC = () => {
	const [isShow, setIsShow] = useState(false)
	const weather = useEvent(fetchWeatherFx)
	const closeHandler = () => setIsShow(false)
	const openHandler = () => setIsShow(true)

	const clickHandler = (value: string) => {
		localStorage.setItem("city", value)
		weather(value)
		closeHandler()
	}

	return (
		<>
			<Button onClick={openHandler}>Поиск...</Button>
			<Modal open={isShow} onClose={closeHandler}>
				<Box className={styles.modalContent}>
					<div className={styles.input}>
						<SearchInput />
					</div>
					<SearchList clickHandler={clickHandler} />
				</Box>
			</Modal>
		</>
	)
}
