module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"plugin:testing-library/react",
		"plugin:jest-dom/recommended",
		"plugin:prettier/recommended"
	],
	plugins: ["react-refresh", "@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto"
			}
		],
		indent: "off",
		"react/react-in-jsx-scope": "off",
		"react-refresh/only-export-components": "warn",
		"no-tabs": "off",
		"react-hooks/exhaustive-deps": "off",
		"no-console": "warn",
		"import/prefer-default-export": "off",
		"arrow-parens": ["error", "as-needed"],
		"no-underscore-dangle": "off",
		"class-methods-use-this": "off",
		"prefer-destructuring": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/comma-dangle": "off",
		"@typescript-eslint/lines-between-class-members": "off"
	}
}
