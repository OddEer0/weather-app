import { InputAdornment, TextField } from "@mui/material"
import { useEvent } from "effector-react"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"

import { fetchSearchFx } from "@/entities/search"

import { useDebounce } from "@/shared/lib/hooks"

export const SearchInput: FC = () => {
	const [value, setValue] = useState("")
	const searchFx = useEvent(fetchSearchFx)
	const callback = useDebounce(() => {
		if (value.length > 3) {
			searchFx(value)
		}
	}, 1000)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target) {
			setValue(() => e.target.value)
		}
	}

	useEffect(() => {
		callback()
	}, [value])

	return (
		<TextField
			label="Название города"
			placeholder="Поиск..."
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<BsSearch />
					</InputAdornment>
				)
			}}
			value={value}
			onChange={changeHandler}
			size="small"
		/>
	)
}
