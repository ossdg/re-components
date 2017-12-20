const path = require('path');

module.exports = {
	context: path.join(__dirname, 'packages'),
	entry: './packages',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?importLoaders=1',
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				query: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
		],
	},
};
