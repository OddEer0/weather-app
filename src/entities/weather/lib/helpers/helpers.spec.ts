import { getMonthDateAndWeekDay } from "."

describe("getMonthDateAndWeekDay helpers testing", () => {
	it("getMonthDateAndWeekDay default use", () => {
		const weekday = getMonthDateAndWeekDay("2023-05-18 00:00")
		const weekday2 = getMonthDateAndWeekDay("2023-05-19 00:00")
		const weekday3 = getMonthDateAndWeekDay("2023-05-21 00:00")
		expect(weekday).toBe("Чт, 18 мая")
		expect(weekday2).toBe("Пт, 19 мая")
		expect(weekday3).toBe("Вс, 21 мая")
	})

	it("getMonthDateAndWeekDay locale params", () => {
		const weekday = getMonthDateAndWeekDay("2023-05-18 00:00", "en")
		const weekday2 = getMonthDateAndWeekDay("2023-05-19 00:00", "en")
		const weekday3 = getMonthDateAndWeekDay("2023-05-21 00:00", "en")
		expect(weekday).toBe("Thu, May 18")
		expect(weekday2).toBe("Fri, May 19")
		expect(weekday3).toBe("Sun, May 21")
	})

	it("getMonthDateAndWeekDay invalid date param", () => {
		const weekday = getMonthDateAndWeekDay("dsadsad")
		expect(weekday).toBe("Invalid Date")
	})
})
