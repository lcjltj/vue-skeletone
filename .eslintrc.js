module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				endOfLine: 'auto',
				bracketSpacing: true,
				arrowParens: 'avoid',
				'eslint.validate': [
					{
						language: 'vue',
						autoFix: true,
					},
					{
						language: 'javascript',
						autoFix: true,
					},
					{
						language: 'javascriptreact',
						autoFix: true,
					},
					{
						language: 'typescript',
						autoFix: true,
					},
					{
						language: 'typescriptreact',
						autoFix: true,
					},
				],
				'editor.codeActionsOnSave': {
					'source.fixAll.eslint': true,
				},
				// don't format on save
				'editor.formatOnSave': false,
			},
		],
	},
};
