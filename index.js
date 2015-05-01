var yaml = require('yaml-front-matter');

hexo.extend.filter.register('after_post_render', function(data) {
	data.excerpt = yaml.loadFront(data.raw).excerpt;
	return data;
});