
module.exports = {
	"extends": "standard",
	"env": {
		browser: true
	},
	"globals": {
	  "Wheel": "readonly"
	},
	"plugins": [
		"svelte3"
	],
	"overrides": [{
		files: [ '**/*.svelte' ],
		processor: 'svelte3/svelte3'
	}],

	"rules": {
		"indent": ["error", "tab"],
		"no-tabs": ["off"],
		"multiline-ternary": ["off", "always"],
		"import/no-absolute-path": ["off"],
		"import/first": ["off"],
		quotes: ["error", "backtick"],
		camelcase: ["off"],
		"prefer-const": ["warn"]
	}
};