import axios from "axios"

const BASE_URL = "http://api.weatherapi.com/v1"
const KEY = "629499dd2f4b49dabd5152841231405"

export const api = axios.create({ baseURL: BASE_URL, params: { key: KEY, lang: "ru" } })
