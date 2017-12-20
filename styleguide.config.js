'use strict'

const path = require('path');
const glob = require('glob');


module.exports = {
	styleguideDir: './docs',
	sections: [
		{
			name: 'Introduction',
			content: 'docs/introduction.md'
		},
		{
			name: 'Elements',
			components: () => {

				return glob.sync(path.resolve(__dirname, 'packages/elements/**/src/*.{js,jsx}'))
					.filter(module => {
						return !(/(__tests__|examples|simple\/)/.test(module));
					});
			}
		},
		{
			name: 'Modules',
			components: () => {

				return glob.sync(path.resolve(__dirname, 'packages/modules/**/src/*.{js,jsx}'))
					.filter(module => {
						return !(/(__tests__|examples|simple\/)/.test(module));
					});
			}
		}
	],
	skipComponentsWithoutExample: true,
	getExampleFilename(componentPath) {
		var parsed = path.parse(componentPath);
		let newPath = componentPath.replace(/src([^/]+)?([/].+jsx|.+js)$/, 'docs');

		return path.join(newPath, parsed.name + '.md');
	},
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
				animation: 'blink ease-in-out 1000ms infinite'
			},
			'@keyframes blink': {
				to: {
					opacity: 0.5
				}
			}
		}
	},
	propsParser(filePath, source, resolver, handlers) {
	 return require('react-docgen').parse(source, resolver, handlers)
 },
 resolver: require('react-docgen').resolver
	 .findExportedComponentDefinition



}
