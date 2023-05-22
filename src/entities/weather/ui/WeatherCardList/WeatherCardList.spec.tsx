import { render, screen } from "@testing-library/react"
import { fork } from "effector"

import { forecastMapper } from "@/shared/api"
import { forecastMock } from "@/shared/api/mock"

import { $forecastWeather } from "../../model"

import { WeatherCardList } from "./index"

describe("Should render component", () => {
	it("Should render card list with hour weather data", async () => {
		const scope = fork({ values: new Map([[$forecastWeather, forecastMapper(forecastMock.forecast.forecastday)]]) })
		const forecast = scope.getState($forecastWeather)
		const data = forecast ? forecast[0].hour : null

		render(<WeatherCardList isLoading={false} weathers={data} />)
		expect(screen.getByText(/03:00/i)).toBeInTheDocument()
	})

	it("Should render card list with day weather data", async () => {
		const scope = fork({ values: new Map([[$forecastWeather, forecastMapper(forecastMock.forecast.forecastday)]]) })
		const forecast = scope.getState($forecastWeather)
		const data = forecast ? forecast.map(fore => fore.day) : null

		render(<WeatherCardList isLoading={false} weathers={data} />)
		expect(screen.getByText(/Чт, 18 мая/i)).toBeInTheDocument()
	})
})

describe("Screenshot weather card list screenshots", () => {
	it("Screenshot card list with hour weather data", async () => {
		const scope = fork({ values: new Map([[$forecastWeather, forecastMapper(forecastMock.forecast.forecastday)]]) })
		const forecast = scope.getState($forecastWeather)
		const data = forecast ? forecast[0].hour : null

		const { asFragment } = render(<WeatherCardList isLoading={false} weathers={data} />)
		expect(asFragment()).toMatchSnapshot()
	})

	it("Screenshot card list with day weather data", async () => {
		const scope = fork({ values: new Map([[$forecastWeather, forecastMapper(forecastMock.forecast.forecastday)]]) })
		const forecast = scope.getState($forecastWeather)
		const data = forecast ? forecast.map(fore => fore.day) : null

		const { asFragment } = render(<WeatherCardList isLoading={false} weathers={data} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
