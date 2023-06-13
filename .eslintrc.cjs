module.exports = {
	env: { browser: true, es2020: true, es6: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",

		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",

		"prettier/react",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		// General rules
		"no-unused-vars": "off",

		// React rules
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react-refresh/only-export-components": "warn",

		"import/default": "error",
		"import/export": "error",
		"import/named": "error",
		"import/no-cycle": "error",
		"import/no-duplicates": "error",
		"import/no-named-as-default": "error",
		"import/no-unresolved": "error",
		"import/order": [
			"warn",
			{
				alphabetize: {
					caseInsensitive: true,
					order: "asc",
				},
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
				],
				"newlines-between": "always",
			},
		],
		"no-alert": "error",
		"no-console": "error",
		"no-constant-binary-expression": "error",
		"no-constant-condition": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-empty-pattern": "error",
		"no-extra-boolean-cast": "error",
		"no-redeclare": "error",
		"no-unused-private-class-members": "error",
		"prefer-const": "warn",
		"prettier/prettier": [
			"warn",
			{
				semi: true,
				trailingComma: "es5",
				singleQuote: true,
				printWidth: 80,
				tabWidth: 2,
				jsxSingleQuote: false,
				jsxBracketSameLine: false,
				arrowParens: "always",
				bracketSpacing: true,
				endOfLine: "auto",
			},
			{
				properties: {
					usePrettierrc: true,
				},
			},
		],
		radix: "error",
		"sort-keys-fix/sort-keys-fix": "warn",
	},
};
