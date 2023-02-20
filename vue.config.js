const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		output: {
			filename: '[name].[hash].js',
			chunkFilename: '[name].[hash].js',
		},
	},
});
