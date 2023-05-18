export const firstLetterUpperCase = (strings: string[], separator = " ") =>
	strings.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(separator)
