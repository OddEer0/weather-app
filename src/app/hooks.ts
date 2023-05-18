import { useEvent } from "effector-react"

import { fetchWeatherFx } from "@/entities/weather"

export const useInit = () => {
	const getWeather = useEvent(fetchWeatherFx)

	navigator.permissions.query({ name: "geolocation" })

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			const lat = position.coords.latitude
			const lon = position.coords.longitude
			getWeather({ lat, lon })
		})
	}
}
