import { IForecastWeatherResponse } from "@/shared/api"

export const weatherMock: IForecastWeatherResponse = {
	current: {
		last_updated_epoch: 1684434600,
		last_updated: "2023-05-18 21:30",
		temp_c: 17.0,
		temp_f: 62.6,
		is_day: 0,
		condition: {
			text: "Clear",
			icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
			code: 1000
		},
		wind_mph: 11.9,
		wind_kph: 19.1,
		wind_degree: 330,
		wind_dir: "NNW",
		pressure_mb: 1022.0,
		pressure_in: 30.18,
		precip_mm: 0.0,
		precip_in: 0.0,
		humidity: 68,
		cloud: 0,
		feelslike_c: 17.0,
		feelslike_f: 62.6,
		vis_km: 10.0,
		vis_miles: 6.0,
		uv: 1.0,
		gust_mph: 11.2,
		gust_kph: 18.0
	},
	location: {
		name: "Moscow",
		region: "Moscow City",
		country: "Russia",
		lat: 55.75,
		lon: 37.62,
		tz_id: "Europe/Moscow",
		localtime: "2023-05-18 21:35",
		location_epoch: 1684434928
	},
	forecast: {
		forecastday: [
			{
				date: "2023-05-18",
				date_epoch: 1684368000,
				day: {
					maxtemp_c: 25.5,
					maxtemp_f: 77.9,
					mintemp_c: 13.3,
					mintemp_f: 55.9,
					avgtemp_c: 19.1,
					avgtemp_f: 66.4,
					maxwind_mph: 9.6,
					maxwind_kph: 15.5,
					totalprecip_mm: 0.1,
					totalprecip_in: 0.0,
					totalsnow_cm: 0.0,
					avgvis_km: 10.0,
					avgvis_miles: 6.0,
					avghumidity: 58.0,
					daily_will_it_rain: 0,
					daily_chance_of_rain: 0,
					daily_will_it_snow: 0,
					daily_chance_of_snow: 0,
					condition: {
						text: "Sunny",
						icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
						code: 1000
					},
					uv: 5.0
				},
				astro: {
					sunrise: "04:13 AM",
					sunset: "08:39 PM",
					moonrise: "03:40 AM",
					moonset: "07:26 PM",
					moon_phase: "Waning Crescent",
					moon_illumination: "3",
					is_moon_up: 0,
					is_sun_up: 0
				},
				hour: [
					{
						time_epoch: 1684357200,
						time: "2023-05-18 00:00",
						temp_c: 14.5,
						temp_f: 58.1,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000
						},
						wind_mph: 4.7,
						wind_kph: 7.6,
						wind_degree: 180,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 72,
						cloud: 12,
						feelslike_c: 14.4,
						feelslike_f: 57.9,
						windchill_c: 14.4,
						windchill_f: 57.9,
						heatindex_c: 14.5,
						heatindex_f: 58.1,
						dewpoint_c: 9.4,
						dewpoint_f: 48.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 9.4,
						gust_kph: 15.1,
						uv: 1.0
					},
					{
						time_epoch: 1684360800,
						time: "2023-05-18 01:00",
						temp_c: 14.1,
						temp_f: 57.4,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000
						},
						wind_mph: 4.5,
						wind_kph: 7.2,
						wind_degree: 178,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 73,
						cloud: 9,
						feelslike_c: 14.0,
						feelslike_f: 57.2,
						windchill_c: 14.0,
						windchill_f: 57.2,
						heatindex_c: 14.1,
						heatindex_f: 57.4,
						dewpoint_c: 9.4,
						dewpoint_f: 48.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.9,
						gust_kph: 14.4,
						uv: 1.0
					},
					{
						time_epoch: 1684364400,
						time: "2023-05-18 02:00",
						temp_c: 13.6,
						temp_f: 56.5,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000
						},
						wind_mph: 4.3,
						wind_kph: 6.8,
						wind_degree: 185,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 75,
						cloud: 7,
						feelslike_c: 13.4,
						feelslike_f: 56.1,
						windchill_c: 13.4,
						windchill_f: 56.1,
						heatindex_c: 13.6,
						heatindex_f: 56.5,
						dewpoint_c: 9.2,
						dewpoint_f: 48.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.5,
						gust_kph: 13.7,
						uv: 1.0
					},
					{
						time_epoch: 1684368000,
						time: "2023-05-18 03:00",
						temp_c: 13.3,
						temp_f: 55.9,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000
						},
						wind_mph: 4.0,
						wind_kph: 6.5,
						wind_degree: 193,
						wind_dir: "SSW",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 76,
						cloud: 5,
						feelslike_c: 13.2,
						feelslike_f: 55.8,
						windchill_c: 13.2,
						windchill_f: 55.8,
						heatindex_c: 13.3,
						heatindex_f: 55.9,
						dewpoint_c: 9.2,
						dewpoint_f: 48.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.1,
						gust_kph: 13.0,
						uv: 1.0
					},
					{
						time_epoch: 1684371600,
						time: "2023-05-18 04:00",
						temp_c: 13.4,
						temp_f: 56.1,
						is_day: 0,
						condition: {
							text: "Clear",
							icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
							code: 1000
						},
						wind_mph: 3.8,
						wind_kph: 6.1,
						wind_degree: 194,
						wind_dir: "SSW",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 76,
						cloud: 4,
						feelslike_c: 13.3,
						feelslike_f: 55.9,
						windchill_c: 13.3,
						windchill_f: 55.9,
						heatindex_c: 13.4,
						heatindex_f: 56.1,
						dewpoint_c: 9.2,
						dewpoint_f: 48.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 7.4,
						gust_kph: 11.9,
						uv: 1.0
					},
					{
						time_epoch: 1684375200,
						time: "2023-05-18 05:00",
						temp_c: 14.4,
						temp_f: 57.9,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 3.8,
						wind_kph: 6.1,
						wind_degree: 190,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 71,
						cloud: 4,
						feelslike_c: 14.5,
						feelslike_f: 58.1,
						windchill_c: 14.5,
						windchill_f: 58.1,
						heatindex_c: 14.4,
						heatindex_f: 57.9,
						dewpoint_c: 9.2,
						dewpoint_f: 48.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 6.7,
						gust_kph: 10.8,
						uv: 4.0
					},
					{
						time_epoch: 1684378800,
						time: "2023-05-18 06:00",
						temp_c: 16.2,
						temp_f: 61.2,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 4.7,
						wind_kph: 7.6,
						wind_degree: 189,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 64,
						cloud: 5,
						feelslike_c: 16.2,
						feelslike_f: 61.2,
						windchill_c: 16.2,
						windchill_f: 61.2,
						heatindex_c: 16.2,
						heatindex_f: 61.2,
						dewpoint_c: 9.3,
						dewpoint_f: 48.7,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 6.5,
						gust_kph: 10.4,
						uv: 5.0
					},
					{
						time_epoch: 1684382400,
						time: "2023-05-18 07:00",
						temp_c: 18.0,
						temp_f: 64.4,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 5.6,
						wind_kph: 9.0,
						wind_degree: 180,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 57,
						cloud: 5,
						feelslike_c: 18.0,
						feelslike_f: 64.4,
						windchill_c: 18.0,
						windchill_f: 64.4,
						heatindex_c: 18.0,
						heatindex_f: 64.4,
						dewpoint_c: 9.4,
						dewpoint_f: 48.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 6.9,
						gust_kph: 11.2,
						uv: 5.0
					},
					{
						time_epoch: 1684386000,
						time: "2023-05-18 08:00",
						temp_c: 19.9,
						temp_f: 67.8,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 6.5,
						wind_kph: 10.4,
						wind_degree: 179,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 52,
						cloud: 6,
						feelslike_c: 19.9,
						feelslike_f: 67.8,
						windchill_c: 19.9,
						windchill_f: 67.8,
						heatindex_c: 19.9,
						heatindex_f: 67.8,
						dewpoint_c: 9.7,
						dewpoint_f: 49.5,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 7.4,
						gust_kph: 11.9,
						uv: 5.0
					},
					{
						time_epoch: 1684389600,
						time: "2023-05-18 09:00",
						temp_c: 21.4,
						temp_f: 70.5,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 7.2,
						wind_kph: 11.5,
						wind_degree: 187,
						wind_dir: "S",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 46,
						cloud: 5,
						feelslike_c: 21.4,
						feelslike_f: 70.5,
						windchill_c: 21.4,
						windchill_f: 70.5,
						heatindex_c: 24.2,
						heatindex_f: 75.6,
						dewpoint_c: 9.4,
						dewpoint_f: 48.9,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.3,
						gust_kph: 13.3,
						uv: 6.0
					},
					{
						time_epoch: 1684393200,
						time: "2023-05-18 10:00",
						temp_c: 22.6,
						temp_f: 72.7,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003
						},
						wind_mph: 7.4,
						wind_kph: 11.9,
						wind_degree: 195,
						wind_dir: "SSW",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 39,
						cloud: 27,
						feelslike_c: 24.1,
						feelslike_f: 75.4,
						windchill_c: 22.6,
						windchill_f: 72.7,
						heatindex_c: 24.1,
						heatindex_f: 75.4,
						dewpoint_c: 8.0,
						dewpoint_f: 46.4,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.5,
						gust_kph: 13.7,
						uv: 6.0
					},
					{
						time_epoch: 1684396800,
						time: "2023-05-18 11:00",
						temp_c: 23.9,
						temp_f: 75.0,
						is_day: 1,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							code: 1003
						},
						wind_mph: 7.4,
						wind_kph: 11.9,
						wind_degree: 192,
						wind_dir: "SSW",
						pressure_mb: 1022.0,
						pressure_in: 30.16,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 35,
						cloud: 25,
						feelslike_c: 24.4,
						feelslike_f: 75.9,
						windchill_c: 23.9,
						windchill_f: 75.0,
						heatindex_c: 24.4,
						heatindex_f: 75.9,
						dewpoint_c: 7.4,
						dewpoint_f: 45.3,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.5,
						gust_kph: 13.7,
						uv: 6.0
					},
					{
						time_epoch: 1684400400,
						time: "2023-05-18 12:00",
						temp_c: 24.9,
						temp_f: 76.8,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 6.9,
						wind_kph: 11.2,
						wind_degree: 190,
						wind_dir: "S",
						pressure_mb: 1021.0,
						pressure_in: 30.15,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 32,
						cloud: 19,
						feelslike_c: 24.8,
						feelslike_f: 76.6,
						windchill_c: 24.9,
						windchill_f: 76.8,
						heatindex_c: 24.8,
						heatindex_f: 76.6,
						dewpoint_c: 7.0,
						dewpoint_f: 44.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.1,
						gust_kph: 13.0,
						uv: 6.0
					},
					{
						time_epoch: 1684404000,
						time: "2023-05-18 13:00",
						temp_c: 25.5,
						temp_f: 77.9,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 6.3,
						wind_kph: 10.1,
						wind_degree: 209,
						wind_dir: "SSW",
						pressure_mb: 1021.0,
						pressure_in: 30.14,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 31,
						cloud: 16,
						feelslike_c: 25.1,
						feelslike_f: 77.2,
						windchill_c: 25.5,
						windchill_f: 77.9,
						heatindex_c: 25.1,
						heatindex_f: 77.2,
						dewpoint_c: 7.0,
						dewpoint_f: 44.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 7.2,
						gust_kph: 11.5,
						uv: 7.0
					},
					{
						time_epoch: 1684407600,
						time: "2023-05-18 14:00",
						temp_c: 24.7,
						temp_f: 76.5,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 8.1,
						wind_kph: 13.0,
						wind_degree: 263,
						wind_dir: "W",
						pressure_mb: 1021.0,
						pressure_in: 30.15,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 36,
						cloud: 19,
						feelslike_c: 24.9,
						feelslike_f: 76.8,
						windchill_c: 24.7,
						windchill_f: 76.5,
						heatindex_c: 24.9,
						heatindex_f: 76.8,
						dewpoint_c: 8.7,
						dewpoint_f: 47.7,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 9.2,
						gust_kph: 14.8,
						uv: 6.0
					},
					{
						time_epoch: 1684411200,
						time: "2023-05-18 15:00",
						temp_c: 23.3,
						temp_f: 73.9,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 9.2,
						wind_kph: 14.8,
						wind_degree: 282,
						wind_dir: "WNW",
						pressure_mb: 1021.0,
						pressure_in: 30.15,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 42,
						cloud: 19,
						feelslike_c: 24.6,
						feelslike_f: 76.3,
						windchill_c: 23.3,
						windchill_f: 73.9,
						heatindex_c: 24.6,
						heatindex_f: 76.3,
						dewpoint_c: 9.7,
						dewpoint_f: 49.5,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 10.5,
						gust_kph: 16.9,
						uv: 6.0
					},
					{
						time_epoch: 1684414800,
						time: "2023-05-18 16:00",
						temp_c: 23.4,
						temp_f: 74.1,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 6.0,
						wind_kph: 9.7,
						wind_degree: 290,
						wind_dir: "WNW",
						pressure_mb: 1021.0,
						pressure_in: 30.16,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 44,
						cloud: 19,
						feelslike_c: 24.7,
						feelslike_f: 76.5,
						windchill_c: 23.4,
						windchill_f: 74.1,
						heatindex_c: 24.7,
						heatindex_f: 76.5,
						dewpoint_c: 10.4,
						dewpoint_f: 50.7,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 6.9,
						gust_kph: 11.2,
						uv: 6.0
					},
					{
						time_epoch: 1684418400,
						time: "2023-05-18 17:00",
						temp_c: 22.8,
						temp_f: 73.0,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 6.3,
						wind_kph: 10.1,
						wind_degree: 312,
						wind_dir: "NW",
						pressure_mb: 1021.0,
						pressure_in: 30.16,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 48,
						cloud: 19,
						feelslike_c: 24.6,
						feelslike_f: 76.3,
						windchill_c: 22.8,
						windchill_f: 73.0,
						heatindex_c: 24.6,
						heatindex_f: 76.3,
						dewpoint_c: 11.2,
						dewpoint_f: 52.2,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 7.2,
						gust_kph: 11.5,
						uv: 6.0
					},
					{
						time_epoch: 1684422000,
						time: "2023-05-18 18:00",
						temp_c: 21.4,
						temp_f: 70.5,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 7.2,
						wind_kph: 11.5,
						wind_degree: 321,
						wind_dir: "NW",
						pressure_mb: 1022.0,
						pressure_in: 30.16,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 55,
						cloud: 23,
						feelslike_c: 21.4,
						feelslike_f: 70.5,
						windchill_c: 21.4,
						windchill_f: 70.5,
						heatindex_c: 24.4,
						heatindex_f: 75.9,
						dewpoint_c: 12.1,
						dewpoint_f: 53.8,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.3,
						gust_kph: 13.3,
						uv: 6.0
					},
					{
						time_epoch: 1684425600,
						time: "2023-05-18 19:00",
						temp_c: 19.9,
						temp_f: 67.8,
						is_day: 1,
						condition: {
							text: "Sunny",
							icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							code: 1000
						},
						wind_mph: 8.9,
						wind_kph: 14.4,
						wind_degree: 321,
						wind_dir: "NW",
						pressure_mb: 1022.0,
						pressure_in: 30.18,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 65,
						cloud: 24,
						feelslike_c: 19.9,
						feelslike_f: 67.8,
						windchill_c: 19.9,
						windchill_f: 67.8,
						heatindex_c: 19.9,
						heatindex_f: 67.8,
						dewpoint_c: 13.1,
						dewpoint_f: 55.6,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 10.3,
						gust_kph: 16.6,
						uv: 5.0
					},
					{
						time_epoch: 1684429200,
						time: "2023-05-18 20:00",
						temp_c: 17.5,
						temp_f: 63.5,
						is_day: 1,
						condition: {
							text: "Patchy rain possible",
							icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
							code: 1063
						},
						wind_mph: 9.6,
						wind_kph: 15.5,
						wind_degree: 327,
						wind_dir: "NNW",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.1,
						precip_in: 0.0,
						humidity: 72,
						cloud: 70,
						feelslike_c: 17.5,
						feelslike_f: 63.5,
						windchill_c: 17.5,
						windchill_f: 63.5,
						heatindex_c: 17.5,
						heatindex_f: 63.5,
						dewpoint_c: 12.4,
						dewpoint_f: 54.3,
						will_it_rain: 1,
						chance_of_rain: 72,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 12.5,
						gust_kph: 20.2,
						uv: 4.0
					},
					{
						time_epoch: 1684432800,
						time: "2023-05-18 21:00",
						temp_c: 16.9,
						temp_f: 62.4,
						is_day: 0,
						condition: {
							text: "Cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/night/119.png",
							code: 1006
						},
						wind_mph: 8.7,
						wind_kph: 14.0,
						wind_degree: 339,
						wind_dir: "NNW",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 75,
						cloud: 66,
						feelslike_c: 16.9,
						feelslike_f: 62.4,
						windchill_c: 16.9,
						windchill_f: 62.4,
						heatindex_c: 16.9,
						heatindex_f: 62.4,
						dewpoint_c: 12.4,
						dewpoint_f: 54.3,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 11.2,
						gust_kph: 18.0,
						uv: 1.0
					},
					{
						time_epoch: 1684436400,
						time: "2023-05-18 22:00",
						temp_c: 16.5,
						temp_f: 61.7,
						is_day: 0,
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
							code: 1009
						},
						wind_mph: 7.4,
						wind_kph: 11.9,
						wind_degree: 343,
						wind_dir: "NNW",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 76,
						cloud: 100,
						feelslike_c: 16.5,
						feelslike_f: 61.7,
						windchill_c: 16.5,
						windchill_f: 61.7,
						heatindex_c: 16.5,
						heatindex_f: 61.7,
						dewpoint_c: 12.3,
						dewpoint_f: 54.1,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 9.6,
						gust_kph: 15.5,
						uv: 1.0
					},
					{
						time_epoch: 1684440000,
						time: "2023-05-18 23:00",
						temp_c: 16.2,
						temp_f: 61.2,
						is_day: 0,
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/night/122.png",
							code: 1009
						},
						wind_mph: 6.7,
						wind_kph: 10.8,
						wind_degree: 335,
						wind_dir: "NNW",
						pressure_mb: 1022.0,
						pressure_in: 30.19,
						precip_mm: 0.0,
						precip_in: 0.0,
						humidity: 78,
						cloud: 100,
						feelslike_c: 16.2,
						feelslike_f: 61.2,
						windchill_c: 16.2,
						windchill_f: 61.2,
						heatindex_c: 16.2,
						heatindex_f: 61.2,
						dewpoint_c: 12.3,
						dewpoint_f: 54.1,
						will_it_rain: 0,
						chance_of_rain: 0,
						will_it_snow: 0,
						chance_of_snow: 0,
						vis_km: 10.0,
						vis_miles: 6.0,
						gust_mph: 8.7,
						gust_kph: 14.0,
						uv: 1.0
					}
				]
			}
		]
	}
}
