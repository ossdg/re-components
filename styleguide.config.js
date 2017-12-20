'use strict'

const path = require('path');
const glob = require('glob');


module.exports = {
	sections: [
		{
			name: 'Elements',
			components: () => {

				return glob.sync(path.resolve(__dirname, 'packages/elements/**/docs/*.{js,jsx}'))
					.filter(module => {
						return !(/(__tests__|examples|simple\/)/.test(module));
					});
			}
		}
		,
		{
			name: 'Modules',
			components: () => {

				return glob.sync(path.resolve(__dirname, 'packages/modules/**/docs/*.{js,jsx}'))
					.filter(module => {
						return !(/(__tests__|examples|simple\/)/.test(module));
					});
			}
		}
	],
	// getExampleFilename(componentPath) {
	// 	var parsed = path.parse(componentPath);
	// 	return path.join(parsed.dir, parsed.name + '.examples.md');
	// },
	// components: 'packages/**/docs/*.{js,jsx}',
	// getComponentPathLine(componentPath) {
	// 	let newPath = componentPath.replace(/docs([^/]+)?([/].+jsx|.+js)$/, 'src');
	// 	const name = path.basename(componentPath, '.js');
	// 	return `import ${name} from '${newPath}';`
	// },
	title: 'Re-Components',
	template: "./styleguide.template.html",
	theme: {
		color: {
			link: '#1978c8',
			linkHover: '#f28a25'
		},
		fontFamily: {
			base: '"Roboto", "Comic Sans MS", "Comic Sans", cursive'
		},
		fontSize: {
			base: 15,
			text: 16,
			small: 13,
			h1: 36,
			h2: 26,
			h3: 22,
			h4: 18,
			h5: 16,
			h6: 16,
		}
	},
	styles: {
		Logo: {
			logo: {
				animation: 'blink ease-in-out 500ms infinite'
			},
			'@keyframes blink': {
				to: {
					opacity: 0.5
				}
			}
		}
	}



}
