import { firstLetterUpperCase } from "@/shared/lib"

export const getMonthDateAndWeekDay = (data: string, locale = "ru") => {
	const date = new Date(data)
	const weekday = date.toLocaleString(locale, { weekday: "short", day: "numeric", month: "short" })

	return firstLetterUpperCase([weekday])
}
