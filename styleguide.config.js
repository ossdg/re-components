'use strict'

const path = require('path');

module.exports = {
	components: 'packages/**/docs/*.{js,jsx}',
	getComponentPathLine(componentPath) {
		let newPath = componentPath.replace(/docs([^/]+)?([/].+jsx|.+js)$/, 'src');
		const name = path.basename(componentPath, '.js');
		return `import ${name} from '${newPath}';`
	}
}
