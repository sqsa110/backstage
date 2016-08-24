const webpack = require('webpack');

const vendors = [
	'react',
	'react-dom'
];

module.exports = {
	output : {
		path : './public/assents',
		filename : '[name].js',
		library : '[name]'
	},
	entry : {
		lib : vendors
	},
	plugins : [
		new webpack.DllPlugin({
			path : 'mainfest.json',
			name : '[name]',
			context : __dirname
		})
	]
}
