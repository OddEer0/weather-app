import { useEvent } from "effector-react"

import { fetchWeatherFx } from "@/entities/weather"

export const useInit = () => {
	const getWeather = useEvent(fetchWeatherFx)
	const city = localStorage.getItem("city")

	navigator.permissions.query({ name: "geolocation" })

	if (navigator.geolocation && !city) {
		navigator.geolocation.getCurrentPosition(position => {
			const lat = position.coords.latitude
			const lon = position.coords.longitude
			getWeather({ lat, lon })
		})
	} else if (city) {
		getWeather(city)
	} else {
		getWeather("Moscow")
	}
}
