import { forecastMock } from "../mock"

import { forecastMapper } from "./forecastDay.mapper"

describe("Forecast Day Mapper testing", () => {
	it("test mapping", () => {
		const mapped = forecastMapper(forecastMock.forecast.forecastday)
		expect(mapped).toEqual([
			{
				day: {
					date: "Чт, 18 мая",
					dateEpoch: 1684368000,
					iconCode: 1000,
					maxTemp: 26,
					minTemp: 14,
					text: "Sunny"
				},
				hour: [
					{
						date: "00:00",
						dateEpoch: 1684357200,
						iconCode: 1000,
						maxTemp: 15,
						minTemp: null,
						text: "Clear"
					},
					{
						date: "01:00",
						dateEpoch: 1684360800,
						iconCode: 1000,
						maxTemp: 15,
						minTemp: null,
						text: "Clear"
					},
					{
						date: "02:00",
						dateEpoch: 1684364400,
						iconCode: 1000,
						maxTemp: 14,
						minTemp: null,
						text: "Clear"
					},
					{
						date: "03:00",
						dateEpoch: 1684368000,
						iconCode: 1000,
						maxTemp: 14,
						minTemp: null,
						text: "Clear"
					},
					{
						date: "04:00",
						dateEpoch: 1684371600,
						iconCode: 1000,
						maxTemp: 14,
						minTemp: null,
						text: "Clear"
					},
					{
						date: "05:00",
						dateEpoch: 1684375200,
						iconCode: 1000,
						maxTemp: 15,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "06:00",
						dateEpoch: 1684378800,
						iconCode: 1000,
						maxTemp: 17,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "07:00",
						dateEpoch: 1684382400,
						iconCode: 1000,
						maxTemp: 18,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "08:00",
						dateEpoch: 1684386000,
						iconCode: 1000,
						maxTemp: 20,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "09:00",
						dateEpoch: 1684389600,
						iconCode: 1000,
						maxTemp: 22,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "10:00",
						dateEpoch: 1684393200,
						iconCode: 1003,
						maxTemp: 23,
						minTemp: null,
						text: "Partly cloudy"
					},
					{
						date: "11:00",
						dateEpoch: 1684396800,
						iconCode: 1003,
						maxTemp: 24,
						minTemp: null,
						text: "Partly cloudy"
					},
					{
						date: "12:00",
						dateEpoch: 1684400400,
						iconCode: 1000,
						maxTemp: 25,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "13:00",
						dateEpoch: 1684404000,
						iconCode: 1000,
						maxTemp: 26,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "14:00",
						dateEpoch: 1684407600,
						iconCode: 1000,
						maxTemp: 25,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "15:00",
						dateEpoch: 1684411200,
						iconCode: 1000,
						maxTemp: 24,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "16:00",
						dateEpoch: 1684414800,
						iconCode: 1000,
						maxTemp: 24,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "17:00",
						dateEpoch: 1684418400,
						iconCode: 1000,
						maxTemp: 23,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "18:00",
						dateEpoch: 1684422000,
						iconCode: 1000,
						maxTemp: 22,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "19:00",
						dateEpoch: 1684425600,
						iconCode: 1000,
						maxTemp: 20,
						minTemp: null,
						text: "Sunny"
					},
					{
						date: "20:00",
						dateEpoch: 1684429200,
						iconCode: 1063,
						maxTemp: 18,
						minTemp: null,
						text: "Patchy rain possible"
					},
					{
						date: "21:00",
						dateEpoch: 1684432800,
						iconCode: 1006,
						maxTemp: 17,
						minTemp: null,
						text: "Cloudy"
					},
					{
						date: "22:00",
						dateEpoch: 1684436400,
						iconCode: 1009,
						maxTemp: 17,
						minTemp: null,
						text: "Overcast"
					},
					{
						date: "23:00",
						dateEpoch: 1684440000,
						iconCode: 1009,
						maxTemp: 17,
						minTemp: null,
						text: "Overcast"
					}
				]
			}
		])
	})
})
