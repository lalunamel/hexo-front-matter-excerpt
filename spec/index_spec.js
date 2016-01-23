var proxyquire =  require('proxyquire')

describe('after_post_render filter', function() {
	var requireJsInjector, registerSpy, index, hexoData,
			filterName, afterPostRender;

	beforeEach(function() {
		registerSpy = function(name, func) {
			filterName = name;
			afterPostRender = func;
		};
		loadFrontSpy = jasmine.createSpy();

		hexo = {extend: {filter: {register: registerSpy } } };
		hexoData = {};
	});

	describe('when an excerpt is defined in the yaml front matter', function() {
		var excerpt;

		beforeEach(function() {
			excerpt = 'A sample post excerpt';
			proxyquire('../index', {'yaml-front-matter': {loadFront: function() { return {excerpt: excerpt} }}});
			index = require('../index.js');
		});

		it('returns hexoData with an excerpt defined in the yaml front matter', function() {
			expect(afterPostRender(hexoData)).toEqual({excerpt: excerpt});
		});
	});

	describe('when an excerpt is not defined in the yaml front matter', function() {
		beforeEach(function() {
			proxyquire('../index', {'yaml-front-matter': {loadFront: function() {return {}}}});
			index = require('../index.js');
		});

		it('returns hexoData unchanged', function() {
			expect(afterPostRender(hexoData)).toEqual(hexoData);
		});
	});
});