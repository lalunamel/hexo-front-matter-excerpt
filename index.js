window = global;
var yaml = require('yaml-front-matter');

hexo.extend.filter.register('after_post_render', function(data, callback) {
	data.excerpt = yaml.loadFront(data.raw).excerpt;
	callback(null, data);
});